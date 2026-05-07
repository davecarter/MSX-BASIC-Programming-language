### PLAY

Description

`PLAY` executes Music Macro Language (MML) strings to play notes on PSG, MSX-MUSIC, MSX-AUDIO or external MIDI devices (depending on system and configuration). It is a higher-level way to produce melodies compared to `SOUND`.

Syntax

> PLAY [#device,] "<MML-channel-1>", "<MML-channel-2>", ...

- `#device` — Optional device selector (0 = PSG default, other values for MSX-MUSIC, MSX-AUDIO, etc. when available).
- Each MML string describes notes, durations, octave, volume and control commands for a channel.

Example 1 — Simple PSG melody

- Example file: `../examples/PLAY/PLAY-MEL.BAS`

```basic
10 REM Play a short PSG melody on the default device
20 PLAY "CDE","",""
30 END
```

Explanation

This simple `PLAY` call plays notes `C D E` on the first PSG channel. When only PSG is used, you can omit the `#device` parameter. Provide additional MML strings for multiple channels.

Example 2 — Short melody with octave change

```basic
10 PLAY "T120O4CDEFGAB>c"
20 END
```

Explanation

`T120` sets tempo (120), `O4` sets octave 4 and `>c` moves up one octave for the last `c` note. MML is expressive; consult an MML reference for more complex compositions.

[<< Back](./index.md)
