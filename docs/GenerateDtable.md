---
title: "GenerateDtable"
---

# GenerateDtable - Decision Table Generator

## Purpose

GenerateDtable generates decision table implementations from declarative XML definitions. Decision tables are a business rules engine pattern that separates complex conditional logic into a structured, tabular format where conditions are evaluated and corresponding actions are executed. This generator creates Java code that implements decision logic in a maintainable, testable, and visually understandable way.

## Input XML Schema

### Schema Definition
- **Root element**: `<root>`
- **Schema namespace**: `com.esarks.arm.schemas.rules.root`

### Decision Table Structure

```xml
<com.esarks.arm.schemas.rules.root>
<root name="ChoreApprovalRules" title="Chore Approval Decision Table">
  <dtable name="approveChore"
          title="Determine if chore completion should be approved"
          return="boolean"
          visibility="public">

    <!-- Method Parameters -->
    <argument name="choreCompletion" type="ChoreCompletionJeo"/>
    <argument name="familyRules" type="FamilyRulesJeo"/>

    <!-- Conditions (Rows) -->
    <condition id="C1" symbolicId="HAS_PHOTO"
               text="Chore requires photo and photo provided">
    </condition>
    <condition id="C2" symbolicId="POINTS_VALID"
               text="Points are within valid range">
    </condition>
    <condition id="C3" symbolicId="PARENT_APPROVAL"
               text="Parent has approved completion">
    </condition>

    <!-- Actions (Rows) -->
    <action id="A1" symbolicId="APPROVE"
            text="Approve chore completion">
    </action>
    <action id="A2" symbolicId="REJECT"
            text="Reject chore completion">
    </action>
    <action id="A3" symbolicId="REQUEST_REVIEW"
            text="Request manual parent review">
    </action>

    <!-- Scenarios (Columns) -->
    <scenario name="AllConditionsMet">
      <condition ref="C1">true</condition>
      <condition ref="C2">true</condition>
      <condition ref="C3">true</condition>
      <action ref="A1" sequence="1"/>
    </scenario>

    <scenario name="MissingPhoto">
      <condition ref="C1">false</condition>
      <condition ref="C2">-</condition>  <!-- Don't care -->
      <condition ref="C3">-</condition>
      <action ref="A2" sequence="1"/>
    </scenario>

    <scenario name="NeedsReview">
      <condition ref="C1">true</condition>
      <condition ref="C2">false</condition>
      <condition ref="C3">-</condition>
      <action ref="A3" sequence="1"/>
    </scenario>
  </dtable>
</root>
</com.esarks.arm.schemas.rules.root>
```

### XML Elements

#### `<dtable>` - Decision Table Definition
- **`name`**: Method name for the decision table
- **`title`**: Human-readable description
- **`return`**: Return type (void, boolean, String, int, etc.)
- **`visibility`**: Method visibility (public, private, protected)

#### `<argument>` - Method Parameters
- **`name`**: Parameter name
- **`type`**: Java type (can be JEO classes, primitives, or objects)

#### `<condition>` - Condition Rows
- **`id`**: Unique identifier (C1, C2, C3, etc.)
- **`symbolicId`**: Symbolic name used in code (e.g., HAS_PHOTO)
- **`text`**: Human-readable description of what the condition checks

#### `<action>` - Action Rows
- **`id`**: Unique identifier (A1, A2, A3, etc.)
- **`symbolicId`**: Symbolic name used in code (e.g., APPROVE)
- **`text`**: Human-readable description of what the action does

#### `<scenario>` - Decision Columns
- **`name`**: Scenario identifier
- **`<condition ref>`**: Reference to condition ID with value:
  - `true` - Condition must be true
  - `false` - Condition must be false
  - `-` - Don't care (condition not evaluated)
- **`<action ref>`**: Reference to action ID with:
  - `sequence` - Execution order (1, 2, 3, etc.)

## Output Artifacts

### Generated Files

1. **`{Name}.script`** - Decision table implementation
2. **`{Name}.html`** - Visual decision table documentation

### Example Generated Decision Table

