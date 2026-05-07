10 REM PRESET example: draw lines then random presets, wait for key to exit
20 SCREEN 2: COLOR 15,1,7: CLS
30 LINE (20,20)-(200,120), 3, B
40 FOR I=1 TO 200
50   X = INT(RND(1) * 180) + 20
60   Y = INT(RND(1) * 100) + 20
70   PRESET (X,Y)
80 NEXT I
90 OPEN "GRP:" FOR OUTPUT AS #1
100 PRINT #1, "Press any key to continue..."
110 DO
120   A$ = INKEY$
130 LOOP UNTIL A$ <> ""
140 CLOSE #1
150 SCREEN 0
160 END
