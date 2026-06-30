### CHR$
The CHR$ function converts a numeric code into the corresponding character string. It is commonly used to insert control characters or special symbols.

#### Syntax
>CHR$(number)

- number: integer (usually 0..255) representing the character code in the current character set.

#### Example
```basic
10 FOR I = 0 TO 255
20   PRINT CHR$(I);
30 NEXT I
40 END
```
This prints characters sequentially. The trailing semicolon prevents PRINT from advancing to a new line after each character.

#### Notes
- The available characters and codes depend on the MSX character set and screen mode.
- CHR$ is useful for control codes (e.g., line feeds) and constructing strings from numeric codes.

[<< Back](./index.md)