```java
package com.esarks.examples.rules;

import com.esarks.examples.jeo.*;
import com.esarks.arm.logging.Log;

public class ChoreApprovalRules {

    // Main decision table method
    public boolean approveChore(ChoreCompletionJeo choreCompletion,
                                FamilyRulesJeo familyRules) {

        boolean result = false;

        // ===== PRECONDITION SECTION =====
        // <section name="precondition">
        // Add precondition checks here
        // Validate input parameters
        if (choreCompletion == null || familyRules == null) {
            Log._ERR("approveChore: Null parameters");
            return false;
        }
        // </section>

        // ===== CONDITION EVALUATION =====
        boolean[] conditionResults = new boolean[3];
        boolean[] conditionEnabled = new boolean[3];

        // C1: HAS_PHOTO - Chore requires photo and photo provided
        // <section name="condition-HAS_PHOTO">
        conditionEnabled[0] = true;
        conditionResults[0] = choreCompletion.getRequirePhoto() &&
                             choreCompletion.getPhotoUrl() != null &&
                             !choreCompletion.getPhotoUrl().isEmpty();
        // </section>

        // C2: POINTS_VALID - Points are within valid range
        // <section name="condition-POINTS_VALID">
        conditionEnabled[1] = true;
        conditionResults[1] = choreCompletion.getPoints() >= 0 &&
                             choreCompletion.getPoints() <= familyRules.getMaxPoints();
        // </section>

        // C3: PARENT_APPROVAL - Parent has approved completion
        // <section name="condition-PARENT_APPROVAL">
        conditionEnabled[2] = true;
        conditionResults[2] = "APPROVED".equals(choreCompletion.getStatus());
        // </section>

        // ===== SCENARIO MATCHING =====
        String matchedScenario = null;

        // Scenario: AllConditionsMet
        if (conditionResults[0] == true &&
            conditionResults[1] == true &&
            conditionResults[2] == true) {
            matchedScenario = "AllConditionsMet";
        }

        // Scenario: MissingPhoto
        else if (conditionResults[0] == false) {
            matchedScenario = "MissingPhoto";
        }

        // Scenario: NeedsReview
        else if (conditionResults[0] == true &&
                 conditionResults[1] == false) {
            matchedScenario = "NeedsReview";
        }

        // ===== ACTION EXECUTION =====
        if (matchedScenario != null) {
            Log._APP("Decision table approveChore matched: " + matchedScenario);

            if ("AllConditionsMet".equals(matchedScenario)) {
                // Execute action: APPROVE
                // <section name="action-APPROVE">
                choreCompletion.setStatus("APPROVED");
                choreCompletion.setApprovedAt(new java.sql.Timestamp(System.currentTimeMillis()));
                result = true;
                Log._APP("Chore approved: " + choreCompletion.getCompletionId());
                // </section>
            }
            else if ("MissingPhoto".equals(matchedScenario)) {
                // Execute action: REJECT
                // <section name="action-REJECT">
                choreCompletion.setStatus("REJECTED");
                choreCompletion.setRejectionReason("Photo required but not provided");
                result = false;
                Log._APP("Chore rejected: " + choreCompletion.getCompletionId());
                // </section>
            }
            else if ("NeedsReview".equals(matchedScenario)) {
                // Execute action: REQUEST_REVIEW
                // <section name="action-REQUEST_REVIEW">
                choreCompletion.setStatus("PENDING_REVIEW");
                result = false;
                Log._APP("Chore flagged for review: " + choreCompletion.getCompletionId());
                // </section>
            }
        }
        else {
            Log._ERR("No matching scenario in approveChore decision table");
        }

        // ===== POSTCONDITION SECTION =====
        // <section name="postcondition">
        // Add postcondition logic here
        // Validate result before returning
        // </section>

        return result;
    }
}
```

## Key Features

### Visual Decision Table Format

The generated HTML documentation presents the decision logic in a traditional decision table format:

```
+------------------+----------+----------+----------+
|   Conditions     | Scenario | Scenario | Scenario |
|                  |    1     |    2     |    3     |
+------------------+----------+----------+----------+
| C1: HAS_PHOTO    |   true   |  false   |   true   |
| C2: POINTS_VALID |   true   |    -     |  false   |
| C3: PARENT_APPR  |   true   |    -     |    -     |
+------------------+----------+----------+----------+
| A1: APPROVE      |    X     |          |          |
| A2: REJECT       |          |    X     |          |
| A3: REQUEST_REV  |          |          |    X     |
+------------------+----------+----------+----------+
```

### Code Preservation

Generated code includes section markers that preserve custom implementations:

```java
// <section name="condition-HAS_PHOTO">
// Your custom condition logic here
// </section>
```

