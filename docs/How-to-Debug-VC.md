---
title: "How to Debug VC"
---

# Debugging JAC Applications with Visual Studio Code

**Document Version:** 1.0
**Date:** 2025-01-21
**JAC Version:** JAC2024 v20251021a
**VS Code Requirements:** Extension Pack for Java

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [VS Code Workspace Setup](#vs-code-workspace-setup)
4. [Configuring the Debugger](#configuring-the-debugger)
5. [Debugging Workflow](#debugging-workflow)
6. [Understanding What You're Debugging](#understanding-what-youre-debugging)
7. [Setting Breakpoints](#setting-breakpoints)
8. [Troubleshooting](#troubleshooting)
9. [Advanced Debugging](#advanced-debugging)

---

## Overview

JAC (Java Architects Companion) applications can be debugged using Visual Studio Code's Java debugging capabilities. This guide walks through the complete setup and debugging process.

### Key Concept: Debugging Generated Java Code

**IMPORTANT:** When debugging JAC applications, you are debugging the **generated Java code**, NOT the `.script` source files.

```
.script files  →  JAC Compiler  →  .java files  →  javac  →  .class files
                                       ↑
                                   DEBUG HERE
```

JAC transforms your `.script` files into standard Java source code (`.java` files), which are then compiled to bytecode (`.class` files). The debugger works with the generated `.java` files.

---

## Prerequisites

### 1. Install VS Code Extensions

Open VS Code and install the **Extension Pack for Java**:

1. Press `Ctrl+Shift+X` (Extensions panel)
2. Search for: `Extension Pack for Java`
3. Click **Install** on the Microsoft extension pack

This installs:
- Language Support for Java
- Debugger for Java
- Test Runner for Java
- Maven for Java
- Project Manager for Java

### 2. Verify Java Installation

1. Open VS Code terminal (`Ctrl+~`)
2. Run:
   ```bash
   java -version
   ```
   Should show: `java version "24"` (or your JDK version)

### 3. Verify JAC Build

Make sure JAC is built and working:
```bash
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\jacBuild24\bin
allphases.bat
```

All phases should complete successfully.

---

## VS Code Workspace Setup

### Recommended Folder Structure in VS Code

Open VS Code and configure a multi-root workspace for better organization:

#### Option 1: Single Workspace (Simplest)

1. **File → Open Folder**
2. Navigate to: `C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024`
3. Click **Select Folder**

#### Option 2: Multi-Root Workspace (Recommended)

Create a workspace file that opens multiple important folders:

1. **File → Add Folder to Workspace**
2. Add these folders in order:
   - `C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024`
   - `C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\app`
   - `C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\classes`
   - `C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\jacBuild24`

3. **File → Save Workspace As**
4. Save as: `JAC2024.code-workspace`

**Example workspace file:**
```json
{
    "folders": [
        {
            "name": "JAC2024 Root",
            "path": "C:\\Users\\ptm\\OneDrive\\Documents\\GitHub\\ArchitectsCompanion\\jac2024"
        },
        {
            "name": "Applications",
            "path": "C:\\Users\\ptm\\OneDrive\\Documents\\GitHub\\ArchitectsCompanion\\jac2024\\app"
        },
        {
            "name": "Generated Java Code",
            "path": "C:\\Users\\ptm\\OneDrive\\Documents\\GitHub\\ArchitectsCompanion\\jac2024\\classes"
        },
        {
            "name": "JAC Build System",
            "path": "C:\\Users\\ptm\\OneDrive\\Documents\\GitHub\\ArchitectsCompanion\\jac2024\\jacBuild24"
        }
    ],
    "settings": {
        "java.project.sourcePaths": [
            "classes",
            "jacBuild24/classes"
        ],
        "java.project.outputPath": "classes",
        "files.exclude": {
            "**/*.class": false
        }
    }
}
```

### Key Folders Explained

| Folder | Purpose | Contains |
|--------|---------|----------|
| **app/** | Your JAC applications | `.script`, `.jrun`, `.xml` files |
| **classes/** | Generated Java source | `.java` files (DEBUG HERE) |
| **jacBuild24/** | JAC compiler source | JAC framework code |
| **bin/** | Executable scripts | `.bat` launcher files |
| **lib/** | JAR dependencies | Jetty, PostgreSQL, etc. |

---

## Configuring the Debugger

### Step 1: Create launch.json

1. In VS Code, press `Ctrl+Shift+P`
2. Type: `Debug: Open launch.json`
3. If prompted, select **Java** as the environment

### Step 2: Add Remote Attach Configuration

Replace the contents with this configuration:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "java",
            "name": "Attach to JAC (port 8000)",
            "request": "attach",
            "hostName": "localhost",
            "port": 8000,
            "projectName": "jac2024"
        },
        {
            "type": "java",
            "name": "Attach to JAC (no suspend)",
            "request": "attach",
            "hostName": "localhost",
            "port": 8000,
            "projectName": "jac2024",
            "timeout": 30000
        }
    ]
}
```

**Configuration Breakdown:**

- `type: "java"` - Use Java debugger
- `request: "attach"` - Connect to running JVM (not launch new one)
- `hostName: "localhost"` - JAC runs locally
- `port: 8000` - Debug port configured in Job.bat
- `projectName` - Your workspace name

### Step 3: Save Configuration

Save the file (`Ctrl+S`). The debug configurations will now appear in the **Run and Debug** panel.

---

## Debugging Workflow

### Complete Step-by-Step Process

#### 1. Enable JAC Debug Mode

Open a terminal and run:
```bash
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\bin
SetJAC_DEBUG_True.bat
```

This modifies `SetJrunEnvironment.bat` to set `JAC_DEBUG=true`.

**Verify:**
```bash
type SetJrunEnvironment.bat | findstr JAC_DEBUG
```
Should show: `set JAC_DEBUG=true`

#### 2. Start Your JAC Application

Navigate to your application and run the `.jrun` file:

```bash
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\app\com\esarks\vcide_simple
HelloWorld.jrun
```

**Expected Output:**
```
========================================
Running JrunDirect.bat v20251021a
========================================
...
Executing JAC runtime...

Listening for transport dt_socket at address: *:8000
```

**The application is now PAUSED**, waiting for debugger connection.

#### 3. Set Breakpoints in VS Code

Before connecting the debugger, set breakpoints:

1. Open the **generated Java file** (not the .script file):
   ```
   jac2024/classes/com/esarks/vcide_simple/HelloWorld.java
   ```

2. Click in the **left margin** (next to line numbers) to set red breakpoint dots

3. Set breakpoints on lines where you want to pause:
   - Method entry points
   - Variable assignments
   - Loop iterations
   - Conditional branches

**Example HelloWorld.java:**
```java
public class HelloWorld extends Component {

    public void execute() {  // ← Set breakpoint here
        String message = "Hello from JAC!";  // ← Or here
        int count = 5;

        for (int i = 1; i <= count; i++) {  // ← Or here
            System.out.println("Iteration " + i + " of " + count);
        }
    }
}
```

#### 4. Connect VS Code Debugger

**Method 1: Using Run and Debug Panel**

1. Click the **Run and Debug** icon in sidebar (`Ctrl+Shift+D`)
2. Select **"Attach to JAC (port 8000)"** from dropdown
3. Click green **Play** button (or press `F5`)

**Method 2: Using Command Palette**

1. Press `Ctrl+Shift+P`
2. Type: `Debug: Select and Start Debugging`
3. Choose: **Attach to JAC (port 8000)**

**Method 3: Quick Attach**

1. Press `Ctrl+Shift+P`
2. Type: `Debug: Attach to Java Program`
3. Enter host: `localhost` (press Enter)
4. Enter port: `8000` (press Enter)

#### 5. Debugging Session Active

Once connected, you'll see:

- PASS Debug toolbar appears at top of VS Code
- PASS Terminal shows: "Listening for transport dt_socket at address: *:8000" changes to connection accepted
- PASS Your JAC application continues running
- PASS Execution pauses at first breakpoint

**Debug Toolbar Buttons:**

| Button | Shortcut | Action |
|--------|----------|--------|
| Continue | `F5` | Resume execution until next breakpoint |
| Step Over | `F10` | Execute current line, step to next |
| Step Into | `F11` | Step into method call |
| Step Out | `Shift+F11` | Step out of current method |
| Restart | `Ctrl+Shift+F5` | Restart debug session |
| Stop | `Shift+F5` | Disconnect debugger |

#### 6. Inspect Variables

While paused at a breakpoint:

- **Variables Panel** (left sidebar): Shows all local variables and their values
- **Watch Panel**: Add expressions to monitor (e.g., `message.length()`)
- **Call Stack Panel**: Shows method call hierarchy
- **Hover over variables** in code: See current values in tooltip

**Example:**
```java
String message = "Hello from JAC!";  // ← Breakpoint here
int count = 5;

// When paused, Variables panel shows:
// message = "Hello from JAC!"
// count = 5
```

#### 7. Continue or Step Through Code

- Press `F5` to continue to next breakpoint
- Press `F10` to execute line-by-line
- Press `F11` to step into method calls

#### 8. Application Completes

When your script finishes:
```
At end of jac:main(). Press ENTER to continue...
```

Press `Enter` in the terminal to exit.

#### 9. Disable Debug Mode (Optional)

For normal execution without debugging:
```bash
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\bin
SetJAC_DEBUG_false.bat
```

Now `.jrun` files will execute immediately without waiting for debugger.

---

## Understanding What You're Debugging

### The JAC Compilation Pipeline

```
┌─────────────────────────────────────────────────────────────┐
│                   JAC Execution Flow                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. HelloWorld.script (JAC source)                          │
│     ├─ Mixed JAC/XML/Java syntax                            │
│     ├─ <& Method &> declarations                            │
│     └─ %> <% output blocks                                  │
│                                                              │
│  2. JAC Compiler Transforms                                 │
│     ├─ Parses JAC syntax                                    │
│     ├─ Expands XML templates                                │
│     └─ Generates pure Java                                  │
│                                                              │
│  3. HelloWorld.java (Generated Java) ◄─── DEBUG THIS        │
│     ├─ Standard Java code                                   │
│     ├─ Located in classes/ directory                        │
│     └─ This is what you see in the debugger                 │
│                                                              │
│  4. javac Compilation                                       │
│     └─ HelloWorld.java → HelloWorld.class                   │
│                                                              │
│  5. JVM Execution                                           │
│     └─ Runs HelloWorld.class bytecode                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Example Transformation

**Source: HelloWorld.script**
```javascript
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void" />
&>

%>
Hello from JAC!
<%

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

**Generated: HelloWorld.java** (What you debug)
```java
package com.esarks.vcide_simple;

import com.esarks.mic.*;

public class HelloWorld extends Component {

    protected HelloWorld() {}

    public HelloWorld(Script aScript) {
        super(aScript);
    }

    public void execute() {  // ← Set breakpoints here
        iWriter.output("Hello from JAC!");
        return;
    }
}
```

### Why Debug the .java Files?

| Reason | Explanation |
|--------|-------------|
| **Standard Java** | Generated code is pure Java - no special JAC syntax |
| **Debugger Compatible** | Java debuggers understand .java source, not .script |
| **See Actual Execution** | What the JVM actually runs |
| **Inspect Variables** | See real variable values, not template placeholders |
| **Stack Traces** | Line numbers match the generated .java files |

### Where to Find Generated Java Files

```
jac2024/
├── app/
│   └── com/esarks/vcide_simple/
│       └── HelloWorld.script          ← Your source (edit this)
│
├── classes/
│   └── com/esarks/vcide_simple/
│       ├── HelloWorld.java            ← Generated (DEBUG this)
│       └── HelloWorld.class           ← Compiled bytecode
```

**Navigation Tip:** In VS Code, use `Ctrl+P` and type `HelloWorld.java` to quickly open the generated file.

---

## Setting Breakpoints

### Types of Breakpoints

#### 1. Line Breakpoints (Most Common)

Click in the left margin next to any executable line:

```java
public void execute() {
    String message = "Hello from JAC!";  // ← Click here to set breakpoint
    System.out.println(message);
}
```

#### 2. Conditional Breakpoints

Right-click on an existing breakpoint → **Edit Breakpoint** → Add condition:

```java
for (int i = 1; i <= count; i++) {  // ← Breakpoint with condition: i == 3
    System.out.println("Iteration " + i);
}
```

**Condition:** `i == 3`
**Result:** Only pauses when i equals 3

#### 3. Logpoints

Log messages without stopping execution:

Right-click in margin → **Add Logpoint**

```java
for (int i = 1; i <= count; i++) {  // ← Logpoint: "Iteration {i}"
    System.out.println("Iteration " + i);
}
```

Outputs to Debug Console without pausing.

#### 4. Exception Breakpoints

Break when exceptions are thrown:

1. Open **Run and Debug** panel
2. Click **Breakpoints** section
3. Check **Java Exception Breakpoints**
4. Add specific exceptions (e.g., `NullPointerException`)

### Best Practices for Breakpoints

PASS **DO:**
- Set breakpoints at method entry to see parameter values
- Set breakpoints before/after critical operations
- Use conditional breakpoints in loops
- Remove breakpoints when done debugging

FAIL **DON'T:**
- Set breakpoints on comments or blank lines (won't work)
- Set breakpoints on closing braces `}` (not executable)
- Leave too many active breakpoints (slows debugging)

---

## Troubleshooting

### Problem 1: "Cannot find JAC source files"

**Symptom:** VS Code shows "Source not found" when debugging

**Solution:**
1. Verify your workspace includes the `classes/` folder
2. Check that `.java` files exist in `classes/com/esarks/...`
3. If missing, run your `.jrun` file once to generate them
4. Reload VS Code window (`Ctrl+Shift+P` → "Reload Window")

---

### Problem 2: "Connection refused" when attaching debugger

**Symptom:** VS Code error: "Failed to connect to remote VM"

**Causes & Solutions:**

1. **JAC application not running in debug mode:**
   ```bash
   # Enable debug mode
   cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\bin
   SetJAC_DEBUG_True.bat
   ```

2. **Application not started yet:**
   - Start the `.jrun` file BEFORE attaching debugger
   - Wait for "Listening for transport dt_socket at address: *:8000"

3. **Wrong port number:**
   - Verify Job.bat uses port 8000 (default)
   - Check launch.json matches: `"port": 8000`

4. **Firewall blocking port 8000:**
   - Add Windows Firewall exception for port 8000
   - Or temporarily disable firewall for testing

---

### Problem 3: Breakpoints show as gray/hollow circles

**Symptom:** Breakpoints don't pause execution, appear as ○ not ●

**Causes & Solutions:**

1. **Source file doesn't match compiled class:**
   - Delete `classes/` folder
   - Re-run `.jrun` file to regenerate
   - Reconnect debugger

2. **Breakpoint on non-executable line:**
   - Move to actual code line (not comments/blank lines)

3. **Class not loaded yet:**
   - Let program run past class loading
   - Breakpoint will activate when class loads

---

### Problem 4: "Extension Pack for Java not working"

**Symptom:** No debug options, Java features missing

**Solution:**
1. Install Extension Pack for Java:
   - `Ctrl+Shift+X` → Search "Extension Pack for Java"
   - Install Microsoft version
2. Reload VS Code: `Ctrl+Shift+P` → "Reload Window"
3. Verify Java found: `Ctrl+Shift+P` → "Java: Configure Java Runtime"

---

### Problem 5: Debugger shows wrong source code

**Symptom:** Code in debugger doesn't match what you see in files

**Solution:**
1. **Recompile the script:**
   ```bash
   # Your .script was modified, regenerate .java
   cd app/com/esarks/vcide_simple
   HelloWorld.jrun  # This regenerates HelloWorld.java
   ```

2. **Check you're looking at the right file:**
   - Debugging: `classes/com/esarks/vcide_simple/HelloWorld.java`
   - NOT: `app/com/esarks/vcide_simple/HelloWorld.script`

---

### Problem 6: Application runs too fast to debug

**Symptom:** Application completes before you can connect debugger

**Solution:**

The default configuration uses `suspend=y` which pauses immediately. If it's not pausing:

1. Verify Job.bat line 35:
   ```batch
   set DEBUG=-Dorg.xml.sax.driver=com.bluecast.xml.Piccolo -agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=*:8000
   ```

   Must have `suspend=y` (not `suspend=n`)

2. Add a startup delay in your script:
   ```java
   public void execute() {
       try { Thread.sleep(5000); } catch (Exception e) {}  // Wait 5 seconds
       // Your code here
   }
   ```

---

## Advanced Debugging

### Debug Multiple Scripts Simultaneously

If you have multiple `.jrun` files running:

1. Configure different debug ports in launch.json:
   ```json
   {
       "configurations": [
           {
               "name": "Attach to HelloWorld (8000)",
               "port": 8000
           },
           {
               "name": "Attach to OtherScript (8001)",
               "port": 8001
           }
       ]
   }
   ```

2. Modify Job.bat to use different ports (or create Job2.bat)

3. Attach separate debuggers to each port

---

### Debug JAC Framework Code

To debug JAC compiler internals:

1. **Add JAC source to workspace:**
   ```json
   {
       "folders": [
           {
               "name": "JAC Framework Source",
               "path": "C:\\...\\jac2024\\jacBuild24\\source\\java"
           }
       ]
   }
   ```

2. **Set breakpoints in JAC classes:**
   - `jac.java` - Main compiler entry
   - `Script.java` - Script compilation
   - `ScriptWriter.java` - Template processing

3. **Debug JAC compilation itself:**
   ```bash
   # Debug the compilation process
   cd jac2024\bin
   Job.bat jac com.esarks.vcide_simple.HelloWorld compile
   ```

---

### Remote Debugging (Different Machine)

If JAC runs on a remote server:

1. **Start JAC with remote debugging enabled:**
   ```batch
   # On remote machine, modify Job.bat address from *:8000 to 0.0.0.0:8000
   set DEBUG=... -agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=0.0.0.0:8000
   ```

2. **Configure VS Code launch.json:**
   ```json
   {
       "hostName": "192.168.1.100",  // Remote machine IP
       "port": 8000
   }
   ```

3. **Ensure firewall allows port 8000**

---

### Evaluate Expressions

While paused at a breakpoint:

1. **Debug Console** (bottom panel)
2. Type Java expressions:
   ```
   > message.toUpperCase()
   "HELLO FROM JAC!"

   > count * 2
   10

   > iWriter.toString()
   [object reference details]
   ```

3. **Modify variables at runtime:**
   ```
   > count = 10
   10
   ```
   Then press F5 to continue with new value

---

### Hot Code Replace

Modify code while debugging (limited support):

1. Pause at breakpoint
2. Edit the `.java` file (minor changes only)
3. Save (`Ctrl+S`)
4. VS Code may hot-swap the code
5. Continue debugging with new code

**Limitations:** Only works for method body changes, not signatures

---

## Quick Reference Card

### Essential Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Start Debugging | `F5` |
| Stop Debugging | `Shift+F5` |
| Step Over | `F10` |
| Step Into | `F11` |
| Step Out | `Shift+F11` |
| Continue | `F5` |
| Toggle Breakpoint | `F9` |
| Open Debug Console | `Ctrl+Shift+Y` |
| Run and Debug Panel | `Ctrl+Shift+D` |

### Common Debug Commands

```bash
# Enable debug mode
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\bin
SetJAC_DEBUG_True.bat

# Run application (waits for debugger)
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\app\com\esarks\vcide_simple
HelloWorld.jrun

# Disable debug mode
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\bin
SetJAC_DEBUG_false.bat
```

### File Locations Cheat Sheet

| File Type | Location | Purpose |
|-----------|----------|---------|
| `.script` | `app/com/esarks/.../` | Source (edit here) |
| `.java` | `classes/com/esarks/.../` | Generated (debug here) |
| `.class` | `classes/com/esarks/.../` | Compiled bytecode |
| `.jrun` | `app/com/esarks/.../` | Runtime descriptor |

---

## Debugging Workflow Checklist

Use this checklist for every debug session:

- [ ] JAC built successfully (`allphases.bat` completed)
- [ ] VS Code has "Extension Pack for Java" installed
- [ ] Workspace includes `classes/` folder
- [ ] `launch.json` configured with port 8000
- [ ] Debug mode enabled (`SetJAC_DEBUG_True.bat`)
- [ ] `.jrun` file started (shows "Listening for transport dt_socket")
- [ ] Breakpoints set in `.java` files (not `.script`)
- [ ] VS Code attached to port 8000 (F5)
- [ ] Debug toolbar visible
- [ ] Variables panel showing data
- [ ] When done, debug mode disabled (`SetJAC_DEBUG_false.bat`)

---

## Related Documentation

- **[Jrun.md](Jrun.html)** - Complete .jrun file execution documentation
- **[CLAUDE.md](CLAUDE.html)** - JAC architecture overview
- **[AllPhases.md](AllPhases.html)** - JAC build system details
- **[NEWGEN.md](NEWGEN.html)** - JAC-NEWGEN vision and roadmap

---

**Document Version:** 1.0
**Last Updated:** 2025-01-21
**Author:** JAC Documentation Team
**Status:** Complete & Tested
