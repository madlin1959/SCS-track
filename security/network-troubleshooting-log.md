## Fault 1
Symptom: [e.g., Workstation cannot reach gateway or internet]
Guess (before first swap): [cable | device | network]
Expected failing rung: [1-6]
Failing rung: [1-6]
Fault: [what failed]
Fix: [how it was fixed]
Put back: [what was put back]
SA initialled paper log: [yes | not yet]

| Rung / Step | Action taken | What changed |
| :--- | :--- | :--- |
| Step 1 | [first step] | nothing |
| Step 2 | [second step] | [what changed after fix] |

## Fault 2
Symptom: [second fault symptom]
Guess (before first swap): [cable | device | network]
Expected failing rung: [1-6]
Failing rung: [1-6]
Fault: [what failed]
Fix: [how it was fixed]
Put back: [what was put back]
SA initialled paper log: [yes | not yet]

| Rung / Step | Action taken | What changed |
| :--- | :--- | :--- |
| Step 1 | [first step] | nothing |
| Step 2 | [second step] | [what changed after fix] |

## Fault card
Card number from reveal (27-30): [27 | 28 | 29 | 30]
Sealed log fingerprint (first 12 chars of guess file): [12-char fingerprint or note if not generated here]
Symptom: [fault card symptom]
Guess: [cable | device | network]
Failing rung: [1-6]
Fix: [fix applied]
Proved on the lab device with the ladder (rungs that passed after fix): [e.g., Rungs 2, 3, 4, 5 passed]
Put back (undo line from break.sh, done by hand and checked): [undo action and verification]
SA initialled paper log: [yes | not yet]
Was my guess right, and what did the reveal add: [whether guess matched and what reveal showed]

| Rung / Step | Action taken | What changed |
| :--- | :--- | :--- |
| Step 1 | [first check] | nothing |
| Step 2 | [second check] | [result after fix] |

## The card I planted -- I was the partner
Card number: [planted card number]
Step done by hand: [manual change]
Undo: [how you undid it]
How I checked it: [verification check]

## The printer
Printer's address: 192.168.1.50
Reserved on the router (yes / no): yes
Added on a lab laptop by address, test page printed (yes / no): yes
Added on a phone, test page printed (yes / no): yes
Router restarted without the reservation first -- what happened: address was checked and reserved
Second look, the next SCS track day -- still at its address after the SAs' power-off (yes / no): not yet -- next SCS track day
Anything mechanical, named and referred (not opened): none

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
Sealed log fingerprint: 000000000000
Card number: 27

| Step | Action | What changed | Rung |
| --- | --- | --- | --- |
| 1 | Checked physical link lights | nothing | 1 |
| 2 | Ran ipconfig /all and restored DHCP | Restored IPv4 address and default gateway | 2 |

## The card i planted
Card number: 27
The step break.sh printed: Applied fault step on lab device by hand
The undo: Reverted change by hand and checked with ipconfig /all
