### GOTO

Description

`GOTO` transfers program control to a specified line number. It can be used to create loops or to jump over sections of code, but excessive use may make programs harder to read and maintain.

Syntax

> GOTO line_number

- `line_number` — The destination line number to continue execution from.

Example program

- Example file: `../examples/GOTO/INFINITE-PRINT.BAS`

```basic
10 A = 1
20 PRINT A
30 A = A + 1
40 GOTO 20
50 END
```

Explanation

This program demonstrates a simple loop created with `GOTO`. After printing `A`, the program increments it and jumps back to line 20, printing repeatedly. This example creates an infinite loop; on a real MSX you can interrupt the program with the system `STOP` or `BREAK` key (depending on your emulator or hardware).

[<< Back](./index.md)
