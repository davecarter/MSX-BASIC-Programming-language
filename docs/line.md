### LINE

Description

`LINE` draws straight lines or rectangles on a graphics screen. A `Shape` parameter allows drawing filled rectangles (`BF`) or empty rectangles (`B`). It supports logical operators on MSX2+.

Syntax

> LINE [STEP](X1,Y1)-(STEP)(X2,Y2), color [, shape] [, operator]

- `STEP` — Optional prefix to use coordinates relative to the current cursor position when present.
- `X1,Y1` — Starting coordinate.
- `X2,Y2` — Ending coordinate.
- `color` — Optional color index.
- `shape` — `B` for empty rectangle or `BF` for filled rectangle. When omitted a line is drawn.
- `operator` — Optional logical operator (MSX2+).

Example 1 — Concentric rectangles pattern

- Example file: `../examples/LINE/LINE-PATTERN.BAS`

```basic
10 SCREEN 2: COLOR 15,1,7: CLS
20 FOR I = 0 TO 95 STEP 8
30 LINE (128-I,95-I)-(128+I,95+I),1,B
40 NEXT
50 GOTO 50
```

Explanation

This program draws a sequence of empty rectangles centered on `(128,95)` producing a concentric-frame pattern. `STEP` is not used here; coordinates are absolute.

Example 2 — Filled rectangle

```basic
10 SCREEN 2: COLOR 15,1,7: CLS
20 LINE (10,10)-(100,60), 3, BF
30 GOTO 30
```

Explanation

The `BF` shape parameter draws a filled rectangle between the two coordinates.

[<< Back](./index.md)
