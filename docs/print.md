### PRINT

Description

`PRINT` outputs text and numeric expressions to the current output device (screen by default) or to an open file. The shorthand symbol `?` can be used in place of `PRINT`.

Syntax

> PRINT [#file,] [USING format;] item1[, item2; ...]

- `item` — String literal, expression, variable, or function result.
- Items separated by `;` are concatenated without an automatic line break.
- Items separated by `,` are separated by tab spacing.
- `#file` — Optional file number (0–15) opened with `OPEN` to redirect output.

Example 1 — Basic text and numeric output

- Example file: `../examples/PRINT/PRINT-BASIC.BAS`

```basic
10 REM Basic PRINT usage
20 PRINT "HELLO, WORLD"
30 PRINT "SUM ="; 2 + 3
40 PRINT "A"; "B"; "C"
50 PRINT "COL1", "COL2"
60 ? "SHORTHAND PRINT"
70 END
```

Explanation

- Line 20 prints a string followed by a line break.
- Line 30 prints a label and an expression concatenated (no extra space) because of `;`.
- Line 40 prints three strings concatenated without additional spacing.
- Line 50 uses `,` to separate items — the interpreter emits a tab/spaced column separation.
- Line 60 uses `?` as shorthand for `PRINT`.

Example 2 — Empty item to produce blank lines

```basic
10 PRINT "One"
20 PRINT
30 PRINT "Three"
40 END
```

Explanation

A standalone `PRINT` emits a blank line. Use it to create vertical spacing in output.

[<< Back](./index.md)
