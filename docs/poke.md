### POKE

Description

`POKE` writes a byte value directly into RAM at the specified memory address. This is a low-level operation and can corrupt memory or crash the system if used incorrectly.

Syntax

> POKE address, value

- `address` — Memory address (0–65535). Some dialects accept hexadecimal with `&H...`.
- `value` — Numeric byte value (0–255).

Example

- Example file: `../examples/POKE/POKE-PEEK.BAS`

```basic
10 REM WARNING: POKE writes to memory. Use with caution on real hardware.
20 POKE 60000, 123
30 PRINT "POKED 123 into 60000"
40 PRINT "PEEK(60000) ="; PEEK(60000)
50 END
```

Explanation

This program demonstrates writing a value to an arbitrary memory location and then reading it back with `PEEK`. On some MSX systems this may overwrite important data; prefer documented system APIs or `VPOKE`/`VPEEK` for VRAM operations when appropriate.

[<< Back](./index.md)
