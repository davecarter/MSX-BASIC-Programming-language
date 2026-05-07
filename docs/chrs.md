### CHR$

Description

CHR$ is a function that returns the character corresponding to a numeric code. It is commonly used to display special characters or control codes that cannot be typed directly from the keyboard.

Syntax

> CHR$(number)

- `number` — Integer code of the character (typical range 0–255). The function returns a one-character string.

Example program

- Example file: `../examples/CHRS/LIST-ALL-CHARS.BAS`

```basic
10 FOR I = 0 TO 255
20 PRINT CHR$(I);
30 NEXT I
40 END
```

Explanation

This program iterates through numeric character codes from 0 to 255 and prints the character returned by `CHR$` for each code. The semicolon after `PRINT` keeps output on the same line. Note that many codes correspond to non-printable control characters and may affect the display or cursor position; the output will vary depending on the MSX text mode and the emulator or hardware.

[<< Back](./index.md)
