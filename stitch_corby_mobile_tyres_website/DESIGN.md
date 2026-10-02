---
name: Rapid Roadside Hazard Response
colors:
  surface: '#101419'
  surface-dim: '#101419'
  surface-bright: '#36393f'
  surface-container-lowest: '#0a0e13'
  surface-container-low: '#181c21'
  surface-container: '#1c2025'
  surface-container-high: '#262a30'
  surface-container-highest: '#31353b'
  on-surface: '#e0e2ea'
  on-surface-variant: '#cec7aa'
  inverse-surface: '#e0e2ea'
  inverse-on-surface: '#2d3136'
  outline: '#979177'
  outline-variant: '#4b4731'
  surface-tint: '#dec800'
  primary: '#ffffff'
  on-primary: '#373100'
  primary-container: '#fee400'
  on-primary-container: '#716500'
  inverse-primary: '#6a5f00'
  secondary: '#ffb3ad'
  on-secondary: '#68000a'
  secondary-container: '#a40217'
  on-secondary-container: '#ffaea8'
  tertiary: '#ffffff'
  on-tertiary: '#233143'
  tertiary-container: '#d4e4fa'
  on-tertiary-container: '#576679'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#fee400'
  primary-fixed-dim: '#dec800'
  on-primary-fixed: '#201c00'
  on-primary-fixed-variant: '#504700'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ad'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#930013'
  tertiary-fixed: '#d4e4fa'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#101419'
  on-background: '#e0e2ea'
  surface-variant: '#31353b'
typography:
  headline-xl:
    fontFamily: Chivo
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Chivo
    fontSize: 32px
    fontWeight: '900'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Chivo
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Chivo
    fontSize: 26px
    fontWeight: '800'
    lineHeight: 30px
    letterSpacing: 0em
  headline-md:
    fontFamily: Chivo
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Chivo
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 15px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.06em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-mobile: 1rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is engineered for stranded drivers experiencing roadside vehicle emergencies under high stress, low light, and hazardous conditions (e.g., motorway hard shoulders at midnight, unlit rural lanes, severe weather). 

The emotional tone must communicate three immediate principles:
1. **Absolute Reliability & Speed:** The interface projects immediate authority, reassurance, and friction-free rescue deployment within seconds.
2. **Utilitarian Clarity Under Duress:** Zero cognitive clutter. Every actionable element is sized for trembling hands, thumb-first mobile reachability, and high-visibility contrast.
3. **Emergency Hazard Aesthetic:** Taking direct inspiration from tactical rescue services, road maintenance safety fleets, high-visibility jackets, and industrial machinery, the system adopts a high-contrast dark mode aesthetic grounded in dark asphalt and cut through with radiant safety amber and critical emergency beacons.

The visual style blends **High-Contrast Utilitarianism** with **Engineered Tactical Tech**: deep asphalt surfaces, laser-crisp reflective metal outlines, luminescent safety accents, and directional hazard textures that prioritize real-time location dispatch and single-tap roadside relief.

## Colors

The palette balances dark road immersion with intense visual beacons:

- **Primary Canvas & Night Surfaces:**
  - Base Asphalt: `#0B0F14` (Deepest canvas surface, prevents night blindness and conserves device power).
  - Surface Elevation 1 (Tarmac): `#121820` (Card and panel backgrounds).
  - Surface Elevation 2 (Raised Utility): `#1B232E` (Inputs, dialogs, bottom sheets).
  - Surface Elevation 3 (Active Trench): `#24303F` (Pressed states, active module tiles).

- **Safety Hazard Accents (Primary):**
  - High-Vis Yellow: `#FFE500` (Core interactive driver, primary buttons, ETA timer displays, active map pins).
  - Amber Caution: `#FACC15` and `#EAB308` (Status badges, hover states, secondary highlights).
  - Safety Glow Fill: `rgba(255, 229, 0, 0.15)` (Ambient focus rings and high-priority halos).

- **Emergency Alert (Secondary):**
  - Emergency Red: `#EF4444` (Immediate distress, 24/7 SOS dispatch indicators, tyre blow-out warnings).
  - Red Pulse Tint: `rgba(239, 68, 68, 0.18)` (Live flashing SOS status, error states).

- **Reflective Trim & Typography:**
  - High-Beam White: `#FFFFFF` (Headings, primary typography, high-contrast toggle icons).
  - Retroreflective Silver: `#E2E8F0` (Structural dividers, high-contrast borders).
  - Highway Steel: `#94A3B8` (Secondary metadata, inactive labels, tyre specification sub-text).
  - Roadway Muted: `#475569` (Disabled controls, background grid accents).

## Typography

The typographic hierarchy prioritizes rapid scannability and legibility under glare, driving rain, or low-light screens.

- **Headlines (Chivo):** An aggressive, mechanical, direct grotesque font. Used in uppercase or heavy titles to convey authoritative speed, instant dispatch notifications, and urgent response timers.
- **Body Text (Inter):** A neutral, highly engineered workhorse optimized for crystal-clear readability across all pixel densities. Handles roadside instructions, tyre size verification, pricing breakdowns, and service disclaimers.
- **Labels & Tactical Data (Space Grotesk):** Monospaced-leaning geometric sans applied to telemetry, tyre sizing notation (e.g., `225/45 R17 94W`), GPS coordinate data, dispatch status chips, and button callouts. Set in uppercase with wide letter spacing for military-grade data clarity.

