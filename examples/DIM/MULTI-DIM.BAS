10 DIM B(3, 3)
20 FOR I = 1 TO 3
30 FOR J = 1 TO 3
40 READ B(I, J)
50 NEXT J
60 NEXT I
70 FOR I = 1 TO 3
80 FOR J = 1 TO 3
90 PRINT "B("; I; ","; J; ") = "; B(I, J)
100 NEXT J
110 NEXT I
120 DATA 1, 2, 3, 4, 5, 6, 7, 8, 9
130 END