10 REM Play a single note on PSG channel A
20 FOR R = 0 TO 13
30 IF R = 7 THEN SOUND R, 191 ELSE SOUND R, 0
40 NEXT R
50 SOUND 0, 172   ' low 8 bits of frequency for channel A
60 SOUND 1, 1     ' high 4 bits of frequency for channel A
70 SOUND 8, 12    ' volume for channel A
80 SOUND 7, 190   ' enable channel A tone generator
90 FOR T = 1 TO 5000: NEXT T
100 END
