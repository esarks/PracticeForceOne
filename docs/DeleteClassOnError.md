---
title: "DeleteClassOnError"
---

# Delete Class File on Compilation Error - Critical Safety Fix

## Problem Statement

**CRITICAL ISSUE:** JAC currently exhibits dangerous behavior when script compilation fails. If a `.script` file is modified and recompilation fails, the old `.class` file from the previous successful compilation remains in the filesystem. JAC will then execute this stale `.class` file, which does not match the current source code.

This creates a serious safety and debugging issue where:
1. Developer modifies a `.script` file
2. Compilation fails due to syntax error or other issue
3. Old `.class` file still exists from previous successful compilation
4. JAC detects the `.class` file and executes it
5. Developer sees unexpected behavior because old code is running
6. Developer assumes their changes are in effect, but they're not

## Risk Analysis

### High-Risk Scenarios

1. **Logic Errors Go Undetected**
   - Developer adds validation logic to prevent data corruption
   - Compilation fails (typo, missing import, etc.)
   - Old code without validation continues to run
   - Data corruption occurs that should have been prevented

2. **Security Vulnerabilities**
   - Developer adds authentication/authorization checks
   - Compilation fails
   - Old code without security checks continues to run
   - System remains vulnerable despite attempted fix

3. **Database Migration Issues**
   - Developer updates SQL generation script for schema change
   - Compilation fails
   - Old SQL generation logic runs
   - Database operations fail or corrupt data due to schema mismatch

4. **Debugging Confusion**
   - Developer spends hours debugging "new" code
   - Actually running old code, making debugging impossible
   - False conclusions drawn about what doesn't work

5. **Production Deployment**
   - Stale class files accidentally deployed to production
   - Expected functionality missing or broken
   - Rollback confusion when trying to identify what changed

## Current Behavior

### JAC Compilation Flow (Current)

```
1. JAC detects .script file is stale (source newer than .class)
2. Attempts to recompile .script → .java
3. ScriptWriter transforms .script to .java
4. javac compiles .java → .class

   IF COMPILATION FAILS:
   ✗ Error messages displayed
   ✗ .class file still exists (from previous successful compilation)
   ✗ JAC may load and execute the stale .class file

5. Dynamic class loading via AcClassLoader
6. Execution proceeds with whatever .class file exists
```

### Key Classes Involved

- **`Script.java`** - Central compilation orchestrator
  - `compile()` method manages compilation lifecycle
  - `compileTheJavaFiles()` calls javac
  - May need modification to delete .class before compilation

- **`ScriptWriter.java`** - Transforms .script → .java
  - Generates .java file from .script source
  - Doesn't handle .class file deletion

- **`AcClassLoader.java`** - Dynamic class loading
  - Loads .class files at runtime
  - Checks timestamps to detect stale classes
  - Should fail hard if attempting to load stale class after failed compilation

- **`jac.java`** - Command-line interface
  - Entry point for compilation
  - Could add safety checks and reporting

## Proposed Fix

### Strategy: Delete Class File Before Recompilation

When JAC detects a stale `.script` file and attempts recompilation, it should:

```
1. Detect .script is stale (source timestamp > class timestamp)
2. **DELETE the existing .class file BEFORE attempting recompilation**
3. Attempt to recompile .script → .java → .class

   IF COMPILATION SUCCEEDS:
   ✓ New .class file created
   ✓ New code executes

   IF COMPILATION FAILS:
   ✓ Error messages displayed
   ✓ NO .class file exists
   ✓ JAC cannot execute stale code
   ✓ Clear failure mode - execution aborts with error
   ✓ Developer forced to fix compilation error before proceeding
```

### Implementation Locations

#### 1. Script.java - compile() Method

**Current logic:**
```java
// Detect if recompilation needed
if (sourceNewer || !classExists) {
    compileScriptToJava();  // ScriptWriter transforms
    compileTheJavaFiles();   // javac compilation
}
loadClass();  // Load .class if it exists
```

**Proposed logic:**
```java
// Detect if recompilation needed
if (sourceNewer || !classExists) {
    // DELETE existing .class file BEFORE recompilation
    if (classFileExists) {
        deleteClassFile();  // NEW METHOD
        logInfo("Deleted stale class file: " + classPath);
    }

    try {
        compileScriptToJava();  // ScriptWriter transforms
        compileTheJavaFiles();   // javac compilation

        // Verify .class was actually created
        if (!classFileExists) {
            throw new CompilationException("Compilation claimed success but no .class file created");
        }
    } catch (CompilationException e) {
        // Compilation failed, .class file does not exist (we deleted it)
        // This is SAFE - cannot run stale code
        logError("Compilation failed. No class file exists. Fix errors and retry.");
        throw e;  // Propagate error, do NOT attempt to load/execute
    }
}

// Only load if class file exists and is fresh
if (classFileExists && !isStale) {
    loadClass();
} else {
    throw new RuntimeException("Cannot execute: no valid class file exists");
}
```

#### 2. AcClassLoader.java - Enhanced Staleness Checking

Add explicit staleness validation:

```java
public Class<PENDING> loadClass(String name) {
    File classFile = getClassFile(name);
    File sourceFile = getSourceFile(name);  // .script or .java

    if (!classFile.exists()) {
        throw new ClassNotFoundException("Class file does not exist: " + name);
    }

    if (sourceFile.exists() && sourceFile.lastModified() > classFile.lastModified()) {
        throw new StaleClassException(
            "Class file is stale - source is newer. " +
            "This indicates a compilation failure. " +
            "Fix compilation errors before running."
        );
    }

    // Load class
    return defineClass(name, classBytes, 0, classBytes.length);
}
```

#### 3. jac.java - Command-Line Safety Messages

