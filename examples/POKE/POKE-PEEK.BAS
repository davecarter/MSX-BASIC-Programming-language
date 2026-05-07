10 REM WARNING: POKE writes to memory. Use with caution on real hardware.
20 POKE 60000, 123
30 PRINT "POKED 123 into 60000"
40 PRINT "PEEK(60000) ="; PEEK(60000)
50 END
