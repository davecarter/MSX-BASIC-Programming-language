10 SCREEN 0: WIDTH 40
20 CLS
30 x = 10: y = 10
40 LOCATE x, y: PRINT "@"
50 A$ = ""
60 DO
70   A$ = INKEY$
80   IF A$ = "W" OR A$ = "w" THEN LOCATE x, y: PRINT " ": y = y - 1
90   IF A$ = "S" OR A$ = "s" THEN LOCATE x, y: PRINT " ": y = y + 1
100  IF A$ = "A" OR A$ = "a" THEN LOCATE x, y: PRINT " ": x = x - 1
110  IF A$ = "D" OR A$ = "d" THEN LOCATE x, y: PRINT " ": x = x + 1
120  IF x < 1 THEN x = 1
130  IF x > 40 THEN x = 40
140  IF y < 1 THEN y = 1
150  IF y > 24 THEN y = 24
160  LOCATE x, y: PRINT "@"
170  FOR J = 1 TO 10: NEXT J
180 LOOP UNTIL A$ = "Q" OR A$ = "q"
190 CLS
200 PRINT "Exited."
210 END
