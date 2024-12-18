## Locate

The `LOCATE` command is used to set the cursor position on the screen. It takes two parameters: the row and the column where the cursor should move. 

The maximum characters in screen are:
- horizontal: 0 - 36  
- vertical: 0 - 23

For example, `LOCATE 10, 5` moves the cursor to the 10th row and 5th column.

```basic
10 PRINT "MSX BASIC"                  
20 LOCATE 10,10:PRINT "HELLO WORLD"   
30 END
```

[<< Back](./index.md)