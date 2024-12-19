### READ / DATA

The `READ` command is used to read data values that have been defined with the `DATA` command. This allows for easy storage and retrieval of multiple values. The `DATA` command is used to define a list of values, which can then be read sequentially using the `READ` command. This is particularly useful for initializing variables or arrays with predefined values.

#### Syntax
>READ variable

>DATA value1, value2, ..., valueN

The `variable` that will store the value read from the DATA statement.

`value1`, `value2`, ..., `valueN`: 
A comma-separated list of values to be read.

#### Example
The following MSX BASIC program demonstrates how to use the READ and DATA commands to initialize an array with predefined values and then print those values:

```basic
10 DIM A(5)
20 FOR I = 1 TO 5
30 READ A(I)
40 NEXT I
50 FOR I = 1 TO 5
60 PRINT "A("; I; ") = "; A(I)
70 NEXT I
80 DATA 10, 20, 30, 40, 50
90 END
```

In this example:

- Line 10: Declares an array A with 5 elements.
- Lines 20-40: Uses a FOR loop to read values from the DATA statement into the array A.
- Lines 50-70: Uses another FOR loop to print the values stored in the array A.
- Line 80: Defines the values to be read by the READ command.
- Line 90: Ends the program.

[<< Back](./index.md)