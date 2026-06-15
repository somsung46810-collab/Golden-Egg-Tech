# Golden Egg Tech

A GitHub-ready domain and directive package for **Golden Egg Tech**: a safe rendering, bit-field packing, and variant-resolution sandbox inspired by the Golden Egg initialization diagrams.

## Domain

**Golden Egg Tech** defines an egg artifact as a compact renderable domain object:

- `radius`: geometric egg shell scale
- `color`: packed RGB gold material vector
- `shineLevel`: matte, polished, or shiny render variant
- `variant`: resolved conditionally from packed flags
- `timeVector`: point-in-time vector used to assimilate animation state

## Directive

The main directive is:

```txt
GOLDEN_EGG_DIRECTIVE = INIT -> PACK_BITS -> RESOLVE_VARIANT -> ASSIMILATE_VECTOR -> RENDER_SAFE
```

It keeps the render path deterministic, debug-friendly, and safe for local browser execution.

## Run

```bash
npm install
npm run start
```

Then open the printed local URL.

## Test

```bash
npm test
```

## Commit

```bash
git add .
git commit -m "Initialize Golden Egg Tech domain directive"
git push
```
