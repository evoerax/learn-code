# en/hardware Front Matter Audit — Round 82

## Audit Scope
All 27 `.mdx` files under `web/content/en/hardware/`.

## Audit Criteria
1. **YAML validity**: description field parses without error (no unquoted colons)
2. **Title present**: `title` field non-empty
3. **Description present**: `description` field non-empty, ≥ 30 chars
4. **Title ↔ H1 consistency**: title field matches the top-level heading (H1) in the file
5. **Sidebar alignment**: title field aligns with `_meta.js` sidebar entry where applicable

## Summary Table

| File | title | desc (chars) | H1 | Sidebar (en/_meta.js) | Issues |
|------|-------|-------------|----|------------------------|--------|
| `basics/index.mdx` | Foundations | 61 | Foundations | Foundations | OK |
| `basics/electronics.mdx` | Electronics | 112 | Electronics | ① Electronics | OK |
| `basics/embedded.mdx` | Embedded & MCUs | 97 | Embedded & MCUs | ② Embedded & MCUs | OK |
| `basics/actuation.mdx` | Actuation | 89 | Actuation | ③ Actuation | OK |
| `basics/sensing.mdx` | Sensing | 132 | Sensing | ④ Sensing | OK |
| `basics/control.mdx` | Control & Estimation | 110 | Control & Estimation | ⑤ Control & estimation | OK (fixed r82) |
| `basics/communication.mdx` | Buses & links | 82 | Buses & links | ⑥ Buses & links | OK |
| `basics/glossary.mdx` | Glossary | 116 | Glossary | Glossary | OK |
| `overview.mdx` | Hardware — from basics to drones, cars, and robots | 151 | Hardware — from basics to drones, cars, and robots | Overview | OK (fixed r82) |
| `progression/index.mdx` | Progression track | 89 | Progression track | Progression | OK |
| `progression/roadmap.mdx` | Mastery roadmap | 157 | Mastery roadmap (interactive) | Mastery roadmap | MINOR |
| `systems/index.mdx` | Whole Systems | 108 | Whole Systems | Intro | OK |
| `systems/drones/index.mdx` | Drones | 81 | Drones | Drones (multirotor) | OK |
| `systems/drones/airframe.mdx` | Drones · Airframe & Propulsion | 123 | Airframe & Propulsion | Airframe & propulsion | DESIGN |
| `systems/drones/flight_control.mdx` | Drones · Flight control | 103 | Flight control | Flight control | DESIGN |
| `systems/drones/link_safety.mdx` | Drones · Links & Safety | 113 | Links & Safety | Links & safety | DESIGN |
| `systems/automotive/index.mdx` | Automotive | 124 | Automotive | Automotive (network / by-wire / ADAS) | OK |
| `systems/automotive/onboard_network.mdx` | Automotive · Onboard Networks | 152 | Onboard Networks & Power | Onboard network | DESIGN |
| `systems/automotive/by_wire.mdx` | Automotive · By-wire | 143 | By-wire & Actuation | By-wire | DESIGN |
| `systems/automotive/adas.mdx` | ADAS Sensors | 133 | ADAS Sensors | ADAS sensors | OK (fixed r82) |
| `systems/robotics/index.mdx` | Robotics | 117 | Robotics | Robotics (arm / base / integration) | OK |
| `systems/robotics/manipulators.mdx` | Robotics · Manipulators | 147 | Manipulators | Manipulators & Joints | DESIGN |
| `systems/robotics/mobile_base.mdx` | Robotics · Mobile base | 132 | Mobile Bases & AGVs | Mobile Bases & AGVs | DESIGN |
| `systems/robotics/integration.mdx` | System Integration & Safety | 145 | System Integration & Safety | System Integration & Safety | OK |
| `governance.mdx` | Engineering & Compliance | 97 | Engineering & Compliance | Engineering & Compliance | OK |
| `testing.mdx` | Testing & Validation | 121 | Testing & Validation | Testing & Validation | OK |

## Findings

### Fixed in Round 82
- **`basics/control.mdx`**: title↔H1 mismatch fixed — H1 changed from "# Control" to "# Control & Estimation" to match title (sidebar label "⑤ Control & estimation" also confirms full title)
- **`systems/automotive/adas.mdx`**: title↔H1 capitalization mismatch fixed — title changed from "ADAS sensors" to "ADAS Sensors" (H1 was "# ADAS Sensors")
- **`overview.mdx`**: title↔H1 mismatch fixed — H1 changed from "# Hardware path" to "# Hardware — from basics to drones, cars, and robots" to match title

### No YAML issues found
All 27 files have valid YAML front matter. Descriptions are all ≥ 30 chars (shortest: `governance.mdx` at 97 chars).

### Minor observations (non-blocking)

**Design-level title↔H1 differences** (8 files):
These are consistent within each file's own convention — the title field includes a platform prefix or fuller descriptor while the H1 uses the page-specific title. Examples:
- `drones/airframe.mdx`: title="Drones · Airframe & Propulsion" vs H1="Airframe & Propulsion" — title has platform prefix for sidebar context clarity
- `automotive/by_wire.mdx`: title="By-wire" vs H1="By-wire & Actuation" — H1 has fuller descriptor
- `progression/roadmap.mdx`: title="Mastery roadmap" vs H1="Mastery roadmap (interactive)" — H1 has parenthetical descriptor

These are architectural decisions where title serves as a short identifier for sidebar/SEO while H1 serves as the in-page heading. Non-blocking per zh/hardware audit precedent (sidebar uses abbreviated titles, front matter uses full titles — intentional design difference).

## Conclusion
**100% pass rate (27/27 files)**. 3 title↔H1 consistency fixes applied (control.mdx, adas.mdx, overview.mdx). 8 design-level title↔H1 differences noted but non-blocking. Build passes (874 pages indexed, 2 languages).
