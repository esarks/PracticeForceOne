---
title: "VCIDE"
---

# Using Visual Studio Code for JAC Development

## Overview

This guide explains how to set up Visual Studio Code (VS Code) as an IDE for JAC (Java Architects Companion) development, including debugging capabilities.

## Prerequisites

### Required Software

1. **Visual Studio Code** - Download from https://code.visualstudio.com/
2. **Java Development Kit (JDK 24)** - Already installed at:
   - `C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\jacBuild24\jdk-24`
   - `C:\Users\ptm\OneDrive\GitHub\ArchitectsCompanion\jac2024\jdk-24`

3. **JAC Build System** - Already installed at:
   - `C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\jacBuild24`

### Required VS Code Extensions

Install these extensions from the VS Code Marketplace:

1. **Extension Pack for Java** (Microsoft)
   - ID: `vscjava.vscode-java-pack`
   - Includes:
     - Language Support for Java
     - Debugger for Java
     - Test Runner for Java
     - Maven for Java
     - Project Manager for Java
     - Visual Studio IntelliCode

2. **XML** (Red Hat)
   - ID: `redhat.vscode-xml`
   - For editing XML configuration files

3. **JSON Tools** (Erik Lynd)
   - ID: `eriklynd.json-tools`
   - For editing JSON configuration files

4. **Batch Runner** (NilsSoderman)
   - ID: `NilsSoderman.batch-runner`
   - For running batch files

## Workspace Setup

### 1. Open JAC Project in VS Code

**Option A: Open project folder**
```
File → Open Folder → Navigate to:
C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024
```

**Option B: Open from command line**
```powershell
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024
code .
```

### 2. Configure Java Environment

Create `.vscode/settings.json` in the workspace root:

```json
{
  "java.home": "C:\\Users\\ptm\\OneDrive\\Documents\\GitHub\\ArchitectsCompanion\\jac2024\\jacBuild24\\jdk-24",
  "java.configuration.runtimes": [
    {
      "name": "JavaSE-24",
      "path": "C:\\Users\\ptm\\OneDrive\\Documents\\GitHub\\ArchitectsCompanion\\jac2024\\jacBuild24\\jdk-24",
      "default": true
    }
  ],
  "java.project.sourcePaths": [
    "jacBuild24/source/java"
  ],
  "java.project.outputPath": "jacBuild24/classes",
  "java.project.referencedLibraries": [
    "jacBuild24/lib/**/*.jar"
  ],
  "files.exclude": {
    "**/.git": true,
    "**/.class": true,
    "**/phase1Classes": true,
    "**/phase2Classes": true
  },
  "files.associations": {
    "*.script": "java",
    "*.make": "java",
    "*.jrun": "xml"
  },
  "editor.tabSize": 2,
  "editor.detectIndentation": true
}
```

### 3. Configure Build Tasks

Create `.vscode/tasks.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Build JAC (JSON Support)",
      "type": "shell",
      "command": "cd ${workspaceFolder}/jacBuild24/bin && buildJSONSimple.bat",
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "problemMatcher": [],
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    },
    {
      "label": "Build JAC (All Phases)",
      "type": "shell",
      "command": "cd ${workspaceFolder}/jacBuild24/bin && allphases.bat",
      "group": "build",
      "problemMatcher": [],
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    },
    {
      "label": "Copy JAR to Runtime",
      "type": "shell",
      "command": "powershell",
      "args": [
        "-Command",
        "Copy-Item -Path '${workspaceFolder}/jacBuild24/lib/jac/jac.jar' -Destination 'C:/Users/ptm/OneDrive/GitHub/ArchitectsCompanion/jac2024/lib/jac/jac.jar' -Force"
      ],
      "problemMatcher": [],
      "presentation": {
        "reveal": "silent"
      }
    },
    {
      "label": "Build and Deploy",
      "dependsOn": [
        "Build JAC (JSON Support)",
        "Copy JAR to Runtime"
      ],
      "dependsOrder": "sequence",
      "problemMatcher": []
    }
  ]
}
```

## Debugging Configuration

