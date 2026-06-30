10 REM Graphics demo - move a character with keys (text mode)
20 SCREEN 0: WIDTH 40
30 CLS
40 x = 20: y = 12
50 LOCATE y, x: PRINT "@"
60 PRINT "Use A/D/W/S to move, Q to quit"
70 a$ = INKEY$
80 IF a$ = "" THEN GOTO 70
90 IF a$ = "Q" OR a$ = "q" THEN GOTO 200
100 IF a$ = "A" OR a$ = "a" THEN x = x - 1
110 IF a$ = "D" OR a$ = "d" THEN x = x + 1
120 IF a$ = "W" OR a$ = "w" THEN y = y - 1
130 IF a$ = "S" OR a$ = "s" THEN y = y + 1
140 IF x < 1 THEN x = 1
150 IF x > 40 THEN x = 40
160 IF y < 1 THEN y = 1
170 IF y > 24 THEN y = 24
180 CLS
190 LOCATE y, x: PRINT "@"
195 GOTO 70
200 PRINT "Goodbye!": END
