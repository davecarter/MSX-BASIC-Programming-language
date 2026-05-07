### DIM

Description

`DIM` reserves memory for one or more arrays and initializes the array variables. Arrays allow storing a collection of values under a single name and accessing each element by index.

Syntax

> DIM array_name(size)

- `array_name` — Name of the array.
- `size` — Upper bound for the array index. For multi-dimensional arrays use multiple bounds separated by commas, e.g. `DIM A(n, m)`.

Example program

- Example file: `../examples/DIM/SINGLE-DIM.BAS`

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

Explanation

This program declares a one-dimensional array `A` and reads five values into it using `READ` and `DATA`. The second loop prints each element with its index. For multi-dimensional arrays use `DIM` with multiple bounds and access elements with multiple indices, e.g. `B(I, J)`.

[<< Back](./index.md)
