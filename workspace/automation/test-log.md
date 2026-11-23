# Test log -- SCS3.5

| Case | Input rows (made up) | Expected (by hand, before the run) | Actual (after the run) | Pass or fail | Patch (line, commit) |
|---|---|---|---|---|---|
| Test 1 | SUGAR, quantity 4 | CHECK = OK; DATE filled if blank | NOT RUN | | |
| Test 2 | BREAD, quantity -2 | CHECK = INVALID ENTRY; DATE filled if blank | NOT RUN | | |
| Edge case | MILK, quantity blank | Script stops; no new date or check | NOT RUN | | |
