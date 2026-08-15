---
title: "ReverseMerge"
---

# Reverse Merge - Understanding the Dialog

## What is "Reverse Merge"?

When you invoke a JAC script and see the dialog:

```
Do you want to Reverse Merge MyScript.script?
[Yes] [No] [Cancel]
```

This means JAC has detected that the **generated `.java` file is newer than the `.script` source file**, and is offering to merge changes from the `.java` file back into the `.script` file.

## When Does This Dialog Appear?

The reverse merge dialog appears when **ALL** of these conditions are true:

1. **The `.script` file exists**
2. **The generated `.java` file exists**
3. **The `.java` file timestamp is NEWER than the `.script` file timestamp**
4. **The `.java` file contains merge section markers** (`//$Section=...`)

### Example Scenario

```
Timeline:
1. 10:00 AM - You run MyScript.jrun
2. 10:00 AM - JAC compiles MyScript.script → MyScript.java → MyScript.class
3. 10:15 AM - You manually edit MyScript.java to add custom logic
4. 10:30 AM - You run MyScript.jrun again

Result: JAC notices MyScript.java (10:15 AM) is newer than MyScript.script (10:00 AM)
Dialog: "Do you want to Reverse Merge MyScript.scriptPENDING"
```

## What Does Each Option Do?

### Option 1: Click "Yes" - Perform Reverse Merge

**What happens:**
1. JAC reads the **generated `.java` file**
2. Extracts all code sections marked with `//$Section=...$Preserve=yes`
3. Reads the **`.script` source file**
4. Locates matching merge section markers in the `.script`
5. Replaces the `.script` section content with the `.java` section content
6. Saves the updated `.script` file
7. Updates `.java` timestamp to match `.script` timestamp
8. Proceeds with normal compilation/execution

**Use this when:**
- You intentionally edited the `.java` file and want to preserve those changes
- You added custom code to preserved sections in the `.java` file
- You want the `.script` source to reflect your manual `.java` edits

**Effect:**
- Your manual edits in `.java` preserved sections are merged back into the `.script`
- Next compilation will include these changes
- Source of truth moves from `.java` back to `.script`

### Option 2: Click "No" - Skip Reverse Merge

**What happens:**
1. JAC ignores the timestamp difference
2. Proceeds with normal compilation from the `.script` file
3. Regenerates `.java` from `.script`, **overwriting** any manual edits
4. The `.java` file returns to reflecting the `.script` content
5. Any manual edits to `.java` are **LOST**

**Use this when:**
- The `.java` edits were experimental and should be discarded
- You want to regenerate clean `.java` from the `.script` source
- The `.java` file was edited by mistake
- You've already made the desired changes in the `.script` file

**Effect:**
- Manual `.java` edits are discarded
- `.script` remains the authoritative source
- Clean regeneration from template

### Option 3: Click "Cancel" - Abort Execution

**What happens:**
1. JAC stops execution immediately
2. No merge occurs
3. No compilation occurs
4. No execution occurs
5. Both `.script` and `.java` files remain unchanged

**Use this when:**
- You need time to decide what to do
- You want to manually compare `.script` and `.java` files
- You want to backup files before making a decision
- You realize you shouldn't be running this script yet

## Technical Details

### Merge Section Markers

Reverse merge only affects code within merge section markers:

```java
//$Section=CustomCode$ID=ABC123$Preserve=yes

// This code will be merged from .java back to .script if you click "Yes"
public void myCustomMethod() {
    System.out.println("Custom logic");
}

//$Section=CustomCode$ID=ABC123$Preserve=no
```

**Key Points:**
- Only sections with `$Preserve=yes` are candidates for reverse merge
- Sections with `$Preserve=no` are always regenerated from template
- Section IDs must match between `.script` and `.java` for merge to work

### What Gets Merged

**Merged (when clicking "Yes"):**
- Content between `//$Section=...$Preserve=yes` and `//$Section=...$Preserve=no`
- Only for matching section IDs
- Custom code, comments, formatting

**Not Merged:**
- Template-generated code in `$Preserve=no` sections
- Code outside merge section markers
- Import statements (usually regenerated)
- Package declarations (usually regenerated)

