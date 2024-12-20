### INKEY$

The `INKEY$` command in MSX BASIC is used to detect and return a single character from the keyboard buffer. It is often used for real-time input handling in programs, such as games or interactive applications.

#### Syntax
>`variable$` = INKEY$

- *variable$* is a string variable that will store the character read from the keyboard buffer.
- If no key is pressed, `INKEY$` returns an empty string ("").

#### Loop Until Key Press
```basic
PRINT "Press any key to continue..."
DO
  a$ = INKEY$
LOOP UNTIL a$ <> ""
PRINT "You pressed: "; a$
```
#### Real-time Input Handling
```basic
PRINT "Press 'Q' to quit."
DO
  a$ = INKEY$
  IF a$ = "Q" OR a$ = "q" THEN EXIT DO
LOOP
PRINT "Program terminated."
```

In these examples, INKEY$ is used to capture and respond to user input immediately, making it a powerful tool for interactive MSX BASIC programs. ```

### Draw with the `@` Character on the Screen
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
#### Initialize Screen and Position:

- **Line 10**: Set the screen mode to text mode (SCREEN 0) and set the width to 40 columns.
- **Line 20**: Place the `@` character at the initial position (10, 10).
- **Line 30**: Initialize the variables x and y to store the current position of the @ character.
Main Loop:
- **Line 40**: Read a key press using INKEY$.
- **Lines 50-80**: Update the position based on the key pressed (W, S, A, D).
- **Lines 90-120**: Ensure the @ character stays within the screen boundaries.
- **Line 130**: Move the @ character to the new position.
- **Line 140**: Repeat the loop to continuously check for key presses and update the position.

This code will allow you to move the `@` character around the screen using the specified keys. ```

[<< Back](./index.md)