### NEW

Description

`NEW` clears the program currently loaded in memory, closes open files and resets program state (variables are typically cleared). After `NEW`, the program buffer is empty and `LIST` prints nothing.

Syntax

> NEW

Example

- Example file: `../examples/NEW/NEW-DEMO.BAS`

```basic
10 REM Save program then type NEW at the prompt to clear program and variables
20 PRINT "This program will be cleared by NEW"
30 END
```

Explanation

After issuing `NEW` at the READY prompt the program in memory is erased. Use `SAVE` before `NEW` to persist the program to disk/cassette if required.

[<< Back](./index.md)
