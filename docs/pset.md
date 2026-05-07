### PSET

Description

`PSET` plots a single pixel at the specified coordinates on a graphic screen. It accepts an optional color and a logical operator (MSX2+). Use `PSET` for fine-grained drawing when building low-level graphics.

Syntax

> PSET [(STEP)(X,Y)], color [, operator]

- `STEP` — Optional prefix to use coordinates relative to current cursor position.
- `X,Y` — Pixel coordinates (ranges depend on `SCREEN` mode; typical MSX1 ranges: X 0..255, Y 0..191).
- `color` — Optional color index. If omitted, the current plot color is used.
- `operator` — Optional logical operator (AND, OR, XOR, PRESET, PSET, and variants prefixed by `T` for transparency) available on MSX2+.

Example 1 — Random dots (simple)

- Example file: `../examples/PSET/PSET-RANDOM.BAS`

```basic
10 REM Draw 500 random colored pixels
20 SCREEN 2: COLOR 15,1,7: CLS
30 FOR I = 1 TO 500
40 X = INT(RND(1) * 256)
50 Y = INT(RND(1) * 192)
60 C = INT(RND(1) * 15) + 1
70 PSET (X,Y), C
80 NEXT I
90 GOTO 90
```

Explanation

This program uses `PSET` to place 500 colored pixels at random coordinates. `SCREEN 2` is a commonly available graphics mode on many MSX systems; adapt `SCREEN` and coordinate ranges if your machine uses a different mode.

Example 2 — Operator demo (MSX2+)

```basic
10 SCREEN 5: COLOR 2,12,4: CLS
20 PSET (110,96), 1, AND
30 PSET (114,96), 1, TAND
40 PSET (118,96), 1, OR
50 PSET (122,96), 1, TOR
60 PSET (126,96), 1, PRESET
70 PSET (130,96), 1, TPSET
80 GOTO 80
```

Explanation

On MSX2+ machines `PSET` supports logical operators to combine new pixel data with existing pixels. The `T` prefix variants treat color 0 as transparent.

[<< Back](./index.md)
