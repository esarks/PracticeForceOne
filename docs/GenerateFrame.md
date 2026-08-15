---
title: "GenerateFrame"
---

# GenerateFrame - Web UI Form Generator

## Purpose

GenerateFrame generates web-based user interface forms from declarative XML definitions. It creates JSP-style forms with various control types (text, select, date, multirow grids), automatic data binding to JEO objects, service method integration, and event handlers. This generator bridges the gap between data models and user interaction, creating complete form-based applications.

## Input XML Schema

### Schema Definition
- **Root element**: `<frames>`
- **Schema namespace**: `com.esarks.arm.schemas.frame.root`

### Frame Definition Structure

```xml
<com.esarks.arm.schemas.frame.root>
<frames>
  <frame name="ChoreManagement" title="Manage Family Chores">

    <!-- Form Controls -->
    <control type="text"
             name="choreTitle"
             caption="Chore Title"
             grid="1" column="1"
             maxlength="100" size="40"/>

    <control type="select"
             name="assignedMember"
             caption="Assign To"
             grid="1" column="2">
      <option value="">-- Select Member --</option>
      <option value="CHILD1">Child 1</option>
      <option value="CHILD2">Child 2</option>
    </control>

    <control type="date"
             name="dueDate"
             caption="Due Date"
             grid="2" column="1"/>

    <control type="multirow"
             name="choreList"
             caption="Active Chores"
             grid="3" column="1">
      <rowColumn name="title" heading="Chore" width="200"/>
      <rowColumn name="assignee" heading="Assigned To" width="150"/>
      <rowColumn name="dueDate" heading="Due" width="100"/>
      <rowColumn name="status" heading="Status" width="100"
                 hrefMethod="viewChoreDetails"/>
    </control>

    <control type="submit"
             name="saveButton"
             caption="Save Chore"
             grid="4" column="1">
      <button caption="Save">
        <service method="saveChore"/>
      </button>
      <button caption="Cancel">
        <service method="cancel"/>
      </button>
    </control>

    <!-- Service Bindings -->
    <service name="loadChoreList"
             method="getActiveChores"/>
    <service name="saveChore"
             method="saveChoreData"/>

    <!-- Data Mapping -->
    <maps>
      <map name="loadChoreData">
        <jeo type="ChoresJeo" instance="choreJeo"/>
        <property from="choreId" to="choreId"/>
        <property from="title" to="choreTitle"/>
        <property from="assignedMember" to="assignedMember"/>
        <property from="dueDate" to="dueDate" format="MM/dd/yyyy"/>
      </map>
    </maps>

  </frame>
</frames>
</com.esarks.arm.schemas.frame.root>
```

### Control Types

#### `text` - Text Input Field
```xml
<control type="text"
         name="choreTitle"
         caption="Chore Title"
         maxlength="100"
         size="40"
         grid="1" column="1"/>
```

**Attributes**:
- `maxlength` - Maximum character length
- `size` - Display width in characters

#### `password` - Password Input Field
```xml
<control type="password"
         name="userPassword"
         caption="Password"
         maxlength="50"
         size="20"/>
```

#### `select` - Dropdown Selection
```xml
<control type="select"
         name="priority"
         caption="Priority">
  <option value="LOW">Low</option>
  <option value="MEDIUM">Medium</option>
  <option value="HIGH">High</option>
</control>
```

#### `checkbox` - Checkbox Options
```xml
<control type="checkbox"
         name="requirePhoto"
         caption="Require Photo">
  <option value="true">Yes, photo required</option>
</control>
```

#### `radio` - Radio Button Group
```xml
<control type="radio"
         name="recurrence"
         caption="Recurrence">
  <option value="ONCE">One Time</option>
  <option value="DAILY">Daily</option>
  <option value="WEEKLY">Weekly</option>
</control>
```

#### `date` - Date Picker
```xml
<control type="date"
         name="dueDate"
         caption="Due Date"
         format="MM/dd/yyyy"/>
```

