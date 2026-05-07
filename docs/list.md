### LIST

Description

`LIST` displays the BASIC program currently in memory. You can list the entire program or a specific range of line numbers.

Syntax

> LIST [start[-end]]

- `start` — Optional starting line number to display.
- `end` — Optional ending line number.

Example

- Example file: `../examples/LIST/LIST-DEMO.BAS`

```basic
10 PRINT "This program will be listed with LIST"
20 PRINT "Line two"
30 END
```

Explanation

Type `LIST` at the READY prompt to show the program source. `LIST 10-20` restricts output to the specified line range.

[<< Back](./index.md)
