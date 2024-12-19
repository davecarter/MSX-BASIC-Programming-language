### CHR$
The CHR$ **function** in MSX BASIC is used to convert an ASCII code (a number) into its corresponding character. This function is useful when you need to display special characters or control codes that are not easily typed from the keyboard.

#### Syntax
>CHR$(`number`)

An integer value between 0 and 255 representing the ASCII code of the character you want to display.

#### Example Program
The following MSX BASIC program prints all available ASCII characters (from 0 to 255) on the screen:

```basic
10 FOR I = 0 TO 255
20 PRINT CHR$(I);
30 NEXT I
40 END
```

This program uses a `FOR` loop to iterate through all ASCII codes from 0 to 255, converting each code to its corresponding character using the `CHR$` function and printing it on the screen. 

The semicolon (;) at the end of the `PRINT` statement ensures that the characters are printed on the same line.

[<< Back](./index.md)