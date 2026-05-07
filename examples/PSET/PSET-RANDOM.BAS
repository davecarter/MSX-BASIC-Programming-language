10 REM Draw 500 random colored pixels with PSET, wait for key to exit
20 SCREEN 2: COLOR 15,1,7: CLS
30 FOR I = 1 TO 500
40   X = INT(RND(1) * 256)
50   Y = INT(RND(1) * 192)
60   C = INT(RND(1) * 15) + 1
70   PSET (X,Y), C
80 NEXT I
90 OPEN "GRP:" FOR OUTPUT AS #1
100 PRINT #1, "Press any key to continue..."
110 DO
120   A$ = INKEY$
130 LOOP UNTIL A$ <> ""
140 CLOSE #1
150 SCREEN 0
160 END
