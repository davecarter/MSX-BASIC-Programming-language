### PAINT

Description

`PAINT` fills an enclosed area on a graphics screen with a specified color. It operates like a flood-fill: specify a starting pixel coordinate and a fill color; optionally provide a border color to limit the fill.

Syntax

> PAINT [(STEP)(X,Y)], fillingColor [, borderColor]

- `X,Y` — Starting coordinate for the flood fill.
- `fillingColor` — Color to fill with (optional; defaults to current foreground color).
- `borderColor` — Optional color that defines the region boundary.

Example — Fill a circle and a rectangle

- Example file: `../examples/PAINT/PAINT-DEMO.BAS`

```basic
10 COLOR 15,4,7: SCREEN 2: CLS
20 CIRCLE (80,80), 30, 8
30 PAINT (80,80), 8
40 LINE (170,20)-(220,80),2,B
50 PAINT (180,40), 2, 2
60 GOTO 60
```

Explanation

The program draws a circle and then fills its interior using `PAINT`. It also draws an empty rectangle and fills it specifying a filling color and border color. If the border is not continuous the fill may spill; specify the `borderColor` to avoid unintended behavior.

[<< Back](./index.md)
