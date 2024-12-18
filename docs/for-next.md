### FOR / NEXT
The `FOR / NEXT` loop is used to execute a block of code repeatedly for a defined number of iterations. It automatically manages a counter variable, starting from an initial value, incrementing it by a specified step (default is 1), and stopping when it exceeds the specified limit.  

```basic
FOR <Variable> = <Start> TO <End> [STEP <Increment>]
    <Block of code>
NEXT <Variable>

```
- Variable: A counter variable that controls the loop.
- Start: The initial value of the counter.
- End: The value at which the loop stops.
- STEP (optional): Defines the increment (positive or negative) applied to the counter after each iteration. Default is 1.


```basic
10 FOR I = 1 TO 5
20 PRINT I
30 NEXT I
```

[<< Back](./index.md)