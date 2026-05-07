### LOAD

Description

`LOAD` retrieves a BASIC program from an external device into memory. Optionally, the `R` flag executes the loaded program immediately.

Syntax

> LOAD "<device>:\<path>\<filename>"[,R]

- `device` — Device name (e.g., `CAS` for cassette, `A` for disk). If omitted the default device is used.
- `R` — Optional flag to run the program after load.

Example — Load and run a previously saved program

- After saving `HELLO.BAS` to disk or cassette, at the READY prompt use one of:
  - `LOAD "A:HELLO.BAS",R`  (load from disk and run)
  - `LOAD "CAS:HELLO",R`     (load from cassette and run)

Example file for reference (this is the program you saved): `../examples/SAVE/SAVE-DEMO.BAS`

Explanation

`LOAD` behavior depends on the storage device and file format. Tokenized programs load faster. Use the `R` parameter to immediately execute the program after loading.

[<< Back](./index.md)