Add clear warnings and reporting:

```java
if (compilationFailed) {
    System.err.println("=================================================");
    System.err.println("ERROR: Compilation failed");
    System.err.println("All stale class files have been deleted for safety");
    System.err.println("Fix compilation errors before attempting to run");
    System.err.println("=================================================");
    System.exit(1);
}
```

### Delete Strategy

**What to delete:**
- Primary `.class` file for the script entity
- Any inner class `.class` files (`Entity$InnerClass.class`)
- Corresponding `.java` file if desired (optional - useful for debugging)

**When to delete:**
- BEFORE attempting recompilation (fail-safe approach)
- NOT after failed compilation (too late - race conditions possible)

**File patterns to delete:**
```
EntityName.class
EntityName$*.class  (inner classes)
EntityName.java (optional - for clean regeneration)
```

## Benefits of This Fix

1. **Safe Failure Mode**
   - Failed compilation = no class file = cannot run wrong code
   - Forces developer to fix errors immediately

2. **Eliminates Confusion**
   - No more "why is my change not workingPENDING"
   - Clear error: compilation failed, no executable code

3. **Prevents Silent Bugs**
   - Cannot accidentally run stale code
   - Cannot accidentally deploy stale code

4. **Better Development Experience**
   - Immediate feedback when compilation fails
   - No hidden state to confuse debugging

5. **Production Safety**
   - Stale class files cannot persist into deployment
   - Build failures are explicit and cannot be ignored

## Testing Strategy

### Test Cases

1. **Test: Failed Compilation Deletes Class**
   ```
   Given: Valid .script file with working .class file
   When: Modify .script to introduce syntax error
   And: Run JAC
   Then: Old .class file should be deleted
   And: Compilation should fail with error message
   And: No .class file should exist
   And: Attempting to run should fail with clear error
   ```

2. **Test: Successful Recompilation Creates New Class**
   ```
   Given: Modified .script file (no .class exists)
   When: Run JAC with valid syntax
   Then: New .class file created
   And: New code executes correctly
   ```

3. **Test: Inner Classes Deleted**
   ```
   Given: Script with inner classes (Entity$Inner.class exists)
   When: Modify script and compilation fails
   Then: Entity.class AND all Entity$*.class files deleted
   ```

4. **Test: Timestamp Validation**
   ```
   Given: .script modified, .class deleted, compilation failed
   When: Attempt to manually copy old .class file back
   Then: AcClassLoader should detect staleness and refuse to load
   ```

5. **Test: Multiple Scripts in Dependency Chain**
   ```
   Given: ScriptA depends on ScriptB
   When: ScriptB compilation fails
   Then: ScriptB.class deleted
   And: ScriptA compilation should fail (missing dependency)
   And: ScriptA.class also deleted
   ```

6. **Test: Merge Scenario**
   ```
   Given: Script using merge sections <!preserve!>...<!end preserve!>
   When: Compilation fails
   Then: .class deleted but .java preserved (has merge sections)
   And: Developer can fix syntax and recompile
   And: Merge sections still intact
   ```

## Backward Compatibility Considerations

### Minimal Impact Expected

This fix should have minimal impact on normal operations:

- ✓ **Successful compilations:** No change in behavior
- ✓ **First-time compilations:** No change (no .class exists to delete)
- ✓ **Failed compilations:** NEW BEHAVIOR - class files deleted
  - This is the fix - current behavior is dangerous

### Migration Path

1. **Phase 1: Add Deletion Logic**
   - Implement class file deletion before recompilation
   - Add logging to track deletions
   - Monitor for any unexpected issues

2. **Phase 2: Enhanced Validation**
   - Add staleness checking in AcClassLoader
   - Throw clear exceptions for stale class attempts
   - Improve error messages

3. **Phase 3: User Communication**
   - Document new behavior in release notes
   - Update error messages with helpful guidance
   - Update build system documentation

## Related Documentation

- **build-system.md** - Complete JAC build system architecture
- **HowToWriteScript.md** - Script file syntax and compilation
- **Jrun.md** - Runtime execution system
- **ScriptWriter.md** - ScriptWriter state machine and bugs
- **Merge.md** (if exists) - Code preservation during regeneration

## Implementation Priority

**PRIORITY: HIGH**

This is a safety-critical fix that should be implemented as soon as possible:

- ✗ Current behavior is dangerous and leads to bugs
- ✓ Fix is straightforward - delete before compile
- ✓ Minimal risk of breaking existing functionality
- ✓ Significant improvement in developer experience
- ✓ Prevents potential production incidents

## Verification Checklist

After implementing this fix, verify:

- [ ] Successful compilation still works normally
- [ ] Failed compilation deletes .class file
- [ ] Failed compilation prevents execution
- [ ] Error messages are clear and helpful
- [ ] Inner classes are deleted along with main class
- [ ] AcClassLoader detects and rejects stale classes
- [ ] Build logs show deletion actions
- [ ] Documentation updated
- [ ] All test cases pass
- [ ] Performance impact negligible (deletion is fast)

## Summary

**Current Risk:** JAC executes stale class files when compilation fails, leading to bugs, confusion, and potential security issues.

**Proposed Fix:** Delete class files BEFORE attempting recompilation. If compilation fails, no class file exists, preventing execution of stale code.

**Impact:** Safer, more predictable build system with clearer failure modes. Forces developers to fix compilation errors immediately rather than accidentally running outdated code.

**Implementation:** Modify `Script.java` to delete .class files before recompilation, enhance `AcClassLoader.java` to validate staleness, improve error messaging in `jac.java`.

---

**Status:** Proposed Fix - Awaiting Implementation
**Created:** 2025-10-28
**Priority:** HIGH - Safety Critical
