### SAVE

Description

`SAVE` writes the BASIC program currently in memory to an external device (cassette, disk, memory device). The stored format may be ASCII or tokenized depending on parameters and device.

Syntax

> SAVE "<device>:\<path>\<filename>"[,A]

- `device` — Device name (e.g., `CAS` for cassette, `A` for disk drive A). If omitted the default device is used.
- `A` — Optional flag to save in ASCII format (useful for tape or cross-platform readability); otherwise tokenized format is used.

Example — Save a small program (instructions)

- Example file: `../examples/SAVE/SAVE-DEMO.BAS`

```basic
10 PRINT "HELLO, SAVE DEMO"
20 END
```

To save this program from the READY prompt:

- Tape: `SAVE "CAS:HELLO",A` (ASCII on cassette)
- Disk: `SAVE "A:HELLO.BAS",A` or `SAVE "A:HELLO.BAS"` (tokenized)

Explanation

`SAVE` behavior depends on the target device: cassette often uses ASCII; disk supports both ASCII and tokenized formats. Provide the device prefix to control the destination explicitly. When saving to disk, use typical 8.3 filenames (e.g., `HELLO.BAS`).

[<< Back](./index.md)
