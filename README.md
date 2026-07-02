# PracticeForceOne — Marketing Website

The public marketing site for **PracticeForceOne™** — the intelligent operating platform for ambulatory clinics and billing services.

> Every patient. Every task. Every claim. One platform.

## Structure

```
PracticeForceOne/
├── index.html          # Home — hero, platform pillars, command center, AI, pricing, FAQ, CTA
├── compare.html        # Competitor comparison, AI deep-dive, pricing & migration paths
├── features.html       # Full feature catalog (12 domains + module detail)
└── assets/
    ├── css/styles.css  # Design system + all components
    ├── js/main.js      # Sticky nav, scroll reveals, count-up stats, FAQ accordion, mobile menu
    └── img/            # PF1 brand logos
```

## Running locally

It's a static site — open `index.html` directly, or serve it:

```bash
# Python
python -m http.server 8080
# then visit http://localhost:8080
```

## Content sources

Copy is drawn from the PracticeForceOne wiki:
- `PracticeForceOne.md`, `PracticeForceOneBrochure.md` — platform pillars & value prop
- `PracticeForceOneCompetitorComparison.md` — comparison matrix, pricing, migration
- `PracticeForceOneFullFeatures.md` — full feature catalog

## Notes

- Pricing figures are illustrative marketing starting points (see the wiki flag reconciling
  the `$499/mo` matrix figure vs. the `$1,499` base). Confirm final numbers before publishing.
- Contact address `demo@practiceforceone.com` and phone `(800) 555-0199` are placeholders.
- Design is fully responsive and dependency-free (only Google Fonts loaded remotely).

Healthcare Technology. Powering Better Care.
