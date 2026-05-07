### INT

Description

`INT` returns the integer part of a numeric expression. It truncates toward negative infinity (i.e., `INT(-3.9)` yields `-4`). Use `INT` when you need whole-number results from real-valued expressions.

Syntax

> INT(number)

- `number` — Numeric expression whose integer part is required.

Example 1 — Basic usage

```basic
10 PRINT INT(5.7)
20 PRINT INT(-3.9)
30 END
```

Explanation

The program prints `5` for `INT(5.7)` and `-4` for `INT(-3.9)` because `INT` returns the greatest integer less than or equal to the argument.

Example 2 — Using INT in a loop

- Example file: `../examples/INT/LOOPED-INT.BAS`

```basic
10 FOR I = 1 TO 10
20 PRINT "INT("; I / 2; ") = "; INT(I / 2)
30 NEXT I
40 END
```

Explanation

This loop prints the integer part of the values `0.5, 1.0, 1.5, ...` (i.e., `I/2`) for `I = 1..10`, demonstrating how `INT` behaves on a sequence of real values.

[<< Back](./index.md)
