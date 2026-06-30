# Getting Started with MSX BASIC Programming  

This guide introduces fundamental MSX BASIC commands and how to use the built-in MSX code editor.

BASIC stands for **Beginners All-purpose Symbolic Instruction Code**. It was designed to teach computer programming concepts easily. MSX BASIC is an extended, widely-compatible implementation that runs on MSX machines and on modern emulators that reproduce the MSX standard.

---

## Accessing the MSX BASIC Environment
1. Turn on your MSX computer or emulator; it should boot directly into the BASIC interpreter and show a prompt like `Ok`.

2. From here you can type commands interactively or enter program lines. To edit longer programs on a modern PC, create plain-text files with a .BAS extension and load them into the emulator or device (see saving/loading below).

3. Emulators: use an emulator such as openMSX or blueMSX to run MSX BASIC on modern systems. Emulators typically let you mount disk images, attach cartridges or paste program text. See the emulator documentation for file-transfer options and mounting images.

---

## Saving and loading programs (basic commands)
- SAVE "A:PROGRAM.BAS"  
  Saves the current program to the attached disk or virtual drive A: (replace A: with the active device if needed).

- LOAD "A:PROGRAM.BAS"  
  Loads a saved program into memory.

- RUN  
  Executes the loaded program.

Notes: In emulators, after saving to a disk image you can export or mount that image from the emulator UI. Some emulators also support pasting program text directly into the MSX BASIC prompt or mapping a host folder as a virtual disk.

---

## Quick tips for a smooth start
- Start small: type a short program, SAVE it, then LOAD and RUN it.
- Use AUTO to create line numbers while you type (helps organization).
- Use CLS and COLOR to make output readable when learning graphics or text layout.

---



---

## Useful Commands to Begin

### NEW  
> Clears the current program from memory  

```basic
  NEW
```
### AUTO
> Automatically generates line numbers as you type. Specify a start number and an increment (step).

```basic
  AUTO 10,10
```

Starts line numbering at 10 and increments by 10 for each new line, helping you manage your program structure.

Starts line numbering at 10 and increments by 10 for each new line, helping you manage your program structure.

Stop AUTO mode with the STOP key.

### COLOR
> Sets the screen colors (foreground, background, and border).


```basic
COLOR 7,0,1
```

Sets the text color to white (7), the background to black (0), and the border to blue (1).

### LIST
> Displays the current program stored in memory.

```basic
LIST
```
Shows all lines in the program. To view specific lines, use:

```basic
LIST 10-30
```
### RUN
> Executes the program in memory.

```basic
RUN
```

Runs the program from the first line.

### PRINT
> Displays text or values on the screen.
```basic
10 REM This is a comment
20 PRINT "LOADING"
```

### Writing a Simple Program
Here’s an example program to get you started:
```basic
10 CLS
20 COLOR 7,0,1
30 PRINT "WELCOME TO MSX BASIC!"
40 INPUT "What is your name? "; N$
50 PRINT "HELLO "; N$; "!"
60 END

```

### Tips for Beginners
Always start with CLS and COLOR to make the screen output clear and visually appealing.
Use AUTO to keep your code organized with line numbers.

Experiment with mathematical operations (PRINT 2+3) and loops (e.g., using FOR and NEXT).

Explore the [index of commands](./index.md) in this guide to learn more MSX BASIC instructions.

[<< Back](../README.md)
