# FIFA World Cup Commercial Health Observatory

## Project Overview

A self-contained interactive dashboard tracking the commercial health impact of FIFA World Cup sponsorship from 2006 to 2026. Built as a single `index.html` file with all data embedded as JavaScript literals.

**Live URL:** https://jkinross-code.github.io/fifa-observatory/
**GitHub repo:** https://github.com/jkinross-code/fifa-observatory
**Primary author:** Dr James Kinross PhD FRCS

## Purpose

To document, quantify, and visualise the health consequences of FIFA's commercial sponsorship strategy — including HFSS food, alcohol, gambling, fossil fuel, and cryptocurrency partners — and the longitudinal health impact on host countries from 2006 to 2026.

## Core Architecture

Single file: `index.html` (~5000 lines)
- All data embedded as a `DATA` object in JavaScript
- Chart.js 4.4.0 for all visualisations
- No server-side dependencies
- No build step required

## Key Data Structures

- `DATA.companies` — all ~117 sponsor entries across 6 tournaments with health flags (hfss, alc, fossil, gamble), CSH scores, tier, fee, website
- `DATA.umi` — Unhealthy Marketing Index records (confirmed Tier A: Alfayad 2022 UK 2018; others Tier D modelled)
- `DATA.longitudinalHealth` — per-country time series for 14 health metrics (DE, ZA, BR, RU, QA, US, MX, CA)
- `DATA.healthTrends` — global health trends 1990–2023
- `DATA.hostCountries` — host country health profiles
- `DATA.correlations` — evidence table with causal estimates
- `DATA.coverage_log` — data provenance audit trail

## Scoring Methodology

### CSH Score (Commercial Sponsorship & Health)
Range: −100 (maximum harm) to +100 (maximum benefit)
`CSH = −[(PHW × RI × AC × RG) + (NR × 0.3)] + [(PE × 0.2) + (ETH × 0.15)]`

Harm weights (PHW): Alcohol=1.0, Gambling=0.9, HFSS food=0.8, Sugary drinks=0.7, Fossil fuel=0.6

### UMI (Unhealthy Marketing Index)
`log10(total_impressions + 1) × harm_weight × (completeness/100)`
Harm weights: Alcohol=1.5, Gambling=1.0, HFSS=0.8, Sugary drink=0.7, Fossil=0.6, Crypto=0.9, Tech=0.5
Child UMI applies ×1.5 vulnerability multiplier.

## Evidence Standards

- **Tier A:** Peer-reviewed impression data (only Alfayad et al. BMC Public Health 2022, UK 2018, 13 matches)
- **Tier D:** Modelled estimates scaled from Tier A anchor using FIFA revenue index
- Revenue index: 2006=0.43, 2010=0.61, 2014=0.82, 2018=1.00, 2022=1.09, 2026=1.63
- Never conflate Tier A confirmed data with Tier D modelled estimates in outputs

## Deploying Updates

After editing `index.html`:
```bash
cd "/Users/jkinross/Library/Mobile Documents/com~apple~CloudDocs/Claude project/FIFA project"
git add index.html
git commit -m "Update: description of change"
git push
```
GitHub Pages rebuilds automatically within ~60 seconds.

## Critical Constraints

- Do NOT use the word "dysbiosis" (microbiome project rule that carries over)
- All UMI estimates outside UK 2018 are Tier D — always label them as modelled lower-bound estimates
- CSH scores are a research instrument, not a validated clinical tool — hedging language required in any publication
- The `makeBarChart()` helper supports `xTitle` and `yTitle` opts — always add axis labels to new charts
- Maximum caution with causal language — McGrane 2026 (gambling) is the only near-experimental estimate in the dataset

## Key Literature (anchor references)

- Alfayad et al. BMC Public Health 2022 (PMC9078020) — UK 2018 HFSS/alcohol broadcast impressions [Tier A anchor]
- McGrane et al. Addictive Behaviors Reports 2026 (PMC12854864) — gambling IRR 1.16–1.24 [best causal estimate]
- PAHO 2019 — alcohol sales +9.9% during Qatar 2022
- Shomuyiwa 2023 — no consistent physical activity legacy from hosting
- Liu & Bai Finance Research Letters 2026 — sponsor stock returns β=0.095

## PDF Evidence Corpus

Located at: `/Users/jkinross/Library/Mobile Documents/com~apple~CloudDocs/Claude project/FIFA project/FIFA health data/`
Extracted metadata: `fifa_health_data_extraction.json` (34 papers catalogued)

## Current Gaps / Future Work

- Social media impression data (Meta Ad Library, TikTok Ads Library) not yet ingested
- UK 2022 broadcast impression data not yet available (target: Tier A equivalent to Alfayad)
- US host-city specific advertising data for 2026 not yet available
- CSH ethics component (ETH) currently 0 for all companies pending ESG database integration
- Influencer partnership data layer not yet built
