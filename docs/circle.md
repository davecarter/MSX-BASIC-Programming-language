### CIRCLE

Description

`CIRCLE` draws a circle, arc, or ellipse on a graphics screen. It supports radius, optional tracing angles to draw arcs, and an aspect ratio parameter to stretch horizontally or vertically.

Syntax

> CIRCLE [STEP](X,Y), radius [, color [, tracingStart [, tracingEnd [, aspect]]]]

- `X,Y` — Center coordinates.
- `radius` — Radius of the main axis.
- `color` — Optional color index.
- `tracingStart`, `tracingEnd` — Angles in radians (0..2π) to draw partial arcs.
- `aspect` — Aspect ratio for ellipse drawing.

Example — multiple concentric circles/ellipses

- Example file: `../examples/CIRCLE/CIRCLE-DEMO.BAS`

```basic
10 SCREEN 2: COLOR 15,1,7: CLS
20 FOR R = 10 TO 80 STEP 10
30 CIRCLE (127,95), R, INT(R/10) + 1
40 NEXT R
50 GOTO 50
```

Explanation

This program draws several circles of increasing radius centered at `(127,95)` using different colors. The `aspect` parameter is omitted; on some machines (PAL vs NTSC) the same radius may appear slightly stretched.

[<< Back](./index.md)
