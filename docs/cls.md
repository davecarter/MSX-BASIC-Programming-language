### CLS

Description

`CLS` clears the current screen and resets the text cursor position to the top-left (implementation-dependent coordinates). It does not clear program variables.

Syntax

> CLS

Example

- Example file: `../examples/CLS/CLS-COLOR.BAS`

```basic
10 CLS
20 COLOR 7,0,1
30 PRINT "Screen cleared and colors set"
40 END
```

Explanation

`CLS` wipes the text/graphics display region; follow with `COLOR` and `PRINT` to update the screen contents.

[<< Back](./index.md)
