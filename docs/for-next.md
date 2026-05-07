### FOR / NEXT

Description

`FOR ... NEXT` is a loop structure that repeats a block of statements a fixed number of times. A counter variable advances automatically from a start value to an end value optionally using a step increment.

Syntax

> FOR variable = start TO end [STEP increment]
>     statements
> NEXT [variable]

- `variable` — Loop counter variable.
- `start` — Initial value for the counter.
- `end` — Final value for the counter; loop stops when the counter passes this value.
- `STEP` (optional) — Signed increment applied each iteration. Default is `1`.

Example program

- Example file: `../examples/FOR-NEXT/LOOP.BAS`

```basic
10 FOR I = 1 TO 50
20 PRINT I
30 NEXT I
40 END
```

Explanation

This example prints the numbers from 1 to 50. The loop executes the `PRINT` statement 50 times; the counter `I` is incremented automatically by 1 each iteration. To change the increment use `STEP`, e.g. `FOR I = 1 TO 50 STEP 2`.

[<< Back](./index.md)
