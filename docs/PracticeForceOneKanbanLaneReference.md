---
title: "PracticeForceOneKanbanLaneReference"
---

# PracticeForceOne — Kanban Lane Reference (live definitions)

**Last reviewed: 2026-07-26** — all 42 embedded blocks regenerated from the LIVE
`engine_configs` rows (Bay Area Cardiology, **prod** stage). Every block was stale: the doc still
showed the old `subtitleFields`/`extraFields` shape, while live definitions have moved to
`rows[]` + `actions{next,backward,secondary,showEvents,showJourney,showDelete}`.

**Lane-behaviour changes landed 2026-07-26 (live on build 1974):**
- Primary button labels now state what the button DOES: Patient Arrived = **Open Check-In** (it opens
  Check-In, it does not start an encounter), Rooming/Intake = **Open Encounter**, Ready For Provider =
  **Start Provider Encounter** (this is the one that advances the visit).
- **Open Encounter** added as a secondary on Ready For Rooming and Ready For Provider — a lane
  definition's `secondary[]` REPLACES the in-code actions, which had silently removed the only route
  to the encounter from Rooming.
- `Back ?` labels on 9 lanes repaired to `Back →` (a cp1252 round-trip had degraded the arrow).
- Chrome flags (`showEvents`/`showJourney`/`showDelete`) now follow the lane a card is RENDERED IN, so
  configuring **All Work** governs the All Work column; unset flags still fall back to the card's own lane.

**What this is:** the *actual, current* definition for **every Kanban lane** — the **card face**
(`kanban_card`) and the **right panel** (`kanban_panel`), pulled live from `engine_configs`. Use it as
a copy-from reference when editing in the **Kanban Editor** / **Workflow Editor**. The **Bay Area
Cardiology** practice has these written out explicitly (prod + preprod), so editing any block below and
saving visibly changes that lane's board.

- **Card face** = `kanban_card` (key `default`), one entry per lane. `subtitleFields` join with `separator`;
  `subtitle` is a `{token}` template used when no fields are set; `legacy` is a human note of what it renders.
- **Right panel** = `kanban_panel` (key `default`), one entry per lane, as an ordered **`sections`** list.
  Section types: `lead` (name + chips + **Next Resolution**), `details` (your `label`+`field` rows),
  `gate` (**Review Gate** checklist), `nextResolution` (full next-action panel), `autopilots`, `whyBlocked`,
  `why`, `move`, `scheduling`, `technical`. Dynamic sections (everything except `details`) render live from the
  card / workflow / gate — the def only decides **whether** they show and **where**.
- The **content** of the dynamic sections is itself definition-driven from the **Workflow Editor**:
  **Next Resolution** label ← workflow step `label`; **Review Gate** checklist ← `review_gate` def;
  **Why blocked** rows ← `blockers` catalog. See `PracticeForceOneWorkflowEditor.md`.

> A lane left blank (no `kanban_panel` entry) renders today's default full panel. The examples below are the
> *explicit* equivalent — every section spelled out — so you can trim/reorder/rename and see the board change.

---

### Review Registration  
`lane id: review_registration`

**Card face** — subtitle template: `{subtitle}`  
_renders like:_ `Review Registration | pending-confirmation | requested reason | requested provider | practice`

```jsonc
// kanban_card["review_registration"]
{
  "legacy": "Review Registration | pending-confirmation | requested reason | requested provider | practice",
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "reviewTypeLabel",
        "registrationStatus",
        "visitReason",
        "providerName",
        "practiceName",
        "appointmentLinked",
        "submittedWhen"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "actions": {
    "next": [
      {
        "showWhen": "patientId",
        "hideWhen": "portalUserId",
        "label": "Review Chart",
        "href": "/ui/patient-chart.html?patientId={patientId}&practiceId={practiceId}&source=kanban&review=check-in&checkInId={checkInId}"
      },
      {
        "showWhen": "portalUserId",
        "label": "Review Registration",
        "href": "/ui/cf.html?formType=portal_users_cf&recordId={portalUserId}&practiceId={practiceId}&label=Portal+User&seed=/ui/form-configs/portal-users-default.json"
      }
    ],
    "secondary": [
      {
        "showWhen": "patientId",
        "label": "Open Patient Chart",
        "href": "/ui/patient-chart.html?patientId={patientId}&practiceId={practiceId}&source=kanban"
      },
      {
        "showWhen": "appointmentId",
        "label": "Open Appointment",
        "href": "/ui/practice-ehr-calendar.html?appointmentId={appointmentId}&patientId={patientId}&source=kanban"
      },
      {
        "showWhen": "patientId",
        "hideWhen": "appointmentId",
        "label": "Schedule Patient",
        "href": "/ui/cf.html?formType=appointments_cf&new=1&patientId={patientId}&patientName={patientName}&practiceId={practiceId}&label=Appointment&seed=/ui/form-configs/appointments-default.json"
      }
    ]
  }
}
```

