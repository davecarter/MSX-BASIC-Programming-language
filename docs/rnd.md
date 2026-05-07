### RND

Description

`RND` returns pseudo-random numbers. It is commonly used to generate floating values in the range [0,1) and to build random integers by combining `RND` with `INT` and arithmetic.

Syntax

> RND(type)

- `type` — Numeric argument that controls the generator behavior:
  - `0` — Produce a reproducible sequence (same sequence every run).
  - `1` — Generate a new pseudo-random value between 0 and 1.
  - `-1` — Reseed the generator using the system clock (useful for non-reproducible runs).

Example 1 — Single random value

```basic
10 PRINT RND(1)
20 END
```

Explanation

Prints a single floating pseudo-random number in the range 0..1 (implementation-dependent precision).

Example 2 — Random integers in range 1..10

```basic
10 FOR I = 1 TO 10
20 PRINT INT(RND(1) * 10) + 1
30 NEXT I
40 END
```

Explanation

`INT(RND(1) * 10) + 1` maps the floating result of `RND(1)` into the integer range 1..10. Use `RND(0)` if you need the same sequence for testing, or `RND(-1)` to reseed from the clock for varied runs.

Notes

- `RND` returns pseudo-random values; for reproducible behavior use `RND(0)` at the start of the program.
- The exact distribution and period depend on the MSX BASIC implementation.

[<< Back](./index.md)
