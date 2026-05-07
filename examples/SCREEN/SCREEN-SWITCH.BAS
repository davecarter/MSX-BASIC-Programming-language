10 REM Switch to graphics, draw shapes, then return to text
20 SCREEN 0: PRINT "Press any key to switch to GRAPHICS"
30 A$ = INKEY$
40 IF A$ = "" THEN 30
50 SCREEN 2: COLOR 15,1,7: CLS
60 LINE (10,10)-(200,100),2
70 CIRCLE (127,95),50,3
80 OPEN "GRP:" FOR OUTPUT AS #1
90 PRINT #1, "You are in GRAPHICS mode - press any key"
100 A$ = INKEY$
110 IF A$ = "" THEN 100
120 CLOSE #1
130 SCREEN 0: CLS
140 PRINT "Back to text mode"
150 END
