### DIM

The `DIM` command in MSX BASIC is used to declare and allocate memory for arrays. Arrays are used to store multiple values in a single variable, which can be accessed using an index.

#### Syntax
>DIM array_name(`size`)

- *array_name*: The name of the array.
- *size*: The number of elements in the array.

#### Single-Dimensional Array
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

This example declares a single-dimensional array A with 5 elements, reads values into the array, and prints them.

#### Multi-Dimensional Array
```basic
10 DIM B(3, 3)
20 FOR I = 1 TO 3
30 FOR J = 1 TO 3
40 READ B(I, J)
50 NEXT J
60 NEXT I
70 FOR I = 1 TO 3
80 FOR J = 1 TO 3
90 PRINT "B("; I; ","; J; ") = "; B(I, J)
100 NEXT J
110 NEXT I
120 DATA 1, 2, 3, 4, 5, 6, 7, 8, 9
130 END
```

This example declares a two-dimensional array B with 3x3 elements, reads values into the array, and prints them.

[<< Back](./index.md)