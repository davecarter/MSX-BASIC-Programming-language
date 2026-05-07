### SOUND

Description

`SOUND` writes a value directly to a PSG (AY-3-8910 / YM2149) register. It provides low-level control over tone frequency, noise, mixer and volumes. Use with care — incorrect values may silence channels or produce unexpected audio.

Syntax

> SOUND register, value

- `register` — PSG register number (0..13). Each register controls frequency bits, noise, mixer, volume, envelope, etc.
- `value` — Numeric byte value appropriate to the selected register.

Example 1 — Initialize PSG and play a note (decimal)

- Example file: `../examples/SOUND/SOUND-NOTE.BAS`

```basic
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
```

Explanation

The snippet clears PSG registers, configures channel A frequency and volume, and enables the tone generator via register 7. `SOUND` operates on hardware registers; exact pitch mapping depends on PSG clock.

Example 2 — Simple modulation loop (demo)

```basic
10 FOR I = 0 TO 13
20 IF I = 7 THEN SOUND I,191 ELSE SOUND I,0
30 NEXT
40 FOR T = 1 TO 1000
50 SOUND 6, INT(RND(1)*31)
60 SOUND 8, INT(RND(1)*16)
70 FOR J = 1 TO 500: NEXT J
80 NEXT
90 END
```

Explanation

This loop modifies noise frequency and volume for a short randomized effect. `SOUND` is low-level — for structured music prefer `PLAY` (MML) or higher-level audio APIs.

[<< Back](./index.md)
