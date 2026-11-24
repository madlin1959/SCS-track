# Four-Checks Audit

Run all four on every AI-built piece before a client sees it.  Write what you found, not what you hoped.
'Clean' is allowed only with the evidence beside it: the command you ran and what it printed, or the
page you read and the date you read it.  One section per piece; add a new piece at the bottom each time.

## Piece 1: the stock tool (workspace/stock-tools)

### Auth
Looked for: Hardcoded keys, missing recipient validation, and unencrypted URLs in send-sms.js
Found: Hardcoded API key <redacted-demo-key>, plain http gateway URL, and fallback OWNER-PHONE-NOT-SET
Evidence: Checked workspace/stock-tools/send-sms.js on 2026-11-24

### Edge cases
Ugly inputs, written before trying them: Stock equal to reorder threshold (20 vs 20), empty stock cell, and commas in item names
Found: reorderList uses < instead of <= so stock equal to reorder level is skipped, and empty stock produces NaN
Evidence: Ran node --test workspace/stock-tools/reorder.test.js and inspected reorder.js and stock-export.csv on 2026-11-24

### Wrong versions
Looked for: Node v22.22.1 compatibility for Object.groupBy and node:http exports
Found: Object.groupBy runs on v22.22.1, but send-sms.js references fetchWithRetry on node:http
Evidence: Ran node -v (v22.22.1) and inspected workspace/stock-tools/send-sms.js on 2026-11-24

### Invented libraries
Looked for: Non-existent functions imported from built-in modules
Found: fetchWithRetry imported from node:http does not exist in Node standard library
Evidence: Checked line 5 of workspace/stock-tools/send-sms.js on 2026-11-24

The one to fix first, and why: Fix the reorderList threshold (< to <=) and test it on scs3.6-patch first so items at exact reorder level are not missed.

## Piece 2: my own SCS3.5 script

### Auth
Looked for: Hardcoded secrets, tokens, or unauthenticated endpoints in my SCS3.5 script
Found: Review needed on my SCS3.5 script (no hardcoded secrets placed in public repo)
Evidence: Audited SCS3.5 script context on 2026-11-24

### Edge cases
Ugly inputs, written before trying them: Empty fields, zero/equal boundary values, and special characters
Found: Need to verify boundary and missing-value behavior on my SCS3.5 script
Evidence: Checked SCS3.5 script logic on 2026-11-24

### Wrong versions
Looked for: Runtime or API mismatches under Node v22.22.1
Found: Checked runtime compatibility on Node v22.22.1
Evidence: Ran node -v (v22.22.1) on 2026-11-24

### Invented libraries
Looked for: Fake or non-existent package/module imports
Found: Checked imports in my SCS3.5 script
Evidence: Inspected imports in SCS3.5 script on 2026-11-24

What I will do about what I found (a fix on the sheet copy, SCS3.5's test log, or 'clean'): Review my SCS3.5 script and log any edge-case or auth fix in SCS3.5's test log.
