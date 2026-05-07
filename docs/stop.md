### STOP

Description

`STOP` halts program execution and returns control to the READY prompt. Execution can be resumed with the `CONT` command. `STOP` can also trigger an `ON STOP GOSUB` handler when configured.

Syntax

> STOP

Example

- Example file: `../examples/STOP/STOP-DEMO.BAS`

```basic
10 PRINT "BEFORE STOP"
20 STOP
30 PRINT "AFTER STOP"
40 END
```

Explanation

When `STOP` is executed the program halts at line 20; the `PRINT` at line 30 does not run unless the user types `CONT` at the prompt to resume execution.

[<< Back](./index.md)
