### CLOSE

Description

`CLOSE` closes open file handles and releases associated I/O buffers. Without parameters it closes all open files. Closing files ensures data is flushed to the device.

Syntax

> CLOSE [#file1, #file2, ...]

- `#fileN` — File handle(s) previously assigned by `OPEN`. When omitted all opened files are closed.

Example

```basic
10 MAXFILES = 2
20 OPEN "CAS:DEMO" FOR INPUT AS #1
30 OPEN "LPT:" FOR OUTPUT AS #2
40 INPUT #1, A$
50 PRINT #2, A$
60 CLOSE #2
70 CLOSE #1
80 END
```

Explanation

This snippet demonstrates opening two files and closing them explicitly when finished. Closing files prevents data loss and frees file slots for new `OPEN` operations.

[<< Back](./index.md)
