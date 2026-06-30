### INT
The `INT` function returns the integer part of a numeric expression by truncating toward negative infinity (i.e., it rounds down).

#### Syntax
>INT(number)

- number: numeric expression.

#### Examples
```basic
10 PRINT INT(5.7)    ' prints 5
20 PRINT INT(-3.9)   ' prints -4
30 END
```

#### Notes
- INT(-3.9) returns -4 because INT truncates toward negative infinity.
- To round to the nearest integer, use INT(x + 0.5) for positive numbers (careful with negatives).
- INT is often used to convert RND(1)*N results into integer ranges.

[<< Back](./index.md)