## Layout & Spacing

Roadside users are typically holding their phones with one hand outside in the cold or seated behind a steering wheel. Layout ergonomics center exclusively around the **Lower Thumb Zone**:

- **Grid Architecture:** 
  - Mobile: Single-column fluid layout with `margin-mobile` of 1rem and fixed critical touch anchors at the viewport base.
  - Desktop / Tablet Dispatch View: 12-column fluid grid, 1.5rem gutters, max-width bounded at 1280px to preserve data density.
- **Touch Targets:** The absolute minimum interactive touch target is 52px (standard buttons: 60px height) to prevent miss-clicks during urgent calls or high-stress data entry.
- **Bottom-Anchored Action Zone:** The primary CTA ("CALL VAN NOW" or "CONFIRM DISPATCH") stays pinned to the lower viewport edge with safe-area padding, stacked above a persistent emergency contact drawer.

## Elevation & Depth

Visual hierarchy uses **High-Luminance Tonal Layering** combined with **Reflective Edge Lighting**:

- **Ground Level (Base Asphalt):** `#0B0F14` flat backdrop without illumination.
- **Layer 1 (Card & Module Deck):** `#121820` with a 1px solid border in `#24303F` or retroreflective silver `rgba(226, 232, 240, 0.12)`. No soft drop shadows; structure is maintained via stark contrast.
- **Layer 2 (Floating Response Overlays & Bottom Sheets):** `#1B232E` backed with a 1px solid accent of `rgba(255, 229, 0, 0.25)` to clearly isolate interactive panels against dark road background mapping.
- **Hazard Beacon Glow (Elevated Interactive Elements):** Primary action buttons and live emergency markers leverage a safety amber glow: `box-shadow: 0 0 24px rgba(255, 229, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.85)`.
- **SOS Critical State:** Red hazard pulses emit an expanding radial glow: `box-shadow: 0 0 32px rgba(239, 68, 68, 0.45)`.

## Shapes

The interface utilizes a **Soft Industrial Geometry (Level 1)**:

- Subtle 4px (`rounded-sm` / `0.25rem`) to 8px (`rounded-lg` / `0.5rem`) radiuses across buttons, input boxes, and modules.
- Avoids friendly pill-shapes or overly bubbly geometry; corners remain clipped, functional, and reminiscent of vehicular hardware, Jerry cans, and roadside breakdown diagnostics equipment.
- **Hazard Chevron Treatment:** Accent stripes and progress rails feature 45-degree high-vis diagonal warning bands (`repeating-linear-gradient(45deg, #FFE500, #FFE500 12px, #0B0F14 12px, #0B0F14 24px)`) applied to status header borders and ETA tracking indicators.

## Components

### 1. Primary Touch-to-Call & Dispatch Buttons
- **Style:** 60px minimum height, full width on mobile viewports. Solid High-Vis Yellow (`#FFE500`) fill with jet-black (`#0B0F14`) bold Chivo/Space Grotesk typography.
- **Glow & Interaction:** Built-in ambient amber halo (`box-shadow: 0 0 20px rgba(255, 229, 0, 0.35)`). Active click depresses by 1px with instant acoustic/haptic click feedback.
- **Emergency Variant (SOS):** `#EF4444` background with pure `#FFFFFF` typography and continuous CSS pulse effect for direct 999/dispatch emergency dialing.

### 2. Vehicle & Tyre Specification Cards
- **Style:** Background `#121820`, bounded by a 1px reflective silver border (`rgba(226, 232, 240, 0.18)`).
- **Layout:** Segmented layout highlighting tyre width, aspect ratio, rim size, and speed rating in Space Grotesk tabular figures.
- **Status State:** Selected state shifts the 1px border to 2px solid `#FFE500` with subtle yellow background wash (`rgba(255, 229, 0, 0.04)`).

### 3. Hazard Badges & Dispatch Status Chips
- **Style:** Compact industrial badges with uppercase `label-sm` Space Grotesk text. 
- **Variants:**
  - *En Route / Rapid:* `#FFE500` text on `#1B232E` with a 1px border of `#FACC15`.
  - *Emergency Critical:* `#FFFFFF` text on `#EF4444` solid fill.
  - *Standard Service:* `#94A3B8` text on `#121820` with a 1px border of `#475569`.

### 4. Tyre Size Quick-Selector Inputs
- **Style:** Dark utility inputs styled like automotive dashboard instrumentation. Background `#1B232E`, text `#FFFFFF`, border 1px solid `#475569`.
- **Focus:** Focus illuminates the input with a 2px `#FFE500` outline and faint amber field wash. Monospaced character tracking prevents sizing ambiguity.

### 5. Live Van Tracking & ETA Meter
- **Component Anatomy:** Pinned card showing technician distance, vehicle registration plate, and remaining minutes.
- **Accent:** Header features a top 4px hazard chevron stripe (alternating high-vis yellow and dark asphalt). Time remaining is displayed in 36px Chivo headline typography for instant visibility through rain-streaked windshields.

### 6. Emergency List Items
- **Style:** Dividers are rendered in hairline dark slate (`#1E293B`). Each list element features an 18px leading icon encased in a soft square `#1B232E` container with a reflective `#94A3B8` border, accompanied by high-contrast primary text and Chevron navigation indicators.