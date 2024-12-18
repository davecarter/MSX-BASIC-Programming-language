### INPUT
The INPUT command is used to receive user input during program execution. It allows the program to store the input value in a variable for further processing.

```basic
INPUT "Prompt message: "; Variable
```
- **Prompt message**: The text displayed to the user, explaining what input is expected.

- **Variable**: The variable where the user’s input is stored. String variables typically end with $ (e.g., Name$ for text).

#### Example

```basic
10 INPUT "Enter your name: ", Name$
20 PRINT "Hello, "; Name$
```

- The program prompts the user to "Enter your name:".
- The input is stored in the variable Name$.
- The program then greets the user with their name by printing 
> "Hello, [Name]!".

[<< Back](./index.md)