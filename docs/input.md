### INPUT
The INPUT statement requests user input during program execution and stores it in a variable.

#### Syntax
>INPUT "prompt"; var
or
>INPUT "prompt", var

- Use a trailing comma (,) to force the input to advance to the next line after the user types a value.
- Use a trailing semicolon (;) to continue printing on the same line after the input prompt.
- For text use string variables ending with $ (e.g., Name$). For numbers use plain variable names (A, X).

#### Examples
String input:
```basic
10 INPUT "Enter your name: "; Name$
20 PRINT "Hello, "; Name$
```
Numeric input:
```basic
10 INPUT "Enter a number: "; N
20 PRINT "You entered"; N
```

#### Notes and common pitfalls
- If the user types a non-numeric value when a numeric variable is expected, behavior may be unpredictable — validate input if necessary.
- Use PRINT statements to clarify expected input (e.g., ranges or formats).
- To read multiple values separated by commas, list multiple variables: INPUT "A,B"; A,B

[<< Back](./index.md)