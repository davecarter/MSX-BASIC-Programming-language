### RND
The `RND` function in **MSX BASIC** is used to generate random numbers. It can produce either a random number between 0 and 1, or a random integer within a specified range.

#### Syntax
>RND(`type`)

- *type* : A numeric value that determines the type of random number generated.

- `0`: Generates the same sequence of random numbers each time the program is run.
- `1`: Generates a new random number between 0 and 1.
- `-1`: Reseeds the random number generator with a new seed based on the system clock.

#### Generate a Random Number Between 0 and 1

```basic
10 PRINT RND(1)
20 END
```
This example prints a random number between 0 and 1.

#### Generate a Random Integer Between 1 and 10
```basic
10 FOR I = 1 TO 10
20 PRINT INT(RND(1) * 10) + 1
30 NEXT I
40 END
```

[<< Back](./index.md)