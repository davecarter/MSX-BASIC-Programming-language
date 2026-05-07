### PRESET

Description

`PRESET` writes a pixel using the current background color (or a supplied color) on a graphic screen. When used without a color parameter it often clears or removes a pixel (sets it to background color); when a color is supplied it behaves like `PSET`.

Syntax

> PRESET [(STEP)(X,Y)], color [, operator]

- `STEP` — Optional relative coordinates prefix.
- `X,Y` — Pixel coordinates.
- `color` — Optional color index (omitting it uses the background color).
- `operator` — Optional logical operator (MSX2+).

Example — Random presets after drawing a shape

- Example file: `../examples/PRESET/PRESET-RANDOM.BAS`

```basic
10 REM PRESET example: draw lines then random presets
20 SCREEN 2: COLOR 15,1,7: CLS
30 LINE (20,20)-(200,120), 3, B
40 FOR I=1 TO 200
50 X = INT(RND(1) * 180) + 20
60 Y = INT(RND(1) * 100) + 20
70 PRESET (X,Y)
80 NEXT I
90 GOTO 90
```

Explanation

This example draws an outlined rectangle then plots random `PRESET` points that use the background color by default (effectively erasing or toggling pixels depending on operator and mode). On MSX2+ you can supply logical operators to control how the pixel is combined with existing data.

[<< Back](./index.md)
