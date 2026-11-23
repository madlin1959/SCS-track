# The nine breaks -- SCS3.5

| # | Break | Cannot happen because ... (line) | Found -- patched at (line, commit) |
|---|---|---|---|
| 1 | The header row counted | Line 7 reads range A12:C15 directly, skipping header rows above row 12 | |
| 2 | The wrong tab | Line 4 explicitly targets DASHBOARD and line 13 explicitly targets REMINDERS | |
| 3 | The number read as text | Line 10 matches the exact string status REORDER in column C rather than parsing numbers | |
| 4 | The boundary | Line 7 restricts reading to A12:C15 and line 29 writes exact array length rows by 3 columns | |
| 5 | The overwrite | Line 19 intentionally calls clearContents on REMINDERS before rewriting fresh headers and rows | |
| 6 | The invented piece | Verified by live execution run of checkstock() in Apps Script after fixing capitalization on lines 7, 13, 19, 23, 29 | |
| 7 | The silent assumption | Line 14 checks if (!reminders) and creates the REMINDERS tab if missing | |
| 8 | The trigger that runs too often | Time-driven trigger set in Apps Script Triggers to run once daily (not on every edit) | |
| 9 | The confident wrong answer | | Found in Test 1 -- patched status spelling at line 10, commit 0e2071a |
