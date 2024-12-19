### INT

The `INT` function in **MSX BASIC** is used to return the integer part of a given number by truncating the decimal portion. This function is useful when you need to work with whole numbers and discard any fractional part.

#### Syntax
>INT(number)

- *number*: The number from which you want to extract the integer part.

#### Basic Usage
```basic
10 PRINT INT(5.7)
20 PRINT INT(-3.9)
30 END
```

This example prints the integer parts of 5.7 and -3.9, which are 5 and -4 respectively.

#### Using INT in a Loop

```basic
10 FOR I = 1 TO 10
20 PRINT "INT("; I / 2; ") = "; INT(I / 2)
30 NEXT I
40 END
```
This example uses a loop to print the integer part of the numbers from 0.5 to 5.0 in increments of 0.5.

[<< Back](./index.md)