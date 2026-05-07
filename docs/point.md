### POINT

Description

`POINT` returns the color index of a specified pixel in a graphic screen. It is useful to inspect pixels when implementing collision detection, color-based logic, or to verify drawing operations.

Syntax

> POINT [(STEP)(X,Y)]

- `STEP` — Optional prefix to use coordinates relative to current cursor position.
- `X,Y` — Pixel coordinates (typical ranges depend on `SCREEN` mode; e.g., X 0..255, Y 0..191).
- Returns an integer color index.

Example 1 — Plot points and read their colors

- Example file: `../examples/POINT/POINT-DEMO.BAS`

```basic
10 REM Plot points then sample their color with POINT
20 SCREEN 2: COLOR 15,1,7: CLS
30 PSET (80,60), 5
40 PSET (100,60), 6
50 A = POINT(80,60)
60 B = POINT(100,60)
70 SCREEN 0
80 PRINT "POINT(80,60) ="; A
90 PRINT "POINT(100,60) ="; B
100 END
```

Explanation

The program draws two colored pixels on `SCREEN 2` and reads their color values using `POINT`. It then switches back to text mode and prints the sampled color indices.

[<< Back](./index.md)
