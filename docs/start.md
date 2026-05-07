# Getting Started with MSX BASIC Programming

This short guide covers the minimal workflow to write, run, and manage BASIC programs on a generic MSX system or emulator.

Environment

- Boot an MSX or an MSX emulator to reach the BASIC prompt (Ready/Ok). BASIC is the built-in interpreter.
- Programs are typed directly with line numbers, or entered in an editor provided by the emulator.

Essential commands

- `NEW` — clear program memory and variables.
- `AUTO` — automatic line numbering (e.g., `AUTO 10,10`).
- `LIST [start-end]` — show program source in memory.
- `RUN` — execute the program in memory.
- `SAVE` / `LOAD` — persist and retrieve programs (device-dependent).
- `PRINT` — output text and expressions.
- `INPUT` — read keyboard input.
- `CLS`, `COLOR` — control display.

Minimal example

```basic
10 CLS
20 COLOR 7,0,1
30 PRINT "WELCOME TO MSX BASIC"
40 INPUT "What is your name? "; N$
50 PRINT "HELLO "; N$
60 END
```

- Type or paste the program into the interpreter (use `AUTO` to generate line numbers).
- Run it with `RUN`.

Notes

- Keep programs short and test iteratively.
- Use `REM` or `'` to document code. Prefer `SAVE` before `NEW`.

See also: `docs/index.md` for the command reference.

[<< Back](../README.md)
