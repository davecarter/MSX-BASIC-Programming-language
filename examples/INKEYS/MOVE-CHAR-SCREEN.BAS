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
