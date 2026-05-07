### GOSUB / RETURN

Description

`GOSUB` transfers execution to a subroutine located at a specified line number. `RETURN` brings execution back to the statement following the `GOSUB` call. Subroutines help avoid duplicating code and organize functionality.

Syntax

> GOSUB line_number
> ...
> RETURN

- `line_number` — The line number where the subroutine starts.

Example program

- Example file: `../examples/GOSUB/SURFACE-CALC.BAS`

```basic
10 PRINT "SURFACE AREA CALCULATOR"
20 INPUT "INSERT HEIGHT";A
30 INPUT "INSERT WIDTH";B
40 GOSUB 70
50 PRINT "SURFACE AREA IS:";SURFACE
60 END
70 SURFACE = A * B
80 RETURN
```

Explanation

The main program (lines 10–60) reads `A` and `B` from the user and calls the subroutine at line 70 with `GOSUB 70`. The subroutine computes `SURFACE = A * B` and uses `RETURN` to go back to the line after the `GOSUB`. The main program then prints the computed area and ends.

[<< Back](./index.md)