### Detection Logic

Located in `Script.java` (approximate logic):

```java
File scriptFile = new File("MyScript.script");
File javaFile = new File("MyScript.java");

if (scriptFile.exists() && javaFile.exists()) {
    long scriptModified = scriptFile.lastModified();
    long javaModified = javaFile.lastModified();

    if (javaModified > scriptModified) {
        boolean hasMergeSections = containsMergeSections(javaFile);

        if (hasMergeSections) {
            int choice = showDialog("Do you want to Reverse Merge MyScript.scriptPENDING");

            if (choice == YES) {
                Merge.reverseMerge(javaFile, scriptFile);
            } else if (choice == CANCEL) {
                System.exit(0);
            }
            // If NO, proceed with normal compilation
        }
    }
}
```

### Merge.java Implementation

The reverse merge is performed by `com.esarks.jac.Merge` class:

```java
public static void reverseMerge(File javaFile, File scriptFile) {
    // 1. Parse .java file for merge sections
    Map<String, String> javaSections = extractPreservedSections(javaFile);

    // 2. Read .script file
    String scriptContent = readFile(scriptFile);

    // 3. Replace matching sections in .script with .java content
    String mergedContent = replaceSections(scriptContent, javaSections);

    // 4. Write updated .script file
    writeFile(scriptFile, mergedContent);

    // 5. Update .java timestamp to match .script
    javaFile.setLastModified(scriptFile.lastModified());
}
```

## Common Use Cases

### Use Case 1: Quick Java Edit for Testing

**Scenario:**
You want to quickly test a change without modifying the `.script` template.

**Workflow:**
1. Run script → generates `.java` file
2. Edit `.java` file directly (quick change)
3. Run script again → "Do you want to reverse mergePENDING"
4. Click **"No"** if it was just a test (discard changes)
5. Click **"Yes"** if you want to keep the change (merge to `.script`)

### Use Case 2: Debugging Generated Code

**Scenario:**
You're debugging and added `System.out.println()` statements to the `.java` file.

**Workflow:**
1. Add debug prints to `.java` file
2. Run script → "Do you want to reverse mergePENDING"
3. Click **"No"** (debug prints are temporary)
4. Fix the actual issue in the `.script` template
5. Next run regenerates clean `.java` without debug prints

### Use Case 3: Preserving Custom Logic

**Scenario:**
You need to add a complex custom method that's hard to express in `.script` syntax.

**Workflow:**
1. Generate initial `.java` from `.script`
2. Add custom method in a `$Preserve=yes` section in `.java`
3. Run script → "Do you want to reverse mergePENDING"
4. Click **"Yes"** to preserve the custom method
5. The `.script` now includes the custom method
6. Future regenerations will preserve this method

### Use Case 4: Accidental Edit

**Scenario:**
You accidentally modified the `.java` file.

**Workflow:**
1. Accidentally edit `.java` file (wrong file!)
2. Run script → "Do you want to reverse mergePENDING"
3. Click **"No"** to discard accidental changes
4. `.java` regenerated cleanly from `.script`

## Best Practices

### DO:

✓ **Use reverse merge for intentional custom code**
- Click "Yes" when you've deliberately added preserved logic

✓ **Use "No" for experimental changes**
- Discard temporary test code

✓ **Use "Cancel" when unsure**
- Gives you time to review both files

✓ **Keep merge sections properly marked**
- Use `//$Section=...$Preserve=yes` for custom code
- Use `//$Section=...$Preserve=no` for generated code

✓ **Review changes before clicking "Yes"**
- Understand what will be merged back to `.script`

### DON'T:

✗ **Don't manually edit section marker lines**
- `//Section=...` lines are metadata - leave them alone

✗ **Don't click "Yes" by default**
- Only use reverse merge when you actually edited the `.java` file

✗ **Don't add custom code in `$Preserve=no` sections**
- It will be overwritten on next regeneration

✗ **Don't ignore the dialog**
- It's warning you about a timestamp mismatch

✗ **Don't use `.java` editing as primary workflow**
- Edit `.script` templates directly when possible
- `.java` edits are for quick tests or complex logic

