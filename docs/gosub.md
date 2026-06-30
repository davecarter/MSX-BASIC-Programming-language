### GOSUB / RETURN
GOSUB transfers execution to a subroutine (a labeled block). RETURN returns execution to the statement after the GOSUB call.

#### Syntax
>GOSUB line_number

...subroutine lines...

RETURN

- line_number: label where the subroutine begins.

#### Example
```basic
10 PRINT "Start"
20 GOSUB 100
30 PRINT "Back in main"
40 END

100 PRINT "In subroutine"
110 RETURN
```

This prints "Start", runs the subroutine at line 100, then resumes and prints "Back in main".

#### Notes
- GOSUB/RETURN is useful for reusing code (e.g., routines to draw the screen or read input).
- Avoid deeply nested or recursive GOSUB chains; each GOSUB pushes a return address onto an internal stack with limited depth.
- Always ensure every GOSUB path eventually reaches a RETURN to avoid running into unintended code.

[<< Back](./index.md)