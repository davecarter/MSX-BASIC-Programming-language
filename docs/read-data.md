### READ / DATA

Description

`DATA` defines a sequence of literal values embedded in the program source. `READ` retrieves the next value(s) from the `DATA` list and assigns them to variables. `RESTORE` resets the `READ` pointer to the start of the `DATA` (or to a specified line number), allowing the same data to be read again.

Syntax

> READ var1[, var2, ...]
> DATA value1[, value2, ...]
> RESTORE [line_number]

- `var1, var2, ...` — Variables that receive values from the next `DATA` fields, read sequentially.
- `value1, ...` — Comma-separated literal values in the `DATA` statement.
- `RESTORE` — Resets the internal pointer used by `READ`. If `line_number` is specified, the pointer is set to the `DATA` statement at that line.

Example 1 — Initialize an array from DATA

- Example file: `../examples/READ-DATA/USERS-LIST.BAS`

```basic
10 DIM A(5)
20 FOR I = 1 TO 5
30 READ A(I)
40 NEXT I
50 FOR I = 1 TO 5
60 PRINT "A("; I; ") = "; A(I)
70 NEXT I
80 DATA 10, 20, 30, 40, 50
90 END
```

Explanation

The program declares `A(5)` and reads five values from the `DATA` line into the array. The second loop prints the values stored in the array. `DATA` fields are read sequentially by `READ`.

Example 2 — Using RESTORE to reread DATA

- Example file: `../examples/READ-DATA/RESTORE.BAS`

```basic
10 READ A, B, C
20 RESTORE
30 READ D, E, F
40 PRINT A; B; C
50 PRINT D; E; F
60 END
70 DATA 10, 20, 30
```

Explanation

- Lines 10 and 30 each `READ` three values from the single `DATA` line at 70.
- `RESTORE` (line 20) resets the `READ` pointer so the second `READ` reads the same values again into `D`, `E`, `F`.

Notes

- `DATA` fields are not variables and are not counted as program lines; they are literal constants embedded in the program source.
- Use `RESTORE line_number` to target a specific `DATA` statement when multiple `DATA` lines are present.

[<< Back](./index.md)
