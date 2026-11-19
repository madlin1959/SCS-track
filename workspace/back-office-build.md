# SCS3.4 — Kiosk Back Office Build Notes

## 1. Overkill verdict
Google Sheets is suitable for a simple kiosk stock record.
It can calculate stock totals and track items coming in and going out.
A custom application is not needed for the current requirements.

## 2. Validation
The Records sheet needs rules for DATE, ITEM, DIRECTION, QUANTITY and PRICE.
Invalid entries must be tested in the live sheet before claiming they are refused.

## 3. Protection
The Dashboard formulas should be protected from editing.
The entry columns should remain open for authorised records.
Protection still needs to be tested in the live sheet using another account.

## 4. AI receipts
AI was used to help suggest spreadsheet formulas.
The formulas must be checked against the actual spreadsheet.
Only column headings should be included in AI requests.

## 5. Break the books
I will test incorrect dates, unknown items, invalid directions and negative quantities.
I will check whether the Dashboard changes when new records are added.
I will compare the formulas with hand calculations.
Any mistakes and their causes will be recorded.

## 6. Corrections and audit trail
Corrections must be entered as new rows instead of overwriting old records.
Version history should show changes to the spreadsheet.

## Overkill test

| Question | Client answer |
|---|---|
| Does the owner need a simple stock record? | Yes |
| Does the owner need automatic stock totals? | Yes |
| Does the owner need to track items coming in and going out? | Yes |
| Does the owner need a complicated custom application? | No |
| Can Google Sheets handle the current requirements? | Yes |

Verdict: Sheets

Pattern: A simple spreadsheet with automatic formulas and validation.

Because: Sheets is easier to maintain and costs less than building a separate application.

## Validation

| Column | Rule | Garbage I typed | Refused? |
|---|---|---|---|
| DATE | Valid date only | Invalid date | Not tested yet |
| ITEM | Item must be on Lists | Unknown item | Not tested yet |
| DIRECTION | Must be in or out | Invalid direction | Not tested yet |
| QUANTITY | Number greater than zero | Text and negative number | Not tested yet |
| PRICE | Number greater than zero | Text | Not tested yet |

## Protection

| Range | Who can edit | Warning or restriction | Entry columns still open? |
|---|---|---|---|
| Dashboard | Owner only | Restrict editing | Not tested yet |

## AI receipts

| Tool-suggested formula | Formula |
|---|---|
| Stock received | =SUMIFS(Records!D:D,Records!B:B,A12,Records!C:C,"in") |
| Stock going out | =SUMIFS(Records!D:D,Records!B:B,A12,Records!C:C,"out") |

## Break the books

| Attack | What I said would happen | What happened | Held or the fix |
|---|---|---|---|
| Enter text in DATE | It should be refused | Not tested yet | Pending |
| Enter unknown item | It should be refused | Not tested yet | Pending |
| Enter invalid direction | It should be refused | Not tested yet | Pending |
| Enter text in QUANTITY | It should be refused | Not tested yet | Pending |
| Enter negative quantity | It should be refused | Not tested yet | Pending |
| Type over Dashboard formula | Editing should be refused | Not tested yet | Pending |
| Add a new valid record | It should be accepted | Not tested yet | Pending |
