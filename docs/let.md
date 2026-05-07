### LET

Description

`LET` assigns a value to a variable. The keyword `LET` is optional — bare `variable = expression` is equivalent.

Syntax

> LET variable = expression

- `variable` — Numeric or string variable (string names end with `$`).
- `expression` — Numeric or string expression compatible with the variable type.

Example

- Example file: `../examples/LET/ASSIGNMENT.BAS`

```basic
10 REM LET optional assignment example
20 LET A = 10
30 B = A + 5
40 PRINT "A ="; A; " B ="; B
50 END
```

Explanation

Line 20 explicitly uses `LET` while line 30 assigns a value without `LET`. Both are functionally identical.

[<< Back](./index.md)
