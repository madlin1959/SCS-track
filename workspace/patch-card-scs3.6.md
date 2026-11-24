# Patch Card -- SCS3.6

One real bug from the audit.  The fix, not a rewrite.  The spec and the test come before the prompt.

The bug, in one sentence: reorderList in reorder.js uses < instead of <=, so items whose stock equals their reorder level are left out.
Which check found it (auth, edge case, wrong version, invented library): edge case
The spec for the fix, one thing: Include items where stock is less than or equal to reorder level in reorderList.
The test that shows the bug (input -> expected): Stock 20 and reorder 20 -> item included in reorderList output.
The prompt, word for word: Change reorderList in workspace/stock-tools/reorder.js from < to <= and add a test for stock equal to reorder level.

## The Diff, Read Whole

Every line the patch changed.  A line the spec did not ask for is marked BEYOND in the second column.

| Line | What the patch changed | In the spec? | My adjustment |
|---|---|---|---|
| reorderList filter | Changed `<` to `<=` | yes | Kept minimal fix |

Tests before the patch: 5 pass on stock tool, fails new equal-threshold test
Tests after the patch: Passing with new equal-threshold test
Tests after my adjustment: Passing after review
Commits on scs3.6-patch (the test, the patch, the adjustment): Pending commits on scs3.6-patch

## Receipt

1. Label: scs3.6-reorder-threshold
2. Tool and tier: Gemini assistant
3. Spec and prompt: above, word for word
4. Tests or checks: node --test workspace/stock-tools/reorder.test.js and check-scs3.6
5. Rights line: not checked
6. Cost: 0 (estimate)
