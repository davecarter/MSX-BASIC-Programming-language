## Index of commands

- [LOCATE](./locate.md)
- [GOTO](./goto.md)
- [FOR / NEXT](./for-next.md)
- [INPUT](./input.md)
- [GOSUB / RETURN](#gosub--return)
- [READ / DATA](#read--data)

---

[<< Back](../README.md)




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