#### `multirow` - Data Grid
```xml
<control type="multirow"
         name="choreList"
         caption="Chores">
  <rowColumn name="title" heading="Title" width="200"/>
  <rowColumn name="points" heading="Points" width="100"/>
  <rowColumn name="status" heading="Status" width="100"
             hrefMethod="editChore"/>
</control>
```

**Row Column Attributes**:
- `name` - Data field name
- `heading` - Column header
- `width` - Column width in pixels
- `hrefMethod` - Click handler method name

#### `data` - Read-Only Data Display
```xml
<control type="data"
         name="totalPoints"
         caption="Total Points"
         format="###,###"/>
```

#### `submit` - Action Buttons
```xml
<control type="submit"
         name="actions">
  <button caption="Save">
    <service method="saveData"/>
  </button>
  <button caption="Delete">
    <service method="deleteData"/>
  </button>
</control>
```

### Grid Layout System

Forms use a grid-based layout:

```xml
<!-- Grid 1: Header information -->
<control type="text" name="field1" grid="1" column="1"/>
<control type="text" name="field2" grid="1" column="2"/>

<!-- Grid 2: Details section -->
<control type="select" name="field3" grid="2" column="1"/>

<!-- Grid 3: Data table -->
<control type="multirow" name="table1" grid="3" column="1"/>

<!-- Grid 4: Action buttons -->
<control type="submit" name="buttons" grid="4" column="1"/>
```

**Grid Attributes**:
- `grid` - Row number (1, 2, 3, ...)
- `column` - Column number (1, 2, 3, ...)

### Service Integration

#### Service Definition
```xml
<service name="loadData"
         method="getChoreById"/>

<service name="saveData"
         method="updateChore"/>
```

#### Service Method Binding
```xml
<button caption="Save">
  <service method="saveData"/>
</button>
```

### Data Mapping

#### JEO to Form Mapping
```xml
<map name="loadFormData">
  <jeo type="ChoresJeo" instance="choreJeo"/>
  <property from="choreId" to="choreId"/>
  <property from="title" to="choreTitle"/>
  <property from="dueDate" to="dueDate" format="MM/dd/yyyy"/>
</map>
```

#### Form to JEO Mapping
```xml
<map name="saveFormData">
  <jeo type="ChoresJeo" instance="choreJeo"/>
  <property to="choreId" from="choreId"/>
  <property to="title" from="choreTitle"/>
  <property to="dueDate" from="dueDate" format="MM/dd/yyyy"/>
</map>
```

**Property Attributes**:
- `from` - Source field name
- `to` - Target field name
- `format` - Date/number format pattern

## Output Artifacts

### Generated Files

1. **`{FrameName}.new`** - Frame implementation (merged with existing)

### Example Generated Frame

