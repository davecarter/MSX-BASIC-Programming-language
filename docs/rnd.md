### RND
The `RND` function generates pseudo-random numbers in MSX BASIC. Use it with different arguments to control seeding behavior.

#### Syntax
>RND(type)

- type = 0 : Repeat the same sequence (fixed seed).
- type = 1 : Generate a new random number between 0 and 1 using the current seed.
- type = -1: Reseed the generator using the system clock (use once at program start for different sequences each run).

#### Examples
Reseed the generator and get a number between 0 and 1:
```basic
10 N = RND(-1)
20 PRINT N
30 END
```
Random integer between 1 and 10:
```basic
10 RANDOM = INT(RND(1) * 10) + 1
20 PRINT RANDOM
30 END
```
Generate multiple random integers:
```basic
10 RND -1  ' reseed (alternate syntax sometimes supported)
20 FOR I = 1 TO 10
30   PRINT INT(RND(1) * 10) + 1
40 NEXT I
50 END
```

#### Notes
- Multiplying RND(1) by N and applying INT(...) + 1 yields integers in 1..N.
- Some MSX BASIC variants accept `RND -1` (without parentheses) to reseed; using RND(-1) is explicit and portable.
- For reproducible behavior (tests/examples), use RND(0) or avoid reseeding.

[<< Back](./index.md)