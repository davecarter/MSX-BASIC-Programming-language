## LOCATE

`LOCATE` sets the cursor position for the next PRINT on the text screen. Coordinates depend on screen mode and width settings; common defaults below assume SCREEN 0 (text) with WIDTH 40.

#### Syntax
>LOCATE row, column

- row: vertical position (usually 1..24 in text modes)
- column: horizontal position (1..40 when WIDTH 40)

#### Example
```basic
10 PRINT "MSX BASIC"
20 LOCATE 10,10: PRINT "HELLO WORLD"
30 END
```
This moves the cursor to row 10, column 10 before printing.

#### Notes
- Coordinate ranges depend on SCREEN mode and WIDTH; check your current mode if output appears off-screen.
- Most MSX text screens use 1-based coordinates (row/column start at 1).
- When mixing GRAPHICS and TEXT modes, cursor behavior may change.

[<< Back](./index.md)