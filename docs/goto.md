### GOTO

The GOTO command jumps execution to a specified line number. It enables simple control flow changes but can make programs harder to read if overused.

#### Syntax
>GOTO line_number

- line_number: The numeric label to jump to (e.g., 100).

#### Example
```basic
10 A=1
20 PRINT A
30 A=A+1
40 GOTO 20
50 END
```
This example creates an infinite loop that repeatedly prints and increments A.

#### Notes / Best practices
- Prefer structured constructs (FOR/NEXT, IF/THEN, GOSUB/RETURN) over excessive GOTO usage.
- Use clear line-numbering (AUTO with step 10) so labels are readable and maintainable.
- Avoid creating irrecoverable jumps that skip cleanup code (files, DATA pointers).

[<< Back](./index.md)