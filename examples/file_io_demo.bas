10 REM File I/O demo - save and load a tiny program
20 PRINT "This demo will create a small program and SAVE it to A:MYPROG.BAS"
30 PRINT "Create sample program in memory..."
40 CLS
50 10 PRINT "HELLO FROM SAVED PROGRAM"
60 20 END
70 REM Save the current program to disk (emulator must have A: mounted)
80 SAVE "A:MYPROG.BAS"
90 PRINT "Saved as A:MYPROG.BAS. To load: LOAD \"A:MYPROG.BAS\"\nRUN"
100 END
