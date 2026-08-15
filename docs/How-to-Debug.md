---
title: "How to Debug"
---

# How to Debug JAC Applications in Visual Studio Code

Complete guide to setting up remote debugging for JAC applications using VS Code and JDWP.

---

## Table of Contents

1. [Overview](#overview)
2. [Debug Architecture](#debug-architecture)
3. [Configuration Files](#configuration-files)
4. [Port Configuration](#port-configuration)
5. [Step-by-Step Setup](#step-by-step-setup)
6. [Identifying the Debug Port in VS Code](#identifying-the-debug-port-in-vs-code)
7. [Troubleshooting](#troubleshooting)

---

## Overview

JAC applications can be debugged using **JDWP (Java Debug Wire Protocol)**, which allows VS Code to attach to a running Java process and provide full debugging capabilities including:

- Setting breakpoints
- Stepping through code (Step Over, Step Into, Step Out)
- Inspecting variables
- Evaluating expressions
- Watching variables
- Viewing call stacks

**Key Concept:** JAC compiles `.script` files into `.java` files, which are then compiled to `.class` files. You debug the **generated .java files**, not the .script files.

---

## Debug Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     VS Code Debugger                        │
│                  (Debug Client - Port 5005)                 │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ JDWP Protocol
                         │ (TCP/IP Socket)
                         │
┌────────────────────────▼────────────────────────────────────┐
│              Java Virtual Machine (JVM)                     │
│         Running JAC Application with Debug Agent            │
│  -agentlib:jdwp=transport=dt_socket,server=y,suspend=y...  │
└─────────────────────────────────────────────────────────────┘
```

**Flow:**
1. JAC application starts with JDWP debug agent enabled (listens on port 5005)
2. Application suspends and waits for debugger to attach
3. VS Code connects to port 5005 using JDWP protocol
4. Debugging session begins

---

## Configuration Files

### 1. Launch Script (DebugRun.bat)

**Location:** `jac2024/app/com/esarks/vcide_simple/DebugRun.bat`

This batch file launches JAC with debugging enabled:

```batch
@echo off
REM Enable JDWP debugging on port 5005
set JAVA_OPTS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=*:5005

REM Disable JAC's internal debug flags (incompatible with JDK 24)
set JAC_DEBUG=false

REM Launch JAC with debug options
call Jrun.bat "%~dp0HelloWorld.jrun"
```

**JDWP Parameters Explained:**
- `transport=dt_socket` - Use TCP/IP socket for communication
- `server=y` - JVM acts as debug server (listens for connections)
- `suspend=y` - Suspend execution until debugger attaches
- `address=*:5005` - Listen on all network interfaces, port 5005

**Change to `suspend=n` if you want the app to run immediately without waiting for debugger.**

---

### 2. VS Code Launch Configuration (.vscode/launch.json)

**Location:** `jac2024/app/com/esarks/vcide_simple/.vscode/launch.json`

This tells VS Code how to connect to the debug port:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "java",
            "name": "Debug JAC HelloWorld (Attach)",
            "request": "attach",
            "hostName": "localhost",
            "port": 5005,
            "sourcePaths": [
                "${workspaceFolder}",
                "${workspaceFolder}/../../../classes/com/esarks/vcide_simple"
            ],
            "preLaunchTask": "Build and Debug JAC"
        }
    ]
}
```

**Key Fields:**
- `type`: `"java"` - Use Java debugger
- `request`: `"attach"` - Attach to running JVM (not launch new one)
- `hostName`: `"localhost"` - JVM on same machine
- `port`: **5005** - Must match JDWP port in DebugRun.bat
- `sourcePaths`: Where to find .java source files for mapping breakpoints

---

### 3. VS Code Tasks (.vscode/tasks.json)

**Location:** `jac2024/app/com/esarks/vcide_simple/.vscode/tasks.json`

Automates the build and debug launch process:

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Build JAC Script",
            "type": "shell",
            "command": "${workspaceFolder}/Build.bat"
        },
        {
            "label": "Start JAC with Debug",
            "type": "shell",
            "command": "${workspaceFolder}/DebugRun.bat",
            "isBackground": true,
            "problemMatcher": {
                "background": {
                    "activeOnStart": true,
                    "beginsPattern": "^.*JAC.*Debug.*$",
                    "endsPattern": "^Listening for transport dt_socket at address: \\d+$"
                }
            }
        },
        {
            "label": "Build and Debug JAC",
            "dependsOrder": "sequence",
            "dependsOn": [
                "Build JAC Script",
                "Start JAC with Debug"
            ]
        }
    ]
}
```

**The "Build and Debug JAC" task:**
1. Runs Build.bat (compiles .script → .java → .class)
2. Runs DebugRun.bat (launches with JDWP enabled)
3. Waits for "Listening for transport dt_socket at address: 5005"
4. VS Code auto-attaches debugger

---

## Port Configuration

### Default Port: 5005

**Why 5005PENDING**
- Standard convention for Java remote debugging
- Well-known port, easy to remember
- Unlikely to conflict with other services

### How to Change the Debug Port

If port 5005 is already in use, change it in **TWO places**:

#### Step 1: Update DebugRun.bat

```batch
REM Change 5005 to your desired port (e.g., 5006)
set JAVA_OPTS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=*:5006
```

#### Step 2: Update .vscode/launch.json

```json
{
    "configurations": [
        {
            "port": 5006  // Must match DebugRun.bat
        }
    ]
}
```

#### Step 3: Update .vscode/tasks.json (if using automated tasks)

```json
{
    "tasks": [
        {
            "label": "Start JAC with Debug",
            "problemMatcher": {
                "background": {
                    "endsPattern": "^Listening for transport dt_socket at address: 5006$"
                }
            }
        }
    ]
}
```

**IMPORTANT:** All three files must use the **same port number**!

---

## Step-by-Step Setup

### Prerequisites

1. **Install VS Code**: https://code.visualstudio.com/
2. **Install Extension Pack for Java**:
   - Open VS Code
   - Press `Ctrl+Shift+X` (Extensions)
   - Search "Extension Pack for Java"
   - Install (by Microsoft)
3. **JAC Build System**: Run `allphases.bat` to ensure JAC is properly built

---

### Setup Process

#### Step 1: Compile the Script

Navigate to your application folder and run Build.bat to generate the .java file:

```bash
cd jac2024\app\com\esarks\vcide_simple
Build.bat
```

This generates:
- `jac2024\classes\com\esarks\vcide_simple\HelloWorld.java`
- `jac2024\classes\com\esarks\vcide_simple\HelloWorld.class`

---

#### Step 2: Configure VS Code Workspace

Open your application folder in VS Code:

```bash
cd jac2024\app\com\esarks\vcide_simple
code .
```

Ensure these files exist:
- `.vscode/launch.json` - Debug configurations
- `.vscode/tasks.json` - Automated build tasks
- `.vscode/settings.json` - Java settings

---

#### Step 3: Open the Generated .java File

**CRITICAL:** You must open the **generated .java file**, not the .script file!

1. In VS Code, press **Ctrl+P** (Quick Open)
2. Type: `HelloWorld.java`
3. Select from: `jac2024/classes/com/esarks/vcide_simple/HelloWorld.java`

**OR manually navigate:**
- File → Open File
- Navigate to: `C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\classes\com\esarks\vcide_simple\HelloWorld.java`

---

#### Step 4: Set Breakpoints

1. With `HelloWorld.java` open, find the `execute()` method
2. Click in the **left gutter** (margin) next to a line of code
3. A **red dot** appears - this is your breakpoint

**Good places for breakpoints:**
- Variable declarations
- Inside loops
- Method calls
- Return statements

---

#### Step 5: Start Debugging

**Option A: Automated (Recommended)**

1. Press **F5** (or click Run → Start Debugging)
2. Select **"Debug JAC HelloWorld (Attach)"**
3. Wait 10-15 seconds (first time compiles automatically)
4. Debug session begins!

**Option B: Manual**

1. Run `DebugRun.bat` in a command prompt
2. Wait for: `Listening for transport dt_socket at address: 5005`
3. In VS Code, press **F5**
4. Select **"Debug JAC HelloWorld (Manual Attach)"**

---

#### Step 6: Debug!

Once attached, you'll see:
- Debug toolbar at top (Continue, Step Over, Step Into, etc.)
- Variables panel on left showing current variable values
- Call Stack panel showing method hierarchy
- Breakpoints panel showing all set breakpoints

**Debug Controls:**
- **F5** - Continue (run to next breakpoint)
- **F10** - Step Over (execute current line)
- **F11** - Step Into (enter method)
- **Shift+F11** - Step Out (exit method)
- **Shift+F5** - Stop debugging

---

## Identifying the Debug Port in VS Code

### Method 1: Check launch.json

1. In VS Code Explorer, open `.vscode/launch.json`
2. Find the configuration you're using
3. Look for the `"port"` field:

```json
{
    "name": "Debug JAC HelloWorld (Attach)",
    "port": 5005  // ← THIS IS YOUR DEBUG PORT
}
```

---

### Method 2: Check Running Debugger

When debug session is active:

1. Look at the **Debug Console** (bottom panel)
2. VS Code shows connection info:
   ```
   Debugger attached to localhost:5005
   ```

---

### Method 3: Check Command Prompt Output

When `DebugRun.bat` runs, it displays:

```
Listening for transport dt_socket at address: 5005
```

The number after "address:" is your debug port.

---

### Method 4: Check Windows Netstat

To see if port 5005 is in use:

```cmd
netstat -ano | findstr :5005
```

Output shows:
```
TCP    0.0.0.0:5005      0.0.0.0:0         LISTENING       12345
```

The port 5005 is listening, process ID 12345.

---

## Troubleshooting

### Problem: "Cannot connect to port 5005"

**Causes:**
1. JAC application not running with debug enabled
2. Port 5005 already in use by another application
3. Firewall blocking port 5005
4. Port number mismatch between DebugRun.bat and launch.json

**Solutions:**

1. **Verify JAC is running with debug:**
   - Check command prompt shows: `Listening for transport dt_socket at address: 5005`
   - If not, run `DebugRun.bat` first

2. **Check if port is in use:**
   ```cmd
   netstat -ano | findstr :5005
   ```
   - If already in use, change to different port (e.g., 5006)

3. **Add firewall exception:**
   ```cmd
   netsh advfirewall firewall add rule name="JAC Debug" dir=in action=allow protocol=TCP localport=5005
   ```

4. **Verify port numbers match:**
   - DebugRun.bat: `address=*:5005`
   - launch.json: `"port": 5005`
   - Both must be identical!

---

### Problem: Breakpoints Show as Hollow Circles

**Cause:** Breakpoints set in wrong file (.script instead of .java)

**Solution:**
1. Close all files
2. Open the **generated .java file**: `jac2024\classes\com\esarks\vcide_simple\HelloWorld.java`
3. Set breakpoints in the .java file (not .script)
4. Restart debugging

---

### Problem: "Source not found" During Debug

**Cause:** VS Code can't find the .java file to map breakpoints

**Solution:**
1. Check `sourcePaths` in launch.json points to correct location
2. Verify .java file exists: `jac2024\classes\com\esarks\vcide_simple\HelloWorld.java`
3. Restart VS Code after first compilation
4. Try setting breakpoints directly in the open .java file

---

### Problem: Application Starts but Doesn't Stop at Breakpoints

**Causes:**
1. Code already executed before debugger attached
2. Breakpoints set in wrong file
3. Source code doesn't match compiled bytecode

**Solutions:**
1. Ensure `suspend=y` in DebugRun.bat (waits for debugger before running)
2. Set breakpoints in generated .java file (not .script)
3. Rebuild: Run Build.bat before debugging
4. Check breakpoints are solid red (not hollow circles)

---

### Problem: Port 5005 Already in Use

**Solution 1: Find and Kill Process**

```cmd
netstat -ano | findstr :5005
taskkill /F /PID <process_id>
```

**Solution 2: Change Port**

Update both files to use different port (e.g., 5006):
- DebugRun.bat: `address=*:5006`
- launch.json: `"port": 5006`

---

## Advanced Configuration

### Remote Debugging (Different Machine)

To debug JAC running on a different machine:

**On JAC Server Machine:**

```batch
REM Allow connections from any IP
set JAVA_OPTS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=*:5005
```

**In VS Code (Client Machine):**

```json
{
    "hostName": "192.168.1.100",  // IP of JAC server
    "port": 5005
}
```

**Firewall:** Ensure port 5005 is open on server machine.

---

### Debug Without Suspending

To let the app run immediately without waiting for debugger:

**DebugRun.bat:**

```batch
REM Change suspend=y to suspend=n
set JAVA_OPTS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005
```

**Use Case:** Attach debugger to already-running application.

---

### Multiple Debug Sessions

To debug multiple JAC applications simultaneously:

**Application 1:**
- DebugRun.bat: `address=*:5005`
- launch.json: `"port": 5005`

**Application 2:**
- DebugRun.bat: `address=*:5006`
- launch.json: `"port": 5006`

Each application needs a unique port.

---

## Summary: Quick Debug Checklist

PASS **JAC Build System:** Run `allphases.bat` (one-time setup)
PASS **VS Code Extensions:** Install Extension Pack for Java
PASS **Compile Script:** Run `Build.bat` to generate .java file
PASS **Open .java File:** Open generated HelloWorld.java (in `classes/` folder)
PASS **Set Breakpoints:** Click in left gutter of .java file
PASS **Configure Port:** Ensure DebugRun.bat and launch.json use same port (default: 5005)
PASS **Launch Debug:** Run `DebugRun.bat` OR press F5 in VS Code
PASS **Attach Debugger:** VS Code connects to port 5005
PASS **Debug!** Use F10 (Step Over), F11 (Step Into), F5 (Continue)

---

## Port Configuration Reference

| File | Location | Setting |
|------|----------|---------|
| **DebugRun.bat** | `app/com/esarks/vcide_simple/` | `address=*:5005` |
| **launch.json** | `.vscode/launch.json` | `"port": 5005` |
| **tasks.json** | `.vscode/tasks.json` | `address: 5005` (in pattern) |

**All three must match!**

---

## Example: Working Debug Configuration

**DebugRun.bat:**
```batch
set JAVA_OPTS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=*:5005
set JAC_DEBUG=false
call Jrun.bat "%~dp0HelloWorld.jrun"
```

**launch.json:**
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "java",
            "name": "Debug JAC HelloWorld",
            "request": "attach",
            "hostName": "localhost",
            "port": 5005,
            "sourcePaths": [
                "${workspaceFolder}/../../../classes/com/esarks/vcide_simple"
            ]
        }
    ]
}
```

**Expected Output (DebugRun.bat):**
```
Listening for transport dt_socket at address: 5005
```

**Expected VS Code Debug Console:**
```
Debugger attached to localhost:5005
```

**Status: PASS Ready to debug!**

---

## See Also

- [JAC Overview](CLAUDE.html) - Understanding JAC architecture
- [Demo Examples](Demo.html) - More JAC examples
- [VS Code Java Debugging](https://code.visualstudio.com/docs/java/java-debugging) - Official VS Code docs
- [JDWP Specification](https://docs.oracle.com/javase/8/docs/technotes/guides/jpda/jdwp-spec.html) - Java Debug Wire Protocol

---

**Version:** 1.0
**Created:** October 21, 2025
**Location:** ArchitectsCompanion.wiki/How-to-Debug.md
