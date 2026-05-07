### SCREEN

Description

`SCREEN` selects the display mode and several display-related parameters (sprite size, key click, cassette baud, printer type, interlace) used by the BASIC interpreter. Changing `SCREEN` also affects available drawing primitives and color capabilities.

Syntax

> SCREEN displayMode[, spriteSize[, keyclick[, baudRate[, printerType[, interlace]]]]]

- `displayMode` — Numeric screen mode (0..13). Common values: `0` (text), `1` (text 8x8), `2` (graphics on many MSX1 machines). Mode availability depends on MSX generation.
- `spriteSize` — Sprite magnification/size (0..3).
- `keyclick` — Keyboard click enable (0/1).
- `baudRate` — Cassette write speed (1=1200, 2=2400).
- `printerType` — Printer type parameter (machine-dependent).
- `interlace` — Interlace mode parameter (MSX2+ only).

Example 1 — Switch to a simple graphics screen and draw shapes

- Example file: `../examples/SCREEN/SCREEN-SWITCH.BAS`

```basic
10 REM Switch to graphics, draw and return to text
20 SCREEN 0: PRINT "Press any key to switch to GRAPHICS"
30 A$ = INKEY$
40 IF A$ = "" THEN 30
50 SCREEN 2: COLOR 15,1,7: CLS
60 LINE (10,10)-(200,100),2
70 CIRCLE (127,95),50,3
80 OPEN "GRP:" FOR OUTPUT AS #1
90 PRINT #1, "You are in GRAPHICS mode - press any key"
100 A$ = INKEY$
110 IF A$ = "" THEN 100
120 CLOSE #1
130 SCREEN 0: CLS
140 PRINT "Back to text mode"
150 END
```

Explanation

This program waits in text mode, switches to `SCREEN 2` (a common graphics mode), sets colors and draws a line and a circle. It uses `OPEN "GRP:" FOR OUTPUT` to print a short message in the graphics page and waits for a key before restoring `SCREEN 0`.

Example 2 — Specify additional parameters (MSX2+ compatible)

```basic
10 SCREEN 2,3,0,,,1  ' SCREEN mode 2, spritesize 3, keyclick off, interlace on (MSX2+)
20 REM Additional parameters are optional and machine dependent
30 END
```

Explanation

The second example demonstrates passing optional `SCREEN` parameters. Not all MSX systems support every parameter — consult the machine reference if an argument triggers a syntax error.

[<< Back](./index.md)
