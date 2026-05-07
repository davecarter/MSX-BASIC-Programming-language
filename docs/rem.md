### REM

Description

`REM` (remark) and the apostrophe `'` introduce comments in MSX BASIC source. Comments are ignored by the interpreter and are used to document code.

Syntax

> REM text
> ' text

- `REM` — Full-word comment marker.
- `'` — Single-quote shorthand comment marker; often preferred for brevity.

Example

- Example file: `../examples/REM/COMMENTS.BAS`

```basic
10 REM This is a REM comment
20 ' This is an apostrophe comment
30 PRINT "Comments do not affect execution"
40 END
```

Explanation

Lines beginning with `REM` or `'` are ignored by the interpreter and serve as inline documentation for humans.

[<< Back](./index.md)