When regenerating, content within section markers is preserved through the Merge utility.

### Logging Integration

Automatic logging of:
- Matched scenarios
- Executed actions
- Error conditions
- Decision trace for debugging

### Structured Code Organization

1. **Precondition Section** - Validate inputs
2. **Condition Evaluation** - Check each condition
3. **Scenario Matching** - Find matching scenario
4. **Action Execution** - Execute actions in sequence
5. **Postcondition Section** - Validate results

### Multiple Action Sequences

Actions can be executed in order using the `sequence` attribute:

```xml
<scenario name="ComplexApproval">
  <condition ref="C1">true</condition>
  <action ref="A1" sequence="1"/>
  <action ref="A2" sequence="2"/>
  <action ref="A3" sequence="3"/>
</scenario>
```

### Don't Care Conditions

Use `-` to indicate a condition doesn't matter for a scenario:

```xml
<condition ref="C2">-</condition>  <!-- Not evaluated -->
```

## Generated Methods

### Decision Table Method

```java
public {returnType} {tableName}({arguments})
```

**Sections**:
- Precondition validation
- Condition evaluation loops
- Scenario matching logic
- Action execution by sequence
- Postcondition validation

**Returns**: Specified return type (boolean, void, String, etc.)

### Customizable Sections

Protected sections allow custom code:

- **`precondition`**: Input validation and setup
- **`condition-{SYMBOLIC_ID}`**: Condition evaluation logic
- **`action-{SYMBOLIC_ID}`**: Action implementation
- **`postcondition`**: Result validation and cleanup

## Dependencies

### Prerequisites
- **Logging Framework**: Log._APP, Log._ERR
- **Parameter Types**: Referenced JEO classes or Java types must exist

### Used By
- **Business Logic Layer**: Decision rules for application logic
- **Service Layer**: Validation and approval workflows
- **Controllers**: Request processing decisions

### JAC Infrastructure
- Uses ScriptWriter for code generation
- Requires ParseXml for schema loading
- Integrates with Merge for code preservation

## Configuration Options

### Decision Table Parameters

- **Return Types**: void, boolean, String, int, Object, custom types
- **Visibility**: public, private, protected
- **Arguments**: Any Java type including JEOs, primitives, collections

### Condition Evaluation

Conditions can use any Java expression:
```java
conditionResults[0] = choreCompletion.getPoints() > 100;
conditionResults[1] = !familyRules.isWeekend();
conditionResults[2] = choreCompletion.getMemberId().equals(requiredMember);
```

### Action Implementation

Actions can perform any operation:
- Update JEO objects
- Call service methods
- Log messages
- Set return values
- Throw exceptions

## Usage Example

### In GenerateComponents.xml

```xml
<component type="Dtable"
           name="ChoreApprovalRules"
           source="app/com/esarks/examples/rules/ChoreApprovalRules.xml"
           depends="ChoreCompletionJeo,FamilyRulesJeo"/>
```

### Standalone Generation

```java
GenerateDtable lGen = new GenerateDtable();
lGen.generateDtable("app/com/esarks/examples/rules/ChoreApprovalRules.xml", true);
```

### Using Generated Decision Table

```java
// Create decision table instance
ChoreApprovalRules rules = new ChoreApprovalRules();

// Prepare inputs
ChoreCompletionJeo completion = new ChoreCompletionJeo();
completion.setRequirePhoto(true);
completion.setPhotoUrl("https://example.com/photo.jpg");
completion.setPoints(50);

FamilyRulesJeo familyRules = new FamilyRulesJeo();
familyRules.setMaxPoints(100);

// Execute decision table
boolean approved = rules.approveChore(completion, familyRules);

if (approved) {
    System.out.println("Chore approved!");
} else {
    System.out.println("Chore not approved: " + completion.getStatus());
}
```

## Best Practices

1. **Clear Condition Names**: Use descriptive symbolic IDs (HAS_PHOTO vs C1)
2. **Mutually Exclusive Scenarios**: Ensure scenarios don't overlap
3. **Complete Coverage**: Handle all possible condition combinations
4. **Logging**: Log matched scenarios for debugging
5. **Input Validation**: Use precondition section to validate inputs
6. **Don't Care Wisely**: Use `-` to simplify scenario definitions
7. **Action Sequences**: Order actions logically when multiple execute
8. **Custom Sections**: Implement condition/action logic in protected sections

