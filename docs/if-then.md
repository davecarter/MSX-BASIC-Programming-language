### IF...THEN

Description

Conditional statement that evaluates a logical expression and executes one statement when the condition is true; an optional `ELSE` allows a single alternative statement when false. MSX BASIC typically supports single-line `IF ... THEN ... ELSE` usage.

Syntax

> IF condition THEN statement [ELSE statement]

- `condition` — Boolean expression (comparisons using `=`, `<>`, `<`, `>`, `<=`, `>=`).
- `statement` — A single BASIC statement (can be `PRINT`, `GOTO`, `GOSUB`, etc.).

Example 1 — Single-line IF with ELSE

- Example file: `../examples/IF-THEN/IF-THEN-ELSE.BAS`

```basic
10 REM IF...THEN...ELSE example
20 INPUT "Enter a number: "; A
30 IF A > 0 THEN PRINT "POSITIVE" ELSE PRINT "ZERO OR NEGATIVE"
40 GOTO 20
50 END
```

Explanation

Line 30 evaluates `A > 0`. If true it prints `POSITIVE`; otherwise it prints `ZERO OR NEGATIVE`.

Example 2 — IF THEN GOTO (flow control)

```basic
10 INPUT "Enter 0 to quit: "; N
20 IF N = 0 THEN GOTO 80
30 PRINT "N not zero"
40 GOTO 10
80 PRINT "Goodbye"
90 END
```

Explanation

This example uses `IF ... THEN GOTO` to branch execution to a different line number when a condition is met.

[<< Back](./index.md)
