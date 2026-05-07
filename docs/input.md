### INPUT

Description

`INPUT` retrieves one or more values from the keyboard (interactive) or from a sequential file when used with file redirection. It is used to prompt the user and store typed values into variables.

Syntax

> INPUT ["prompt";] var1[, var2, ...]

- `"prompt"` — Optional prompt text shown before waiting for input. When present, put a semicolon (`;`) after the prompt to keep the cursor on the same line.
- `var1, var2, ...` — One or more variables that receive the entered values. Use string variables (ending with `$`) for text.

Example 1 — Read a name (string)

```basic
10 INPUT "Enter your name: "; Name$
20 PRINT "Hello, "; Name$
30 END
```

Explanation

Line 10 prints the prompt and waits for the user to type a name. The entered text is stored in `Name$`. Line 20 prints a greeting using the value stored in `Name$`.

Example 2 — Numeric input and using an example file

- Example file: `../examples/INPUT/MULTIPLY-5.BAS`

```basic
10 INPUT "Multiply X 5"; A
20 PRINT A * 5
30 END
```

Explanation

This program prompts the user to enter a number (`A`), multiplies it by 5 and prints the result. The example file `MULTIPLY-5.BAS` in `examples/INPUT/` contains the same program for direct testing on a generic MSX.

Notes

- Use `LINE INPUT` when you need to read a full line including spaces into a string variable.
- When multiple variables are specified, the user must separate values with commas when typing them (e.g., `12,34`).

[<< Back](./index.md)
