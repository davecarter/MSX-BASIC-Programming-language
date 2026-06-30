### INKEY$

The `INKEY$` function returns a single character from the keyboard buffer without waiting. It is ideal for responsive input in games and interactive programs.

#### Syntax
>var$ = INKEY$

- var$: string variable that receives the pressed key (empty string "" if no key pressed).

#### Simple "press any key" loop
```basic
10 PRINT "Press any key to continue..."
20 a$ = INKEY$
30 IF a$ = "" THEN GOTO 20
40 PRINT "You pressed: "; a$
50 END
```

#### Real-time input example (press Q to quit)
```basic
10 PRINT "Press Q to quit"
20 a$ = INKEY$
30 IF a$ = "" THEN GOTO 20
40 IF a$ = "Q" OR a$ = "q" THEN GOTO 100
50 GOTO 20
100 PRINT "Program terminated."
110 END
```

#### Moving a character on screen (simple loop)
```basic
10 SCREEN 0: WIDTH 40
20 x = 10: y = 10
25 LOCATE y, x: PRINT "@"
30 a$ = INKEY$
40 IF a$ = "W" OR a$ = "w" THEN y = y - 1
50 IF a$ = "S" OR a$ = "s" THEN y = y + 1
60 IF a$ = "A" OR a$ = "a" THEN x = x - 1
70 IF a$ = "D" OR a$ = "d" THEN x = x + 1
80 IF x < 1 THEN x = 1
90 IF x > 40 THEN x = 40
100 IF y < 1 THEN y = 1
110 IF y > 24 THEN y = 24
120 LOCATE y, x: PRINT "@"
130 GOTO 30
```

#### Notes
- INKEY$ does not wait for input — check for an empty string before using the value.
- For portability, avoid relying on special keys; compare single-character strings.

[<< Back](./index.md)