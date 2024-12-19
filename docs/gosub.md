### GOSUB / RETURN
The GOSUB command is used to call a subroutine, which is a block of code that can be executed from multiple places in the program. The RETURN command is used to return to the line following the GOSUB call.

```basic
10 GOSUB 100
20 PRINT "Back to main program"
30 END

100 PRINT "In subroutine"
110 RETURN

```

[<< Back](./index.md)