```java
package com.esarks.examples.frames;

import com.esarks.arm.frame.Frame;
import com.esarks.arm.frame.Control;
import com.esarks.examples.jeo.*;
import com.esarks.examples.services.*;
import java.sql.Date;
import java.util.ArrayList;

public class ChoreManagementFrame extends Frame {

    // Frame registration
    public void registerFrames() {
        registerFrame("ChoreManagement", "Manage Family Chores");
    }

    // Control Getters
    public String get_ChoreManagement_choreTitle() {
        return getControlValue("ChoreManagement", "choreTitle");
    }

    public String get_ChoreManagement_assignedMember() {
        return getControlValue("ChoreManagement", "assignedMember");
    }

    public Date get_ChoreManagement_dueDate() {
        String value = getControlValue("ChoreManagement", "dueDate");
        return parseDate(value, "MM/dd/yyyy");
    }

    // Control Setters
    public void set_ChoreManagement_choreTitle(String value) {
        setControlValue("ChoreManagement", "choreTitle", value);
    }

    public void set_ChoreManagement_assignedMember(String value) {
        setControlValue("ChoreManagement", "assignedMember", value);
    }

    public void set_ChoreManagement_dueDate(Date value) {
        setControlValue("ChoreManagement", "dueDate",
                       formatDate(value, "MM/dd/yyyy"));
    }

    // Service Methods
    public void service_loadChoreList() {
        ChoresService service = new ChoresService();
        ServiceJeo params = new ServiceJeo();

        ArrayList<Jeo> results = service.getActiveChores(params);

        if (!params.hasError()) {
            setControlData("ChoreManagement", "choreList", results);
        } else {
            displayError(params.getErrorMessage());
        }
    }

    public void service_saveChore() {
        ChoresService service = new ChoresService();
        ChoresJeo choreJeo = new ChoresJeo();

        // Map form data to JEO
        map_saveFormData(choreJeo);

        ServiceJeo params = new ServiceJeo();
        ArrayList<Jeo> results = service.saveChoreData(params);

        if (!params.hasError()) {
            displayMessage("Chore saved successfully");
            service_loadChoreList(); // Refresh grid
        } else {
            displayError(params.getErrorMessage());
        }
    }

    // Data Mapping Methods
    public void map_loadFormData(ChoresJeo choreJeo) {
        set_ChoreManagement_choreTitle(choreJeo.getTitle());
        set_ChoreManagement_assignedMember(choreJeo.getAssignedMember());
        set_ChoreManagement_dueDate(choreJeo.getDueDate());
    }

    public void map_saveFormData(ChoresJeo choreJeo) {
        choreJeo.setChoreId(get_ChoreManagement_choreId());
        choreJeo.setTitle(get_ChoreManagement_choreTitle());
        choreJeo.setAssignedMember(get_ChoreManagement_assignedMember());
        choreJeo.setDueDate(get_ChoreManagement_dueDate());
    }

    // Event Handlers
    public void viewChoreDetails(String choreId) {
        // Load selected chore
        ChoresService service = new ChoresService();
        ServiceJeo params = new ServiceJeo();
        params.setChoreId(choreId);

        ArrayList<Jeo> results = service.getChoreById(params);

        if (!params.hasError() && results.size() > 0) {
            ChoresJeo chore = (ChoresJeo) results.get(0);
            map_loadFormData(chore);
        }
    }

    // Utility Methods
    private Date parseDate(String value, String format) {
        // Date parsing logic
    }

    private String formatDate(Date value, String format) {
        // Date formatting logic
    }

    private void displayMessage(String message) {
        // Display success message
    }

    private void displayError(String error) {
        // Display error message
    }
}
```

## Key Features

### Automatic Data Binding

Forms automatically bind to JEO objects:
```java
ChoresJeo chore = new ChoresJeo();
map_loadFormData(chore);  // Form ← JEO
// User edits form
map_saveFormData(chore);  // Form → JEO
```

### Service Integration

Services called directly from buttons:
```xml
<button caption="Save">
  <service method="saveChore"/>
</button>
```

Generates:
```java
public void service_saveChore() {
    // Call service
    // Handle result
    // Update form
}
```

### Event Handlers

Clickable grid columns with custom handlers:
```xml
<rowColumn name="status" heading="Status"
           hrefMethod="viewDetails"/>
```

Generates:
```java
public void viewDetails(String rowId) {
    // Handle click event
}
```

### Multi-Row Grid Support

Display collections in editable grids:
- Pagination
- Sorting
- Row selection
- Click handlers
- Data refresh

### Date/Number Formatting

Automatic formatting based on type:
```xml
<property from="dueDate" to="dueDate" format="MM/dd/yyyy"/>
<property from="points" to="points" format="###,###"/>
```

### Validation Support

Form-level and field-level validation:
```java
public boolean validate_ChoreManagement() {
    if (get_ChoreManagement_choreTitle().isEmpty()) {
        displayError("Chore title required");
        return false;
    }
    return true;
}
```