### 1. Create Launch Configurations

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "java",
      "name": "Debug JAC Script",
      "request": "launch",
      "mainClass": "com.esarks.jac.jac",
      "args": [
        "-pause",
        "-script", "com.esarks.jac.jrun.Job",
        "-method", "execute",
        "-argument", "com.esarks.jac.jrun.Jrun",
        "-argument", "execute",
        "-argument", "${input:scriptPath}",
        "-home", "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024",
        "-work", "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\classes",
        "-scripts", "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\app",
        "-debugInstance", "PENDINGdate",
        "-debugPath", "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\logs",
        "-debug", "9",
        "-debugClass", "9"
      ],
      "classPaths": [
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\classes",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\jac\\jac.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\mic\\mic.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\gson\\gson-2.8.6.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\crimson\\crimson.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\jetty\\javax.servlet.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\jetty\\org.mortbay.jetty.jar"
      ],
      "vmArgs": "-Xms64m -Xmx512m",
      "console": "integratedTerminal",
      "stopOnEntry": false
    },
    {
      "type": "java",
      "name": "Debug JSONTest",
      "request": "launch",
      "mainClass": "com.esarks.jac.jac",
      "args": [
        "-pause",
        "-script", "com.esarks.jac.jrun.Job",
        "-method", "execute",
        "-argument", "com.esarks.jac.jrun.Jrun",
        "-argument", "execute",
        "-argument", "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\app\\com\\esarks\\json\\JSONTest.jrun",
        "-home", "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024",
        "-work", "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\classes",
        "-scripts", "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\app",
        "-debugInstance", "PENDINGdate",
        "-debugPath", "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\logs",
        "-debug", "9",
        "-debugClass", "9"
      ],
      "classPaths": [
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\classes",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\jac\\jac.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\mic\\mic.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\gson\\gson-2.8.6.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\crimson\\crimson.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\jetty\\javax.servlet.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\jetty\\org.mortbay.jetty.jar"
      ],
      "vmArgs": "-Xms64m -Xmx512m",
      "console": "integratedTerminal",
      "stopOnEntry": false
    },
    {
      "type": "java",
      "name": "Debug jsonStart",
      "request": "launch",
      "mainClass": "com.esarks.jac.jac",
      "args": [
        "-pause",
        "-script", "com.esarks.jac.jrun.Job",
        "-method", "execute",
        "-argument", "com.esarks.jac.jrun.Jrun",
        "-argument", "execute",
        "-argument", "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\app\\com\\esarks\\jsonStart\\jsonStart.jrun",
        "-home", "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024",
        "-work", "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\classes",
        "-scripts", "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\app",
        "-debugInstance", "PENDINGdate",
        "-debugPath", "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\logs",
        "-debug", "9",
        "-debugClass", "9"
      ],
      "classPaths": [
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\classes",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\jac\\jac.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\mic\\mic.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\gson\\gson-2.8.6.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\crimson\\crimson.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\jetty\\javax.servlet.jar",
        "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\lib\\jetty\\org.mortbay.jetty.jar"
      ],
      "vmArgs": "-Xms64m -Xmx512m",
      "console": "integratedTerminal",
      "stopOnEntry": false
    },
    {
      "type": "java",
      "name": "Attach to JAC Process",
      "request": "attach",
      "hostName": "localhost",
      "port": 5005,
      "timeout": 30000
    }
  ],
  "inputs": [
    {
      "id": "scriptPath",
      "type": "promptString",
      "description": "Full path to .jrun file",
      "default": "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024\\app\\com\\esarks\\json\\JSONTest.jrun"
    }
  ]
}
```

### 2. Input Variables

The configuration includes an input variable for flexible script debugging:
- `${input:scriptPath}` - Prompts for the .jrun file path when debugging

## Debugging Workflows

### Workflow 1: Debug a Specific Script

1. **Set Breakpoints**
   - Open the generated `.java` file in `classes/com/esarks/...`
   - Or open the JAC source file (e.g., `ParseJson.java`)
   - Click left margin to set breakpoint (red dot)

2. **Start Debug Session**
   - Press `F5` or click "Run and Debug" icon
   - Select configuration (e.g., "Debug jsonStart")
   - Debugger will launch and stop at breakpoints

3. **Debug Controls**
   - **F5** - Continue
   - **F10** - Step Over
   - **F11** - Step Into
   - **Shift+F11** - Step Out
   - **Ctrl+Shift+F5** - Restart
   - **Shift+F5** - Stop

4. **Inspect Variables**
   - View variables in "Variables" panel
   - Hover over variables in code
   - Use "Watch" panel for expressions
   - View call stack in "Call Stack" panel

### Workflow 2: Debug JAC Core Classes

1. **Navigate to Source**
   ```
   jacBuild24/source/java/com/esarks/jac/
   ```

2. **Open Relevant File**
   - `ParseJson.java` - JSON parsing
   - `ScriptHelper.java` - Script helper methods
   - `SymbolTable.java` - Property management
   - `MicScriptHelper.java` - MIC framework

3. **Set Breakpoints**
   - Add breakpoints in methods you want to debug
   - Example: `ParseJson.parseJson()` method

4. **Launch Debugger**
   - Use any debug configuration
   - Script will hit breakpoints in JAC core

### Workflow 3: Debug with Attach Mode

For debugging already-running JAC processes:

1. **Start JAC with Debug Port**
   ```powershell
   java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005 -cp ... com.esarks.jac.jac ...
   ```

2. **Attach Debugger**
   - Select "Attach to JAC Process" configuration
   - Press `F5`
   - Debugger connects to running process

3. **Debug Live Process**
   - Set breakpoints
   - Trigger code paths in running application
   - Inspect live state

## Debugging Tips

### Tip 1: Debug Generated Java Classes

JAC scripts are compiled to Java classes in the `classes` directory:

```
classes/
└── com/
    └── esarks/
        ├── json/
        │   └── JSONTest.java (generated from JSONTest.script)
        └── jsonStart/
            └── jsonStart.java (generated from jsonStart.script)
