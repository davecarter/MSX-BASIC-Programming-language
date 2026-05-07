### END

Description

`END` terminates program execution and closes open files. Execution stops and the interpreter returns to the READY prompt.

Syntax

> END

Example

- Example file: `../examples/END/END-DEMO.BAS`

```basic
10 PRINT "START"
20 END
30 PRINT "NEVER REACHED"
40 END
```

Explanation

When the interpreter reaches line 20 (`END`) execution stops. Any statements after `END` in the program are not executed.

[<< Back](./index.md)