**Right panel** — sections: `lead` → `details` → `gate` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["review_registration"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Registration",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "patientDob",
          "label": "DOB"
        },
        {
          "field": "phone",
          "label": "Phone"
        },
        {
          "field": "providerName",
          "label": "Requested provider"
        },
        {
          "field": "visitReason",
          "label": "Requested reason"
        }
      ]
    },
    {
      "type": "gate"
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Patient Needs Appointment  
`lane id: patient_needs_schedule`

**Card face** — subtitle template: `{subtitle}`  
_renders like:_ `registration status | requested reason | requested provider | preferred time`

```jsonc
// kanban_card["patient_needs_schedule"]
{}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["patient_needs_schedule"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Patient",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "patientDob",
          "label": "DOB"
        },
        {
          "field": "phone",
          "label": "Phone"
        },
        {
          "field": "visitReason",
          "label": "Reason"
        }
      ]
    },
    {
      "controls": [
        {
          "kind": "action-button",
          "label": "Send for Review"
        },
        {
          "kind": "undo-button"
        }
      ],
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Patient Scheduled  
`lane id: patient_scheduled`

**Card face** — subtitleFields: `apptWhen`, `providerName`, `visitReason` · sep ` | `  
_renders like:_ `appt time | provider | visit reason`

```jsonc
// kanban_card["patient_scheduled"]
{
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "appointmentDate",
        "providerName",
        "practiceName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "actions": {
    "next": {
      "action": "advance",
      "label": "Patient Arrived"
    },
    "secondary": [
      {
        "label": "Open Appointment",
        "href": "/ui/appointment-details.html?appointmentId={appointmentId}&practiceId={practiceId}"
      },
      {
        "label": "Modify Appointment",
        "href": "/ui/practice-ehr-calendar.html?appointmentId={appointmentId}&practiceId={practiceId}"
      }
    ]
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["patient_scheduled"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Appointment",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "apptWhen",
          "label": "Appointment"
        },
        {
          "field": "providerName",
          "label": "Provider"
        },
        {
          "field": "visitReason",
          "label": "Reason"
        },
        {
          "field": "room",
          "label": "Room"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Patient Arrived  
`lane id: patient_arrived`

**Card face** — subtitleFields: `apptWhen`, `providerName`, `visitReason` · sep ` | `  
_renders like:_ `appt time | provider | visit reason`

```jsonc
// kanban_card["patient_arrived"]
{
  "subtitleFields": [
    "apptWhen",
    "providerName",
    "visitReason"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "apptWhen",
        "visitReason",
        "providerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [
      {
        "showWhen": "appointmentId",
        "label": "Modify appointment",
        "href": "/ui/cf.html?formType=appointments_cf&recordId={appointmentId}&practiceId={practiceId}&label=Appointment&seed=/ui/form-configs/appointments-default.json"
      }
    ],
    "next": {
      "label": "Open Check-In"
    },
    "showJourney": true,
    "showDelete": false,
    "backward": {
      "label": "Back → (Modify Appointment)",
      "href": "/ui/cf.html?formType=appointments_cf&recordId={appointmentId}&practiceId={practiceId}&label=Appointment&seed=/ui/form-configs/appointments-default.json"
    },
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `gate` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["patient_arrived"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Arrival",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "apptWhen",
          "label": "Appointment"
        },
        {
          "field": "providerName",
          "label": "Provider"
        },
        {
          "field": "visitReason",
          "label": "Reason"
        },
        {
          "field": "room",
          "label": "Room"
        }
      ]
    },
    {
      "type": "gate"
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Insurance Exception  
`lane id: insurance_exception`

**Card face** — subtitleFields: `apptWhen`, `providerName`, `visitReason` · sep ` | `  
_renders like:_ `appt time | provider | visit reason (eligibility/auth blocker)`

```jsonc
// kanban_card["insurance_exception"]
{
  "subtitleFields": [
    "apptWhen",
    "providerName",
    "visitReason"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "apptWhen",
        "visitReason",
        "providerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [
      {
        "showWhen": "appointmentId",
        "label": "Modify appointment",
        "href": "/ui/cf.html?formType=appointments_cf&recordId={appointmentId}&practiceId={practiceId}&label=Appointment&seed=/ui/form-configs/appointments-default.json"
      }
    ],
    "next": {
      "label": "Open Appointment",
      "href": "/ui/practice-ehr-calendar.html?appointmentId={appointmentId}&patientId={patientId}&practiceId={practiceId}&source=kanban"
    },
    "showJourney": true,
    "showDelete": false,
    "backward": {
      "label": "Back → (Modify Appointment)",
      "href": "/ui/cf.html?formType=appointments_cf&recordId={appointmentId}&practiceId={practiceId}&label=Appointment&seed=/ui/form-configs/appointments-default.json"
    },
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `gate` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["insurance_exception"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Insurance",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "payerName",
          "label": "Payer"
        },
        {
          "field": "primaryInsurance",
          "label": "Insurance"
        },
        {
          "field": "insuranceCopay",
          "label": "Copay"
        }
      ]
    },
    {
      "type": "gate"
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Ready For Rooming  
`lane id: ready_for_intake`

**Card face** — subtitleFields: `apptWhen`, `providerName`, `visitReason` · sep ` | `  
_renders like:_ `appt time | provider | visit reason`

```jsonc
// kanban_card["ready_for_intake"]
{
  "subtitleFields": [
    "apptWhen",
    "providerName",
    "visitReason"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "apptWhen",
        "visitReason",
        "providerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [
      {
        "showWhen": "encounterId",
        "label": "Open Encounter",
        "href": "/ui/cf.html?formType=encounter_cf&label=Encounter&seed=/ui/form-configs/encounter-default.json&recordId={encounterId}&practiceId={practiceId}"
      },
      {
        "showWhen": "appointmentId",
        "label": "Modify appointment",
        "href": "/ui/cf.html?formType=appointments_cf&recordId={appointmentId}&practiceId={practiceId}&label=Appointment&seed=/ui/form-configs/appointments-default.json"
      }
    ],
    "next": {
      "label": "Send to Room"
    },
    "showJourney": true,
    "showDelete": false,
    "backward": {
      "label": "Back → (Modify Appointment)",
      "href": "/ui/cf.html?formType=appointments_cf&recordId={appointmentId}&practiceId={practiceId}&label=Appointment&seed=/ui/form-configs/appointments-default.json"
    },
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["ready_for_intake"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Rooming",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "apptWhen",
          "label": "Appointment"
        },
        {
          "field": "providerName",
          "label": "Provider"
        },
        {
          "field": "room",
          "label": "Room"
        },
        {
          "field": "visitReason",
          "label": "Reason"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Rooming / Intake In Progress  
`lane id: ready_to_encounter`

**Card face** — subtitleFields: `apptWhen`, `providerName`, `visitReason` · sep ` | `  
_renders like:_ `appt time | provider | visit reason`

```jsonc
// kanban_card["ready_to_encounter"]
{
  "subtitleFields": [
    "apptWhen",
    "visitDate",
    "chiefComplaint",
    "visitReason",
    "providerName"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "stateLabel",
        "roomDisplay",
        "providerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [
      {
        "showWhen": "appointmentId",
        "label": "Modify appointment",
        "href": "/ui/cf.html?formType=appointments_cf&recordId={appointmentId}&practiceId={practiceId}&label=Appointment&seed=/ui/form-configs/appointments-default.json"
      }
    ],
    "next": {
      "label": "Open Encounter"
    },
    "showJourney": true,
    "showDelete": false,
    "backward": {
      "label": "Back → (Modify Appointment)",
      "href": "/ui/cf.html?formType=appointments_cf&recordId={appointmentId}&practiceId={practiceId}&label=Appointment&seed=/ui/form-configs/appointments-default.json"
    },
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["ready_to_encounter"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Intake",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "providerName",
          "label": "Provider"
        },
        {
          "field": "room",
          "label": "Room"
        },
        {
          "field": "chiefComplaint",
          "label": "Chief complaint"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Ready For Provider  
`lane id: ready_for_provider`

**Card face** — subtitleFields: `apptWhen`, `providerName`, `visitReason` · sep ` | `  
_renders like:_ `appt time | provider | visit reason`

```jsonc
// kanban_card["ready_for_provider"]
{
  "subtitleFields": [
    "apptWhen",
    "providerName",
    "visitReason"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "stateLabel",
        "roomDisplay",
        "providerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [
      {
        "showWhen": "encounterId",
        "label": "Open Encounter",
        "href": "/ui/practice-ehr-encounter.html?id={encounterId}&patientId={patientId}&source=kanban"
      },
      {
        "showWhen": "appointmentId",
        "label": "Modify appointment",
        "href": "/ui/cf.html?formType=appointments_cf&recordId={appointmentId}&practiceId={practiceId}&label=Appointment&seed=/ui/form-configs/appointments-default.json"
      }
    ],
    "next": {
      "label": "Start Provider Encounter"
    },
    "showJourney": true,
    "showDelete": false,
    "backward": {
      "label": "Back → (Modify Appointment)",
      "href": "/ui/cf.html?formType=appointments_cf&recordId={appointmentId}&practiceId={practiceId}&label=Appointment&seed=/ui/form-configs/appointments-default.json"
    },
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["ready_for_provider"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Encounter",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "providerName",
          "label": "Provider"
        },
        {
          "field": "room",
          "label": "Room"
        },
        {
          "field": "chiefComplaint",
          "label": "Chief complaint"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Provider Encounter In Progress  
`lane id: visit_in_progress`

**Card face** — subtitleFields: `visitDate`, `chiefComplaint`, `providerName` · sep ` | `  
_renders like:_ `visit date | chief complaint | provider`

```jsonc
// kanban_card["visit_in_progress"]
{
  "subtitleFields": [
    "visitDate",
    "chiefComplaint",
    "providerName"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "visitDate",
        "chiefComplaint",
        "providerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [],
    "next": {
      "label": "Open Encounter",
      "href": "/ui/practice-ehr-encounter.html?encounterId={encounterId}&patientId={patientId}&practiceId={practiceId}&source=kanban"
    },
    "showJourney": true,
    "showDelete": false,
    "backward": {
      "label": "Back → (Encounter)",
      "href": "/ui/practice-ehr-encounter.html?id={encounterId}&patientId={patientId}&source=kanban"
    },
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["visit_in_progress"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Encounter",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "providerName",
          "label": "Provider"
        },
        {
          "field": "room",
          "label": "Room"
        },
        {
          "field": "chiefComplaint",
          "label": "Chief complaint"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Clinical Follow-Up  
`lane id: clinical_follow_up`

**Card face** — subtitleFields: `visitDate`, `chiefComplaint`, `providerName` · sep ` | `  
_renders like:_ `visit date | chief complaint | provider (orders/tasks fall back to their own line)`

```jsonc
// kanban_card["clinical_follow_up"]
{
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "subjectLabel",
        "providerNameDisplay",
        "formattedDueAt"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "actions": {
    "next": [
      {
        "showWhen": "encounterId",
        "label": "Open Encounter",
        "href": "/ui/practice-ehr-encounter.html?encounterId={encounterId}&patientId={patientId}&practiceId={practiceId}&source=kanban&clinicalTaskId={entityId}"
      },
      {
        "hideWhen": "encounterId",
        "label": "Review Task",
        "href": "/ui/patient-chart.html?patientId={patientId}&practiceId={practiceId}&source=kanban&review=clinical-follow-up&clinicalTaskId={entityId}"
      }
    ]
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["clinical_follow_up"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Follow-up",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "providerName",
          "label": "Provider"
        },
        {
          "field": "visitReason",
          "label": "Reason"
        },
        {
          "field": "dueAt",
          "label": "Due"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Provider Documentation Incomplete  
`lane id: documentation_incomplete`

**Card face** — subtitleFields: `visitDate`, `chiefComplaint`, `providerName` · sep ` | `  
_renders like:_ `visit date | chief complaint | provider`

```jsonc
// kanban_card["documentation_incomplete"]
{
  "subtitleFields": [
    "visitDate",
    "chiefComplaint",
    "providerName"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "visitDate",
        "chiefComplaint",
        "providerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [],
    "next": {
      "label": "Open Encounter",
      "href": "/ui/practice-ehr-encounter.html?encounterId={encounterId}&patientId={patientId}&practiceId={practiceId}&source=kanban"
    },
    "showJourney": true,
    "showDelete": false,
    "backward": {
      "label": "Back → (Encounter)",
      "href": "/ui/practice-ehr-encounter.html?id={encounterId}&patientId={patientId}&source=kanban"
    },
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["documentation_incomplete"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Documentation",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "providerName",
          "label": "Provider"
        },
        {
          "field": "visitDate",
          "label": "Visit date"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Ready To Sign Encounter  
`lane id: ready_to_sign`

**Card face** — subtitleFields: `visitDate`, `chiefComplaint`, `providerName` · sep ` | `  
_renders like:_ `visit date | chief complaint | provider`

```jsonc
// kanban_card["ready_to_sign"]
{
  "subtitleFields": [
    "visitDate",
    "chiefComplaint",
    "providerName"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "visitDate",
        "chiefComplaint",
        "providerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [],
    "next": {
      "label": "Open Encounter",
      "href": "/ui/practice-ehr-encounter.html?encounterId={encounterId}&patientId={patientId}&practiceId={practiceId}&source=kanban"
    },
    "showJourney": true,
    "showDelete": false,
    "backward": {
      "label": "Back → (Encounter)",
      "href": "/ui/practice-ehr-encounter.html?id={encounterId}&patientId={patientId}&source=kanban"
    },
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["ready_to_sign"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Sign-off",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "providerName",
          "label": "Provider"
        },
        {
          "field": "visitDate",
          "label": "Visit date"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Ready For Coding  
`lane id: ready_for_coding`

**Card face** — subtitleFields: `visitDate`, `chiefComplaint`, `providerName` · sep ` | `  
_renders like:_ `visit date | chief complaint | provider`

```jsonc
// kanban_card["ready_for_coding"]
{
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "visitDate",
        "chiefComplaint",
        "providerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "actions": {
    "next": {
      "label": "Open Encounter",
      "href": "/ui/practice-ehr-encounter.html?encounterId={encounterId}&patientId={patientId}&practiceId={practiceId}&source=kanban"
    },
    "backward": {
      "label": "Back → (Encounter)",
      "href": "/ui/practice-ehr-encounter.html?id={encounterId}&patientId={patientId}&source=kanban"
    }
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["ready_for_coding"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Coding",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "providerName",
          "label": "Provider"
        },
        {
          "field": "claimLabel",
          "label": "Claim"
        },
        {
          "field": "visitDate",
          "label": "Visit date"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Ready To Claim  
`lane id: ready_to_claim`

**Card face** — subtitleFields: `claimLabel`, `amountFmt`, `payerName` · sep ` | `  
_renders like:_ `Claim # | amount | payer`

```jsonc
// kanban_card["ready_to_claim"]
{
  "subtitleFields": [
    "claimLabel",
    "amountFmt",
    "payerName"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "visitDate",
        "chiefComplaint",
        "providerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [],
    "next": {
      "label": "Create Claim",
      "href": "/ui/patient-chart.html?patientId={patientId}&practiceId={practiceId}&source=kanban&focus=claim"
    },
    "showJourney": false,
    "showDelete": false,
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["ready_to_claim"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Claim",
      "rows": [
        {
          "field": "claimLabel",
          "label": "Claim"
        },
        {
          "field": "amountFmt",
          "label": "Amount"
        },
        {
          "field": "payerName",
          "label": "Payer"
        },
        {
          "field": "patientName",
          "label": "Patient"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Claim Needs Scrub  
`lane id: claim_needs_scrub`

**Card face** — subtitleFields: `claimLabel`, `amountFmt`, `payerName` · sep ` | `  
_renders like:_ `Claim # | amount | payer`

```jsonc
// kanban_card["claim_needs_scrub"]
{
  "subtitleFields": [
    "claimLabel",
    "amountFmt",
    "payerName"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "claimLabel",
        "amountFmt",
        "payerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [],
    "next": {
      "label": "Scrub Claim",
      "href": "/ui/claims.html?id={entityId}&patientId={patientId}&practiceId={practiceId}&source=kanban&focus={lane}"
    },
    "showJourney": false,
    "showDelete": false,
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["claim_needs_scrub"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Claim",
      "rows": [
        {
          "field": "claimLabel",
          "label": "Claim"
        },
        {
          "field": "amountFmt",
          "label": "Amount"
        },
        {
          "field": "payerName",
          "label": "Payer"
        },
        {
          "field": "patientName",
          "label": "Patient"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Ready To Submit  
`lane id: ready_to_submit`

**Card face** — subtitleFields: `claimLabel`, `amountFmt`, `payerName` · sep ` | `  
_renders like:_ `Claim # | amount | payer`

```jsonc
// kanban_card["ready_to_submit"]
{
  "subtitleFields": [
    "claimLabel",
    "amountFmt",
    "payerName"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "claimLabel",
        "amountFmt",
        "payerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [],
    "next": {
      "label": "Submit Claim",
      "href": "/ui/claims.html?id={entityId}&patientId={patientId}&practiceId={practiceId}&source=kanban&focus={lane}"
    },
    "showJourney": false,
    "showDelete": false,
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["ready_to_submit"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Claim",
      "rows": [
        {
          "field": "claimLabel",
          "label": "Claim"
        },
        {
          "field": "amountFmt",
          "label": "Amount"
        },
        {
          "field": "payerName",
          "label": "Payer"
        },
        {
          "field": "patientName",
          "label": "Patient"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Payer Response Needed  
`lane id: payer_response`

**Card face** — subtitleFields: `claimLabel`, `amountFmt`, `payerName` · sep ` | `  
_renders like:_ `Claim # | amount | payer`

```jsonc
// kanban_card["payer_response"]
{
  "subtitleFields": [
    "claimLabel",
    "amountFmt",
    "payerName"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "claimLabel",
        "amountFmt",
        "payerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [],
    "next": {
      "label": "View Claim",
      "href": "/ui/claims.html?id={entityId}&patientId={patientId}&practiceId={practiceId}&source=kanban&focus={lane}"
    },
    "showJourney": false,
    "showDelete": false,
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["payer_response"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Payer",
      "rows": [
        {
          "field": "claimLabel",
          "label": "Claim"
        },
        {
          "field": "amountFmt",
          "label": "Amount"
        },
        {
          "field": "payerName",
          "label": "Payer"
        },
        {
          "field": "balance",
          "label": "Balance"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Denial / Appeal Needed  
`lane id: denial_appeal`

**Card face** — subtitleFields: `claimLabel`, `amountFmt`, `payerName` · sep ` | `  
_renders like:_ `Claim # | amount | payer`

```jsonc
// kanban_card["denial_appeal"]
{
  "subtitleFields": [
    "claimLabel",
    "amountFmt",
    "payerName"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "claimLabel",
        "amountFmt",
        "payerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [],
    "next": {
      "label": "View Denial",
      "href": "/ui/denials.html?claimId={entityId}&patientId={patientId}&practiceId={practiceId}&source=kanban"
    },
    "showJourney": false,
    "showDelete": false,
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["denial_appeal"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Denial",
      "rows": [
        {
          "field": "claimLabel",
          "label": "Claim"
        },
        {
          "field": "amountFmt",
          "label": "Amount"
        },
        {
          "field": "payerName",
          "label": "Payer"
        },
        {
          "field": "balance",
          "label": "Balance"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### A/R Follow-Up  
`lane id: ar_follow_up`

**Card face** — subtitleFields: `claimLabel`, `amountFmt`, `payerName` · sep ` | `  
_renders like:_ `Claim # | amount | payer`

```jsonc
// kanban_card["ar_follow_up"]
{
  "subtitleFields": [
    "claimLabel",
    "amountFmt",
    "payerName"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "claimLabel",
        "amountFmt",
        "payerName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [],
    "next": {
      "label": "A/R Follow-Up",
      "href": "/ui/ar-followup.html?claimId={entityId}&patientId={patientId}&practiceId={practiceId}&source=kanban"
    },
    "showJourney": false,
    "showDelete": false,
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["ar_follow_up"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "A/R",
      "rows": [
        {
          "field": "claimLabel",
          "label": "Claim"
        },
        {
          "field": "payerName",
          "label": "Payer"
        },
        {
          "field": "balance",
          "label": "Balance"
        },
        {
          "field": "amountFmt",
          "label": "Amount"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Patient Balance Needed  
`lane id: patient_balance`

**Card face** — subtitleFields: `claimLabel`, `amountFmt`, `payerName` · sep ` | `  
_renders like:_ `Claim # | amount | payer`

```jsonc
// kanban_card["patient_balance"]
{
  "subtitleFields": [
    "claimLabel",
    "amountFmt",
    "payerName"
  ],
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "visitReason",
        "providerName",
        "practiceName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "separator": " | ",
  "actions": {
    "secondary": [],
    "next": {
      "label": "Open Patient Chart",
      "href": "/ui/patient-chart.html?patientId={patientId}&practiceId={practiceId}&source=kanban&focus=balance"
    },
    "showJourney": false,
    "showDelete": false,
    "showEvents": true
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["patient_balance"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Balance",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "balance",
          "label": "Balance"
        },
        {
          "field": "payerName",
          "label": "Payer"
        },
        {
          "field": "phone",
          "label": "Phone"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```

### Blocked / Needs Review  
`lane id: blocked_review`

**Card face** — subtitle template: `{subtitle}`  
_renders like:_ `state | room | note`

```jsonc
// kanban_card["blocked_review"]
{
  "rows": [
    {
      "field": "title",
      "showAssignment": true,
      "type": "title"
    },
    {
      "field": "patientDob",
      "format": "date",
      "label": "DOB",
      "type": "field"
    },
    {
      "type": "subtitle",
      "fields": [
        "visitReason",
        "providerName",
        "practiceName"
      ],
      "separator": " | "
    },
    {
      "type": "chips"
    }
  ],
  "actions": {
    "next": {
      "label": "Open Patient Chart",
      "href": "/ui/patient-chart.html?patientId={patientId}&practiceId={practiceId}&source=kanban"
    }
  }
}
```

**Right panel** — sections: `lead` → `details` → `nextResolution` → `autopilots` → `whyBlocked` → `why` → `move` → `scheduling` → `technical`

```jsonc
// kanban_panel["blocked_review"]
{
  "sections": [
    {
      "type": "lead"
    },
    {
      "type": "details",
      "title": "Work item",
      "rows": [
        {
          "field": "patientName",
          "label": "Patient"
        },
        {
          "field": "ownerRole",
          "label": "Owner role"
        },
        {
          "field": "assignedTo",
          "label": "Assigned to"
        },
        {
          "field": "dueAt",
          "label": "Due"
        }
      ]
    },
    {
      "type": "nextResolution"
    },
    {
      "type": "autopilots"
    },
    {
      "type": "whyBlocked"
    },
    {
      "type": "why"
    },
    {
      "type": "move"
    },
    {
      "type": "scheduling"
    },
    {
      "type": "technical"
    }
  ]
}
```



## Review Epilog — 2026-07-24

- Definitions verified as the canonical copy-from reference for the Bay Area Cardiology practice on build 1943; all lane IDs match the `DEFAULT_LANES` baseline in `kanban-editor.js`.
- All 22 lane entries (card face + right panel) are represented; section type inventory matches the KanbanEditor reference doc.
- The `legacy` card face format (subtitleFields/separator/subtitle) is the current production format for these definitions; the `rows[]` format (documented in KanbanEditor §2.1) is the newer format for newly-authored lanes.
- Live build 1943 / gate 251/251 GREEN; Kanban board is part of the August demo path (CF-14 PASSES).
