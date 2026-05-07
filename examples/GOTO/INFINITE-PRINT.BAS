10 REM Infinite counter that stops on any keypress
20 A = 1
30 PRINT A
40 A = A + 1
45 FOR D = 1 TO 50: NEXT D
50 A$ = INKEY$
60 IF A$ <> "" THEN END
70 GOTO 30
80 END
