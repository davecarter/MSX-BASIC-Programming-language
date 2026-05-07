### PEEK

Description

`PEEK` returns the byte stored at a given memory address. It is the counterpart to `POKE` and is useful for low-level inspection of system memory.

Syntax

> PEEK(address)

- `address` — Memory address to read (0–65535).
- Returns an integer between 0 and 255.

Example

- Example file: `../examples/PEEK/PEEK-READ.BAS`

```basic
10 REM PEEK demonstration
20 PRINT "PEEK(60000) ="; PEEK(60000)
30 END
```

Explanation

`PEEK` reads a single byte from the specified address. Values returned depend on the machine state and memory layout; avoid reading addresses that may contain program or system state unless intentionally inspecting them.

[<< Back](./index.md)
