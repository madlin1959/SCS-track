# The nine breaks -- SCS3.5

<!-- Checked with the script open.  Every answer is a line number or a patch -- never "it should be fine".        -->
<!-- Break 8 is checked on the trigger settings: what fires it, and how often.  Break 9 is caught by the test log. -->

| # | Break | Cannot happen because ... (line) | Found -- patched at (line, commit) |
|---|---|---|---|
| 1 | The header row counted | Line 10 returns when row === 1 | |
| 2 | The wrong tab | Line 5 returns when the sheet is not INTAKE | |
| 3 | The number read as text | Line 17 requires typeof quantity === number | |
| 4 | The boundary | Line 10 allows columns A and B and returns after column 2 | |
| 5 | The overwrite | Line 21 writes the date only when the date cell is empty | |
| 6 | The invented piece | | |
| 7 | The silent assumption | Line 3 assumes the edit event e exists and has range | |
| 8 | The trigger that runs too often | | |
| 9 | The confident wrong answer | | |