## Advanced Patterns

### Complex Condition Evaluation

```java
// <section name="condition-ELIGIBLE_MEMBER">
conditionEnabled[0] = true;
conditionResults[0] = choreCompletion.getMemberId() != null &&
                     familyRules.getEligibleMembers().contains(
                         choreCompletion.getMemberId()) &&
                     choreCompletion.getAge() >= familyRules.getMinAge();
// </section>
```

### Multi-Action Scenario

```xml
<scenario name="ApproveWithBonus">
  <condition ref="C1">true</condition>
  <condition ref="C2">true</condition>
  <action ref="A1" sequence="1"/>  <!-- Approve -->
  <action ref="A4" sequence="2"/>  <!-- Award bonus -->
  <action ref="A5" sequence="3"/>  <!-- Send notification -->
</scenario>
```

### Nested Decision Tables

```java
public boolean processRequest(RequestJeo request) {
    // First decision table
    boolean validated = validateRequest(request);

    if (validated) {
        // Second decision table based on first result
        return approveRequest(request);
    }

    return false;
}
```

### Decision Table with Side Effects

```java
// <section name="action-NOTIFY_PARENT">
// Send email notification
EmailService emailService = new EmailService();
emailService.sendEmail(
    familyRules.getParentEmail(),
    "Chore Completion Pending",
    "Your child has completed a chore requiring review."
);

// Log to audit trail
AuditLog.log("CHORE_REVIEW_REQUESTED",
             choreCompletion.getCompletionId());
// </section>
```

## Reverse Merge Support

GenerateDtable supports reverse merge - extracting code from compiled .java back to .script:

```bash
# Generate initial .script from XML
generateDtable("ChoreApprovalRules.xml", true);

# Compile to .java
jac.bat com.esarks.examples.rules.ChoreApprovalRules compile

# Edit .java file directly (add custom logic)

# Reverse merge .java back to .script
Merge.reverseGuidedMerge(
    "ChoreApprovalRules.java",
    "ChoreApprovalRules.script"
);
```

## File Locations

- **Generator script**: `jac2024/jacBuild24/source/scripts/com/esarks/jac/generators/GenerateDtable.script`
- **XML Schema**: Built-in `com.esarks.arm.schemas.rules.root`
- **Example tables**: `jac2024/app/com/esarks/examples/rules/*.xml`
- **Generated code**: `jac2024/app/com/esarks/examples/rules/*.script`

## Related Generators

- **GenerateJeo**: Decision tables often use JEO parameters
- **GenerateService**: Services call decision tables for business rules
- **GenerateController**: Controllers use decision tables for routing/validation

## Common Use Cases

1. **Approval Workflows**: Multi-criteria approval decisions
2. **Validation Rules**: Complex validation with multiple conditions
3. **Routing Logic**: Determine processing path based on conditions
4. **Pricing Rules**: Calculate prices based on multiple factors
5. **Access Control**: Permission decisions based on roles/attributes
6. **Content Filtering**: Determine content visibility/access
7. **Recommendation Engine**: Rule-based recommendations

## Troubleshooting

### Issue: Overlapping Scenarios

**Problem**: Multiple scenarios match the same conditions

**Solution**: Refine conditions to make scenarios mutually exclusive, or use scenario priority:
```java
// Check scenarios in priority order
if (matchScenario1()) {
    // Execute scenario 1
} else if (matchScenario2()) {
    // Execute scenario 2
}
```

### Issue: No Scenario Matches

**Problem**: Conditions don't match any defined scenario

**Solution**: Add a default scenario:
```xml
<scenario name="Default">
  <condition ref="C1">-</condition>
  <condition ref="C2">-</condition>
  <condition ref="C3">-</condition>
  <action ref="A_DEFAULT" sequence="1"/>
</scenario>
```

### Issue: Complex Condition Logic

**Problem**: Condition evaluation requires complex calculation

**Solution**: Implement in custom section with helper methods:
```java
// <section name="condition-helpers">
private boolean isEligibleForBonus(ChoreCompletionJeo completion) {
    // Complex calculation
    return /* ... */;
}
// </section>

// <section name="condition-BONUS_ELIGIBLE">
conditionResults[0] = isEligibleForBonus(choreCompletion);
// </section>
```

GenerateDtable provides a powerful, maintainable approach to implementing complex business rules through visual decision tables that are easy to understand, test, and modify.
