### COLOR

Description

`COLOR` configures foreground (text), background and border colors used by subsequent text and some graphics commands. Colors are specified by numeric indices (implementation palette depends on MSX generation and video mode).

Syntax

> COLOR foreground[, background[, border]]

- `foreground` — Color index for text/plot color.
- `background` — Optional background color index.
- `border` — Optional border color index.

Example

- Example file: `../examples/COLOR/COLOR-DEMO.BAS`

```basic
10 COLOR 7,0,1
20 PRINT "White text, black background, blue border"
30 END
```

Explanation

The example sets the text color to 7 (white), background to 0 (black) and the screen border to 1 (blue). The actual color mapping may vary by machine and mode.

[<< Back](./index.md)
