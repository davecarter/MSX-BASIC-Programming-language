### FOR / NEXT
The `FOR / NEXT` loop executes a block of code a fixed number of times using a counter variable.

#### Syntax
>FOR variable = start TO end [STEP increment]
>
>    ...statements...
>
>NEXT [variable]

- variable: loop counter (typically a single letter).
- start: initial numeric value.
- end: final numeric value (loop runs while counter <= end for positive step).
- STEP (optional): increment (can be negative). Default is 1.

#### Examples
Simple ascending loop:
```basic
10 FOR I = 1 TO 5
20 PRINT I
30 NEXT I
```
Descending loop with STEP:
```basic
10 FOR I = 10 TO 1 STEP -1
20 PRINT I
30 NEXT I
```

#### Notes
- NEXT may include the variable name (NEXT I) or be written alone (NEXT).
- Nested FOR loops are allowed — use different counter variables for clarity.
- If STEP causes the counter to skip over the end value, the loop will terminate without executing the body for that iteration.

[<< Back](./index.md)