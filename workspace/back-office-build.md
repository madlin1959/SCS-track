# SCS3.4 — Kiosk Back Office Build Notes

Google Sheets is being used for a simple kiosk stock record.
It can calculate stock totals and track items coming in and going out.
A custom application is not needed for the current requirements.

## Overkill test

| question | client's answer |
|---|---|
| Does the owner need a simple stock record? | Yes |
| Does the owner need automatic stock totals? | Yes |
| Does the owner need to track items coming in and going out? | Yes |
| Does the owner need a complicated custom application? | No |
| Can Google Sheets handle the current requirements? | Yes |

Verdict: Sheets — inventory

Pattern: A simple inventory spreadsheet with automatic formulas and validation.

Because: Sheets is easier to maintain and costs less than building a separate application.

## Validation

| column | rule | the garbage I typed | refused? |
|---|---|---|---|
| DATE | Is valid date | Invalid date | Not tested yet |
| ITEM | Item must be on Lists | Unknown item | Not tested yet |
| DIRECTION | Must be in or out | Invalid direction | Not tested yet |
| QUANTITY | Greater than 0 | Text and negative number | Not tested yet |
| PRICE | Greater than 0 | Text | Not tested yet |

## Protection

| range | who can edit | warning or restriction | entry columns still open? |
|---|---|---|---|
| Dashboard | Owner only | Restrict editing | Not tested yet |

## AI receipts

| ask (column headings only) | formula suggested | what I changed | hand check reference |
|---|---|---|---|
| Stock received formula using Records headings | =SUMIFS(Records!D:D,Records!B:B,A12,Records!C:C,"in") | No change confirmed; compare with the live Dashboard formula | Pending partner check reference |
| Stock going out formula using Records headings | =SUMIFS(Records!D:D,Records!B:B,A12,Records!C:C,"out") | No change confirmed; compare with the live Dashboard formula | Pending partner check reference |

## Break the books

| attack | what I said would happen | what happened | held or the fix |
|---|---|---|---|
| Enter text in DATE | It should be refused | Not tested yet | Pending |
| Enter unknown item | It should be refused | Not tested yet | Pending |
| Enter invalid direction | It should be refused | Not tested yet | Pending |
| Enter text in QUANTITY | It should be refused | Not tested yet | Pending |
| Enter negative quantity | It should be refused | Not tested yet | Pending |
| Type over Dashboard formula | Editing should be refused | Not tested yet | Pending |
| Add a new valid record | It should be accepted | Not tested yet | Pending |

## Corrections and audit trail

Corrections must be entered as new rows instead of overwriting old records.
Version history should show changes to the spreadsheet.
