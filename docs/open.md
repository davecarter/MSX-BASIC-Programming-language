### OPEN

Description

`OPEN` prepares a file or device for sequential (INPUT/OUTPUT/APPEND) or random access. It is used to read and write text or binary data to devices such as disk drives, cassette, printer, or the graphics/text screen (`GRP:` / `CRT:`).

Syntax

> OPEN "<device>:\<path>\<filename>" FOR <mode> AS #<fileNumber> [LEN <recordLength>]

- `device` — Device name (e.g., `A:`, `CAS:`, `GRP:`). If omitted the system default is used.
- `mode` — `OUTPUT` (write), `INPUT` (read), `APPEND` (append to an existing file) or omitted for random access.
- `fileNumber` — File handle (1..15) used by `PRINT #`, `INPUT #`, `GET #`, `PUT #`, etc.
- `LEN` — Record length for random access files (optional).

Example — Create and read a text file

- Example file: `../examples/OPEN/OPEN-TEXT.BAS`

```basic
10 REM Create and read a text file using OPEN/PRINT#/LINE INPUT
20 OPEN "HELLO.TXT" FOR OUTPUT AS #1
30 PRINT #1, "Hello world!"
40 PRINT #1, "Saved from OPEN example"
50 CLOSE #1
60 OPEN "HELLO.TXT" FOR INPUT AS #1
70 IF EOF(1) THEN 110
80 LINE INPUT #1, A$
90 PRINT A$
100 IF NOT EOF(1) THEN GOTO 80
110 CLOSE #1
120 END
```

Explanation

Use `OPEN ... FOR OUTPUT AS #n` to create or overwrite a file and `OPEN ... FOR INPUT AS #n` to read it. Use `PRINT #n, ...` and `LINE INPUT #n, var$` to write and read text lines. Remember to `CLOSE #n` when finished.

[<< Back](./index.md)