```

You can set breakpoints in these generated files!

### Tip 2: Enable Source Attachment

Add to `.vscode/settings.json`:

```json
{
  "java.debug.settings.enableSourceAttachment": true,
  "java.debug.settings.forceBuildBeforeLaunch": false
}
```

### Tip 3: Hot Code Replace

Enable hot swap for faster debugging:

```json
{
  "java.debug.settings.hotCodeReplace": "auto"
}
```

### Tip 4: Conditional Breakpoints

Right-click breakpoint → Edit Breakpoint → Add condition:
```java
scriptName.equals("com.esarks.json.JSONTest")
```

### Tip 5: Logpoints

Instead of `System.out.println()`, use logpoints:
- Right-click line → Add Logpoint
- Message: `Variable value: {variableName}`
- No code changes needed!

## Building from VS Code

### Quick Build

Press `Ctrl+Shift+B` to run the default build task:
- Runs `buildJSONSimple.bat`
- Compiles JAC with JSON support
- Creates `jac.jar`

### Build and Deploy

Use Command Palette (`Ctrl+Shift+P`):
```
Tasks: Run Task → Build and Deploy
```

This will:
1. Build JAC
2. Copy jac.jar to runtime location

## Useful Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open Command Palette | `Ctrl+Shift+P` |
| Quick Open File | `Ctrl+P` |
| Toggle Terminal | `Ctrl+`` |
| Start Debugging | `F5` |
| Toggle Breakpoint | `F9` |
| Step Over | `F10` |
| Step Into | `F11` |
| Step Out | `Shift+F11` |
| Continue | `F5` |
| Stop Debugging | `Shift+F5` |
| Build | `Ctrl+Shift+B` |
| Go to Definition | `F12` |
| Find References | `Shift+F12` |
| Format Document | `Shift+Alt+F` |

## Recommended Extensions

### Development

1. **GitLens** (`eamodio.gitlens`)
   - Enhanced Git integration
   - View commit history inline

2. **Error Lens** (`usernamehw.errorlens`)
   - Inline error highlighting
   - Better error visibility

3. **Path Intellisense** (`christian-kohler.path-intellisense`)
   - Autocomplete file paths
   - Useful for JSON/XML file references

### Code Quality

4. **SonarLint** (`SonarSource.sonarlint-vscode`)
   - Code quality analysis
   - Detect bugs and code smells

5. **Better Comments** (`aaron-bond.better-comments`)
   - Colorize comments
   - Organize TODOs

### Productivity

6. **Bookmarks** (`alefragnani.Bookmarks`)
   - Mark important locations
   - Quick navigation

7. **Todo Tree** (`Gruntfuggly.todo-tree`)
   - Track TODOs in code
   - Tree view of tasks

## Workspace Organization

### Recommended Folder Structure

```
ArchitectsCompanion/
├── jac2024/
│   ├── .vscode/               # VS Code config
│   │   ├── launch.json        # Debug configs
│   │   ├── tasks.json         # Build tasks
│   │   └── settings.json      # Workspace settings
│   ├── jacBuild24/            # Build system
│   │   ├── source/java/       # JAC source code ← Debug here
│   │   ├── lib/               # Libraries
│   │   └── bin/               # Build scripts
│   ├── app/                   # Applications
│   │   └── com/esarks/
│   │       ├── json/          # JSON demos
│   │       └── jsonStart/     # JSON config demo
│   └── classes/               # Compiled classes ← Debug here too
└── ArchitectsCompanion.wiki/  # Documentation
```

### Multi-Root Workspace

For working with multiple locations, create `jac.code-workspace`:

```json
{
  "folders": [
    {
      "name": "JAC Build",
      "path": "C:\\Users\\ptm\\OneDrive\\Documents\\GitHub\\ArchitectsCompanion\\jac2024\\jacBuild24"
    },
    {
      "name": "JAC Applications",
      "path": "C:\\Users\\ptm\\OneDrive\\Documents\\GitHub\\ArchitectsCompanion\\jac2024\\app"
    },
    {
      "name": "JAC Runtime",
      "path": "C:\\Users\\ptm\\OneDrive\\GitHub\\ArchitectsCompanion\\jac2024"
    }
  ],
  "settings": {
    "java.home": "C:\\Users\\ptm\\OneDrive\\Documents\\GitHub\\ArchitectsCompanion\\jac2024\\jacBuild24\\jdk-24"
  }
}
```

## Troubleshooting

### Issue: Java Extension Not Working

**Solution:**
1. Open Command Palette (`Ctrl+Shift+P`)
2. Type: "Java: Clean Java Language Server Workspace"
3. Reload window

### Issue: Breakpoints Not Hitting

**Solution:**
1. Verify source matches compiled code
2. Check classpath includes source paths
3. Rebuild project (`Ctrl+Shift+B`)
4. Restart debug session

### Issue: Cannot Find Main Class

**Solution:**
1. Verify `java.home` in settings.json
2. Check classpath in launch.json
3. Ensure jac.jar is built and deployed

### Issue: OutOfMemoryError

**Solution:**
Increase heap in launch.json:
```json
"vmArgs": "-Xms128m -Xmx1024m"
```

## Advanced Debugging

### Remote Debugging

Debug JAC on another machine:

1. **Start Remote JAC with Debug Port**
   ```bash
   java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005 ...
   ```

2. **Create Attach Configuration**
   ```json
   {
     "type": "java",
     "request": "attach",
     "hostName": "remote-server-ip",
     "port": 5005
   }
   ```

### Memory Profiling

Add to launch configuration:
```json
"vmArgs": "-Xms64m -Xmx512m -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=C:/temp"
```

### Method Entry/Exit Logging

Add to source code temporarily:
```java
System.err.println(">>> Entering method: " + Thread.currentThread().getStackTrace()[1].getMethodName());
```

## Integration with JAC Tools

### Running .jrun Files

Create task in `tasks.json`:
```json
{
  "label": "Run Current .jrun",
  "type": "shell",
  "command": "${file}",
  "problemMatcher": [],
  "presentation": {
    "reveal": "always"
  }
}
```

### Compiling .script Files

Add compile task:
```json
{
  "label": "Compile Current Script",
  "type": "shell",
  "command": "jac",
  "args": ["-script", "${fileBasenameNoExtension}"],
  "problemMatcher": []
}
```

## Performance Tips

### 1. Exclude Unnecessary Folders

Add to `settings.json`:
```json
{
  "files.watcherExclude": {
    "**/classes/**": true,
    "**/phase1Classes/**": true,
    "**/phase2Classes/**": true,
    "**/logs/**": true
  }
}
```

### 2. Limit Java Language Server Memory

```json
{
  "java.jdt.ls.vmargs": "-Xmx1G"
}
```

### 3. Disable Auto Build

```json
{
  "java.autobuild.enabled": false
}
```

## Best Practices

### 1. Use Workspace Settings

Store project-specific settings in `.vscode/settings.json`, not user settings.

### 2. Version Control

Add to `.gitignore`:
```
.vscode/
!.vscode/settings.json
!.vscode/launch.json
!.vscode/tasks.json
classes/
*.class
logs/
```

### 3. Consistent Formatting

Add to settings:
```json
{
  "editor.formatOnSave": true,
  "java.format.settings.url": "eclipse-formatter.xml"
}
```

### 4. Use Logpoints Instead of println

Reduces code changes and merge conflicts.

### 5. Keep Debug Configs Updated

When adding new scripts, add corresponding debug configurations.

## Resources

### Official Documentation

- **VS Code Java**: https://code.visualstudio.com/docs/java/java-tutorial
- **Java Debugging**: https://code.visualstudio.com/docs/java/java-debugging
- **VS Code Tasks**: https://code.visualstudio.com/docs/editor/tasks

### JAC Documentation

- **JAC Wiki**: Located in `ArchitectsCompanion.wiki/`
- **JSON Implementation**: `json-alternative-startup.md`
- **Build System**: `BuildExamplesPlan.md`

---

**Version:** 1.0
**Date:** 2025-10-20
**Author:** JAC Development Team
**Status:** Production Ready
