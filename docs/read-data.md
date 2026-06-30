### READ / DATA

`DATA` defines a list of constant values embedded in the program; `READ` sequentially reads those values into variables. Use `RESTORE` to reset the DATA pointer.

#### Syntax
>READ var1[, var2, ...]

>DATA value1, value2, ...

>RESTORE [line_number]  ' resets the DATA pointer to start or to the specified line

#### Example
```basic
10 DIM A(5)
20 FOR I = 1 TO 5
30   READ A(I)
40 NEXT I
50 FOR I = 1 TO 5
60   PRINT "A("; I; ") = "; A(I)
70 NEXT I
80 DATA 10, 20, 30, 40, 50
90 END
```

#### Notes
- READ consumes DATA values in program order. After all values are read, further READs will produce an error unless you RESTORE.
- Use `RESTORE` to reread the DATA block from the start or from a labeled line where DATA appears.
- Keep DATA lists near the end of the program (or on clearly labeled lines) for readability.

[<< Back](./index.md)