# Test log -- SCS3.5

| Case | Input rows (made up) | Expected (by hand, before the run) | Actual (after the run) | Pass or fail | Patch (line, commit) |
|---|---|---|---|---|---|
| Test 1 | DASHBOARD A12:C15 has 2 rows marked REORDER (SUGAR, SALT) | REMINDERS shows headers plus 2 REORDER rows | First run missed rows due to typo; after patch, REMINDERS shows headers plus SUGAR and SALT | fail -> pass | line 10, 0e2071a |
| Test 2 | DASHBOARD A12:C15 has 1 row marked REORDER and 2 rows marked OK | REMINDERS shows headers plus only the 1 REORDER row | REMINDERS cleared old rows and listed only the 1 REORDER row | pass | |
| Edge case | DASHBOARD A12:C15 has 0 rows marked REORDER | REMINDERS shows headers only and skips setValues on empty array without error | REMINDERS showed headers only with no runtime error | pass | |
