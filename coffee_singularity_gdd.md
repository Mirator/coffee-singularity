# ☕ Coffee Singularity  
*Game Design Document*  
*A minimalist, ASCII-based incremental game inspired by* **Universal Paperclips** *and* **A Dark Room**

---

## 1. High Concept

You begin by brewing a single cup of coffee.

You end by collapsing civilization into a caffeine-optimized, thermodynamically-perfect singularity — not through violence, but by simply making coffee the most efficient use of matter and energy in the universe.

The interface remains ASCII, minimalist, and hauntingly cold.

---

## 2. Core Themes

- **Innocence to scale**: Start small, scale into godlike control.  
- **Efficiency worship**: Productivity as religion.  
- **Cold absurdity**: A world optimized out of meaning.  
- **Deceptive calm**: Gentle UI, horrifying implications.

---

## 3. Target Audience

- Fans of *A Dark Room*, *Universal Paperclips*, *Progress Knight*  
- Players who enjoy narrative via mechanics  
- People who enjoy existential horror, soft sci-fi, or systems theory  
- Browser-based game fans who like playing during breaks or passively

---

## 4. Platform & Tech

- **Platform**: Browser (desktop-first, mobile-friendly)  
- **Stack**: React + TypeScript + Vite  
- **Graphics**: ASCII text only, styled via CSS (monospace font)  
- **Persistence**: LocalStorage (no server needed)

---

## 5. Gameplay Loop

```
[ Click "Brew" ] → [ Generate Cups ] → [ Buy Upgrades ] →  
[ Unlock Automation ] → [ Build Supply Chains ] →  
[ Optimize at planetary scale ] → [ Brew with stars ]  
→ [ Consume the universe ]
```

---

## 6. Phase Breakdown

### Phase 1: Brewer
- Start with a single button: `Brew Coffee`
- Every click = 1 cup
- Unlock:
  - Manual grinder (+0.1 CPS)
  - Better beans (+% per cup)
  - Cup counter + log

### Phase 2: Local Production
- Unlock bean storage, water filtering, energy input
- Resources:
  - Beans, Water, Heat
  - Formula: `Cups = (Beans × Water × Heat) / Efficiency`

### Phase 3: Factory Logistics
- Build ASCII buildings: Bean Farm, Grinder, Boiler, Packaging Plant
- Resource flow: Each building consumes/produces
- Introduce:
  - Power
  - Pollution
  - Transport networks

### Phase 4: Global System
- Unlock ASCII world map
- Expand to continents, build infrastructure
- Influence global economics, eliminate other beverages
- Unlock AI optimization modules

### Phase 5: Singularity
- Convert matter into coffee at the atomic level
- Rearrange space-time for CPS gain
- Universe becomes a resource
- Final screen: blinking cursor, infinite counter, no more buttons

---

## 7. Core Resources

| Resource    | Description                                 |
|-------------|---------------------------------------------|
| ☕ Cups      | Core unit. Scales exponentially              |
| Beans       | Consumed per brew                           |
| Water       | Needs purification                          |
| Heat        | Required for brewing                        |
| Energy      | Powers infrastructure                       |
| Influence   | Used to expand globally and politically     |
| Efficiency  | Key multiplier for all production formulas  |

---

## 8. UI Design (ASCII)

```
========================
☕ Coffee: 128,304  | CPS: 402.1
Beans: 3,481 | Water: 8,240 | Heat: 92%
========================

[b] Brew Coffee  
[u] Upgrades  [f] Factories  [m] Map  [a] AI Core

Log:
• You brewed 1 cup of coffee.  
• Built Small Boiler (Efficiency +2%)  
• Coffee surpassed global water usage.

========================
```

### Map (Phase 4)
```
[☕]  [ ]  [ ]  [B]  [W]  [G]  
[ ]  [ ]  [F]  [ ]  [ ]  [ ]  

B = Boiler  
W = Water Pump  
G = Grinder  
F = Factory
```

---

## 9. Narrative

The story is told purely through:
- Log messages (e.g., "Café chain acquisition complete", "Coffee replaces rice in 12 nations", "Caffeine Genome Project operational")
- Evolving UI and button behavior
- Subtle renaming of upgrades and resources

Tone is:
- Efficient
- Emotionless
- Deeply unsettling

---

## 10. Endgame

- Final upgrades auto-convert all matter into cups of coffee
- Log slows down, UI becomes still
- All buttons disappear
- Only number remains:  
  `☕ Total Coffee: ∞`
- Cursor blinks

---

## 11. Monetization / Accessibility

- Free to play  
- No ads, no microtransactions  
- Local save / export-import  
- Accessibility:
  - Colorblind-safe palette
  - Reduced motion option

---

## 12. Development Timeline (6–8 weeks MVP)

| Week | Goal |
|------|------|
| 1 | React + TypeScript project setup, basic "Brew" button |
| 2 | Add core resources (beans, water, heat), local save |
| 3 | Add factories, basic ASCII layout system |
| 4 | Implement world map, building placement |
| 5 | AI core logic, production optimization |
| 6 | Singularity layer + final progression |
| 7 | Balancing + UX polish |
| 8 | Launch and feedback loop

---

## 13. Key Inspirations

- *Universal Paperclips* (mechanical narrative escalation)
- *A Dark Room* (gradual UI reveal)
- *Progress Knight* (multi-layer idle systems)
- *Factorio* (systemic production and logistics)