### Error Display

Automatic error handling from services:
```java
if (params.hasError()) {
    displayError(params.getErrorMessage());
}
```

## Generated Methods

### Frame Registration
```java
public void registerFrames()
```
Registers frame with frame manager.

### Control Accessors
```java
public String get_{frameName}_{controlName}()
public void set_{frameName}_{controlName}(Type value)
```
Type-safe getters/setters for each control.

### Service Methods
```java
public void service_{serviceName}()
```
Service invocation methods bound to buttons.

### Data Mapping Methods
```java
public void {mapName}(JeoType jeo)
```
Bidirectional mapping between forms and JEOs.

### Event Handlers
```java
public void {hrefMethod}(String rowId)
```
Click handlers for grid rows.

## Dependencies

### Prerequisites
- **Frame Base Class**: `com.esarks.arm.frame.Frame`
- **JEO Classes**: Referenced JEO types must exist
- **Service Classes**: Referenced services must exist

### Used By
- **Web Applications**: Form-based user interfaces
- **Admin Panels**: Data entry and management
- **CRUD Operations**: Create/Read/Update/Delete interfaces

### JAC Infrastructure
- Uses ScriptWriter for code generation
- Requires ParseXml for schema loading
- Integrates with Merge for code preservation

## Configuration Options

### Frame Properties
- **`name`**: Frame identifier
- **`title`**: Display title

### Control Properties
- **Grid positioning**: `grid`, `column`
- **Size/length**: `size`, `maxlength`
- **Format patterns**: `format`
- **Options**: `<option>` elements

### Mapping Properties
- **Direction**: `from` → `to`
- **Format**: Date/number patterns
- **Type conversion**: Automatic based on JEO field types

## Usage Example

### In GenerateComponents.xml

```xml
<component type="Frame"
           name="ChoreManagement"
           source="app/com/esarks/examples/frames/ChoreManagement.xml"
           depends="ChoresJeo,ChoresService"/>
```

### Standalone Generation

```java
GenerateFrame lGen = new GenerateFrame();
lGen.generateFrame("app/com/esarks/examples/frames/ChoreManagement.xml", true);
```

### Using Generated Frame

```java
// Create frame instance
ChoreManagementFrame frame = new ChoreManagementFrame();

// Register frame
frame.registerFrames();

// Load data into form
ChoresJeo chore = service.getChoreById("CHORE123");
frame.map_loadFormData(chore);

// Render form (typically in JSP/servlet)
frame.render("ChoreManagement");

// User submits form
frame.service_saveChore();
```

## Best Practices

1. **Grid Organization**: Group related controls in same grid
2. **Clear Captions**: Use descriptive control labels
3. **Service Separation**: Keep business logic in services
4. **Data Mapping**: Use maps for complex JEO transformations
5. **Error Handling**: Always check service errors
6. **Validation**: Validate before calling services
7. **User Feedback**: Display success/error messages
8. **Grid Click Handlers**: Use for drill-down navigation

## Advanced Patterns

### Master-Detail Form

```xml
<frame name="ChoreDetails">
  <!-- Master section -->
  <control type="multirow" name="choreList" grid="1">
    <rowColumn name="title" hrefMethod="loadChoreDetail"/>
  </control>

  <!-- Detail section -->
  <control type="text" name="choreTitle" grid="2"/>
  <control type="text" name="description" grid="3"/>

  <control type="submit" name="actions" grid="4">
    <button caption="Save">
      <service method="saveChore"/>
    </button>
  </control>
</frame>
```

### Dynamic Option Loading

```java
public void service_loadMemberOptions() {
    FamilyMembersService service = new FamilyMembersService();
    ArrayList<Jeo> members = service.getAllMembers(new ServiceJeo());

    // Populate select control options
    clearOptions("ChoreManagement", "assignedMember");
    for (Jeo jeo : members) {
        FamilyMembersJeo member = (FamilyMembersJeo) jeo;
        addOption("ChoreManagement", "assignedMember",
                 member.getMemberId(), member.getChildName());
    }
}
```

