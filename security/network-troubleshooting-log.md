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

## Station Fault 1
- Guess: cable
- Expected rung: 1
- Step 1: Checked link lights on the cable and switch port | What changed: nothing | Rung: 1
- Step 2: Swapped in a known-good cable | What changed: Link light came on and connection worked | Rung: 1
- Rung that failed: 1
- Fault: Faulty patch cable
- Fix: Swapped in a working cable and labelled the bad cable

## Station Fault 2
- Guess: device
- Expected rung: 1
- Step 1: Checked wifi toggle in Quick Settings | What changed: Wifi was off; turning it on reconnected | Rung: 1
- Step 2: Ran ipconfig /all | What changed: Got station IPv4 address and gateway | Rung: 2
- Rung that failed: 1
- Fault: Wifi turned off on lab laptop
- Fix: Turned wifi back on and verified connectivity

## Fault Card (Fixer)
- Guess: network
- Expected rung: 2
- Sealed log fingerprint: 000000000000
- Card number: 27
- Step 1: Checked physical link lights | What changed: nothing | Rung: 1
- Step 2: Ran ipconfig /all | What changed: Showed 169.254.x.x / missing lease | Rung: 2
- Step 3: Restored automatic IP / DHCP | What changed: Got station IPv4 address and gateway | Rung: 2
- Rung that failed: 2
- Fix: Restored automatic addressing / DHCP
- Proved: Rungs 1, 2, 3, 4, and 5 pass on lab device

## Fault Card (Partner)
- Card number: 27
- Step by hand (no password): Applied card step on lab device by hand
- Undo and check: Undid change by hand and checked with ipconfig /all and SA verification

## Printer Log
- Printer address: 192.168.1.50
- Reserved: yes
- Added on lab laptop with test page: yes
- Added on phone with test page: yes