## Troubleshooting

### Problem: Dialog Appears But I Didn't Edit .java

**Possible Causes:**
1. **Build tool touched the file** - IDE or build system updated timestamp
2. **File copy operation** - Copied `.java` from another location with newer timestamp
3. **Text editor autosave** - Editor saved `.java` without actual changes
4. **Version control checkout** - Git/SVN checkout set newer timestamp

**Solutions:**
- Click "No" to regenerate clean `.java` from `.script`
- Use `touch MyScript.script` to update `.script` timestamp and avoid dialog
- Check version control settings about timestamp preservation

### Problem: Clicking "Yes" Doesn't Preserve My Changes

**Possible Causes:**
1. **No merge section markers** - Custom code not in a `$Preserve=yes` section
2. **Mismatched section IDs** - IDs in `.java` don't match `.script`
3. **Malformed markers** - Syntax error in `//$Section=...` line

**Solutions:**
- Add proper merge section markers around custom code:
  ```java
  //$Section=MyCustomCode$ID=Custom001$Preserve=yes
  // Your custom code here
  //$Section=MyCustomCode$ID=Custom001$Preserve=no
  ```
- Ensure section IDs are consistent between files
- Check for typos in marker syntax

### Problem: Dialog Appears on Every Run

**Cause:**
The reverse merge process isn't correctly updating the `.java` timestamp.

**Solutions:**
1. **Click "No" once** to regenerate and sync timestamps
2. **Manually update timestamps:** `touch -r MyScript.script MyScript.java`
3. **Check file permissions** - Ensure JAC can modify `.java` timestamp
4. **Check for file locks** - Another process may be holding the file open

### Problem: Lost Changes After Clicking "No"

**Cause:**
Clicking "No" intentionally discards `.java` edits and regenerates from `.script`.

**Solutions:**
- **Prevention:** Always click "Yes" if you want to preserve `.java` edits
- **Recovery:** Check editor history, backup files, or version control
- **Future:** Use version control to track all changes before clicking "No"

## Comparison: Forward vs Reverse Merge

### Forward Merge (Normal Operation)

```
.script (source) → .java (generated) → .class (compiled)
         |                |
         |    Preserves $Preserve=yes sections
         |                |
         └────────────────┘
```

**Process:**
1. Generate new `.java` from `.script` template
2. Extract preserved sections from old `.java`
3. Insert preserved sections into new `.java`
4. Compile to `.class`

**Purpose:** Regenerate code while keeping custom logic

### Reverse Merge (This Dialog)

```
.java (edited) → .script (source updated)
        |                |
        |    Moves custom code back to source
        |                |
        └────────────────┘
```

**Process:**
1. Extract preserved sections from `.java`
2. Update matching sections in `.script`
3. Sync timestamps
4. Next run uses updated `.script`

**Purpose:** Capture manual `.java` edits back into source

## Related Components

- **Merge.java** - Core merge engine (`com.esarks.jac.Merge`)
- **Script.java** - Compilation orchestrator (detects timestamp mismatch)
- **ScriptWriter.java** - Generates `.java` from `.script` templates
- **MakeAll** - Uses merge system when regenerating components

## Related Documentation

- **build-system.md** - Complete build system architecture with merge details
- **HowToWriteScript.md** - How to use merge directives in scripts
- **JacBuild24-Specializations.md** - Merge section examples from generated code
- **MakeAll.md** - MakeAll integration with merge system
- **DeleteClassOnError.md** - Related to compilation safety

## Summary

**"Do you want to reverse mergePENDING"** appears when your generated `.java` file is newer than the `.script` source, indicating manual edits to the `.java` file.

**Click "Yes"** if you want to preserve `.java` edits by merging them back to the `.script` source.

**Click "No"** if you want to discard `.java` edits and regenerate cleanly from the `.script` template.

**Click "Cancel"** if you need time to review the files and decide.

**Key Insight:** This dialog is JAC's way of asking: "You edited the generated file instead of the source template. Do you want to make those edits permanent by updating the sourcePENDING"

---

**Status:** Documentation Complete
**Created:** 2025-10-28
**Related:** build-system.md, Merge.java, Script.java
