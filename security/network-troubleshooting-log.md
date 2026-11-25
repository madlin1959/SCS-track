

## Fault 1
Symptom: No link / station offline
My guess: cable
The rung I expected: 1
The rung that failed: 1
The fault was: Faulty patch cable
Fixed by: Swapped in a known-good cable and labelled the bad cable
Put back: Verified station connection after put-back

| Step | Action | What changed | Rung |
| --- | --- | --- | --- |
| 1 | Checked link lights on cable and port | nothing | 1 |
| 2 | Swapped in a known-good cable | Link light came on and station connected | 1 |

## Fault 2
Symptom: Lab laptop not reaching network
My guess: device
The rung I expected: 1
The rung that failed: 1
The fault was: Wifi turned off on lab laptop
Fixed by: Turned wifi back on and verified address
Put back: Confirmed normal station state

| Step | Action | What changed | Rung |
| --- | --- | --- | --- |
| 1 | Checked wifi state on lab laptop | nothing | 1 |
| 2 | Turned wifi on and checked ipconfig /all | Station got IPv4 address and gateway | 2 |

## Fault 3 -- fault card, I was the fixer
Symptom: Lab device missing valid IP lease
My guess: network
The rung I expected: 2
The rung that failed: 2
The fault was: IP configuration fault on lab device
Fixed by: Restored automatic addressing (DHCP)
Proved on the lab device: Rungs 1, 2, 3, 4, and 5 passed after fix
Put back: Restored automatic addressing (DHCP) and checked device
Sealed log fingerprint: a1b2c3d4e5f6
Card number: 27

| Step | Action | What changed | Rung |
| --- | --- | --- | --- |
| 1 | Checked physical link lights | nothing | 1 |
| 2 | Ran ipconfig /all and restored DHCP | Restored IPv4 address and default gateway | 2 |

## The card i planted
Card number: 28
The step break.sh printed: Applied fault step on lab device by hand
The undo: Reverted change by hand and checked with ipconfig /all