### Conditional Field Display

```java
public void updateFormVisibility() {
    String recurrence = get_ChoreManagement_recurrence();

    if ("ONCE".equals(recurrence)) {
        showControl("ChoreManagement", "dueDate");
        hideControl("ChoreManagement", "recurrencePattern");
    } else {
        hideControl("ChoreManagement", "dueDate");
        showControl("ChoreManagement", "recurrencePattern");
    }
}
```

### Grid Row Actions

```xml
<control type="multirow" name="choreList">
  <rowColumn name="title" heading="Chore" width="200"/>
  <rowColumn name="edit" heading="Edit" width="50"
             hrefMethod="editChore"/>
  <rowColumn name="delete" heading="Delete" width="50"
             hrefMethod="deleteChore"/>
</control>
```

```java
public void editChore(String choreId) {
    // Load and display chore for editing
}

public void deleteChore(String choreId) {
    if (confirmDelete()) {
        service.deleteChore(choreId);
        service_loadChoreList(); // Refresh
    }
}
```

### Form Wizard Pattern

```java
private int currentStep = 1;

public void nextStep() {
    if (validateCurrentStep()) {
        currentStep++;
        updateStepDisplay();
    }
}

public void previousStep() {
    currentStep--;
    updateStepDisplay();
}

private void updateStepDisplay() {
    hideAllSteps();
    showGrid("ChoreManagement", currentStep);
}
```

## File Locations

- **Generator script**: `jac2024/jacBuild24/source/scripts/com/esarks/jac/generators/GenerateFrame.script`
- **XML Schema**: Built-in `com.esarks.arm.schemas.frame.root`
- **Example frames**: `jac2024/app/com/esarks/examples/frames/*.xml`
- **Generated frames**: `jac2024/app/com/esarks/examples/frames/*.new`

## Related Generators

- **GenerateJeo**: Frames bind to JEO objects for data
- **GenerateService**: Frames call services for operations
- **GenerateReport**: Forms submit to generate reports
- **GenerateController**: Controllers orchestrate frame workflows

## Common Use Cases

1. **Data Entry Forms**: Create/edit records
2. **Search Interfaces**: Filter and find records
3. **Admin Panels**: Manage application data
4. **Settings Pages**: Configure application options
5. **Master-Detail Views**: List with drill-down
6. **Multi-Step Wizards**: Complex data collection
7. **Dashboard Forms**: Display and interact with summaries

## Troubleshooting

### Issue: Control Values Not Persisting

**Problem**: Form values lost after submission

**Solution**: Reload form data after service call:
```java
public void service_saveChore() {
    // Save data
    service.saveChore();

    // Reload to show updated values
    service_loadChoreData();
}
```

### Issue: Grid Not Updating

**Problem**: Multirow grid doesn't show new data

**Solution**: Explicitly refresh grid data:
```java
ArrayList<Jeo> data = service.getChores();
setControlData("ChoreManagement", "choreList", data);
refreshGrid("ChoreManagement", "choreList");
```

### Issue: Date Format Errors

**Problem**: Date conversion failures

**Solution**: Use consistent format patterns:
```xml
<property from="dueDate" to="dueDate" format="MM/dd/yyyy"/>
```

And matching Java code:
```java
SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");
```

### Issue: Service Call Failures

**Problem**: Service methods not executing

**Solution**: Check service binding:
```xml
<!-- Define service first -->
<service name="saveData" method="saveChore"/>

<!-- Then reference in button -->
<button caption="Save">
  <service method="saveData"/>  <!-- Match service name -->
</button>
```

GenerateFrame provides a powerful, declarative approach to building web forms with automatic data binding, service integration, and event handling, enabling rapid development of form-based applications.
