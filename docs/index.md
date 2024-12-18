## Index of commands

- [LOCATE](./locate.md)
- [GOTO](./goto.md)
- [FOR / NEXT](#for--next)
- [INPUT](#input)
- [GOSUB / RETURN](#gosub--return)
- [READ / DATA](#read--data)

---

[<< Back](../README.md)

### FOR / NEXT
The FOR / NEXT loop is used to repeat a block of code a specific number of times. It initializes a counter variable and increments it until it reaches a defined limit.

```basic
10 FOR I = 1 TO 5
20 PRINT I
30 NEXT I
```
### INPUT
The INPUT command is used to receive user input during program execution. It allows the program to store the input value in a variable for further processing.

```basic
10 INPUT "Enter your name: ", Name$
20 PRINT "Hello, "; Name$
```

### GOSUB / RETURN
The GOSUB command is used to call a subroutine, which is a block of code that can be executed from multiple places in the program. The RETURN command is used to return to the line following the GOSUB call.

```basic
10 GOSUB 100
20 PRINT "Back to main program"
30 END

100 PRINT "In subroutine"
110 RETURN

```
### READ / DATA
The READ command is used to read data values that have been defined with the DATA command. This allows for easy storage and retrieval of multiple values.