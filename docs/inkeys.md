### INKEY$

Description

`INKEY$` reads a single character from the keyboard buffer without waiting. It returns an empty string `""` if no key is pressed and is commonly used for real-time or non-blocking input (for example, in games or interactive programs).

Syntax

> variable$ = INKEY$

- `variable$` — String variable that receives the pressed key (single character) or `""` if no key is available.

Example program

- Example file: `../examples/INKEYS/MOVE-CHAR-SCREEN.BAS`

```basic
10 SCREEN 0: WIDTH 40
20 LOCATE 10, 10: PRINT "@"
30 x = 10: y = 10
40 a$ = INKEY$
50 IF a$ = "W" OR a$ = "w" THEN y = y - 1
60 IF a$ = "S" OR a$ = "s" THEN y = y + 1
70 IF a$ = "A" OR a$ = "a" THEN x = x - 1
80 IF a$ = "D" OR a$ = "d" THEN x = x + 1
90 IF x < 1 THEN x = 1
100 IF x > 40 THEN x = 40
110 IF y < 1 THEN y = 1
120 IF y > 24 THEN y = 24
130 LOCATE x, y: PRINT "@"
140 GOTO 40
```

Explanation

This interactive example places an `@` character on screen and lets the user move it using `W`, `A`, `S`, `D` keys. The program reads keyboard input using `INKEY$` and updates the position without blocking. It also limits the position so the character stays inside a 40x24 text area. To stop the program press the emulator's STOP/BREAK key or close the session.

[<< Back](./index.md)
