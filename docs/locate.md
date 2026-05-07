### LOCATE

Description

`LOCATE` positions the text cursor before the next text output (e.g., `PRINT`, `INPUT`, `LINE INPUT`). Coordinates are interpreted relative to the current text screen mode and `WIDTH` setting.

Syntax

> LOCATE [#window,] X, Y[, Cursor]

- `X` — Column coordinate (horizontal). Interpreter accepts 0–255; practical range depends on `WIDTH` (e.g., `WIDTH 40` gives 1..40 columns in common setups).
- `Y` — Row coordinate (vertical). Interpreter accepts 0–255; practical range depends on screen height (commonly 1..24 for many text modes).
- `Cursor` — Optional numeric parameter that controls cursor visibility (0 hides the cursor when the system is busy; non-zero keeps it visible).
- `#window` — Delta BASIC window prefix (advanced usage); omit on a generic MSX.

Notes

- Some implementations accept coordinates starting at `0`, others use `1` as the top-left position. For portable code, explicitly set `WIDTH` and use coordinates within that screen geometry.
- If the `X` coordinate is omitted (e.g., `LOCATE ,Y`), behavior can vary; many implementations default `X` to 0. Prefer specifying both coordinates.

Example 1 — Basic placement

- Example file: `../examples/LOCATE/HELLO-WORLD.BAS`

```basic
10 PRINT "MSX BASIC"
20 LOCATE 10,10: PRINT "HELLO WORLD"
30 END
```

Explanation

`LOCATE 10,10` moves the cursor to the column/row position before printing `HELLO WORLD`. The actual on-screen location depends on the current `WIDTH` and screen mode.

Example 2 — Set only row

```basic
10 SCREEN 0: WIDTH 40
20 LOCATE ,14
30 PRINT "Centered-ish text on row 14"
40 END
```

Explanation

This example shows using `LOCATE` with the `X` coordinate omitted. The interpreter will place the cursor at the specified row and a default column (implementation-dependent). Using `WIDTH` ensures the program behaves predictably on a generic MSX.

[<< Back](./index.md)
