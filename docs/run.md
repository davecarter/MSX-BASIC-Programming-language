### RUN

Description

`RUN` executes the BASIC program currently loaded in memory. If a line number is supplied (implementation-dependent), execution may begin at that line; typically `RUN` without arguments starts at the first program line.

Syntax

> RUN [line]

- `line` — Optional starting line number (not universally supported across all MSX variants).

Example

- Example file: `../examples/RUN/RUN-DEMO.BAS`

```basic
10 PRINT "This program demonstrates RUN"
20 END
```

Explanation

After entering or loading a program into memory, type `RUN` at the READY prompt to start execution. Some emulators or MSX variants allow `RUN <line>` to start at a specific line number.

[<< Back](./index.md)
