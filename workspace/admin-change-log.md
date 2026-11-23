# Admin change log -- SCS3.1

Date: 2026-11-17
Sandbox admin sign-in: madlin@<sandbox domain>
My unit: /Trainees/madlin
Naming convention: first.last

One row per admin action, written BEFORE the click.  A ticket may take several rows; add them as you go.
Logged at: the time on the laptop clock when you wrote the row.
Console path: where you expect to click, with ">" between the steps; correct it after if the console differs.
Audit log: filled in SGL/Lab -- the time the console's audit log shows for this change, or "gap:" and why.
Never write a password here.  The first password is handed over by voice.

| # | Ticket | Logged at | What I am about to change (console path) | Who or what it affects | Why (the three questions, one line) | How I checked it | Audit log |
|---|---|---|---|---|---|---|---|
| 1   | 1 New starter    | 10:50     | Admin console > Directory > Users > Add new user                              | amina.okello, new Front Desk starter                                         | The job needs counter email and calendar, extra access risks financial records, the owner decided             | Verified user appears active in users list and signed in via private window     | 10:52     |
| 2   | 2 Groups         | 10:55     | Admin console > Directory > Groups > Create group                             | counter@<sandbox-domain>, counter staff                                      | Staff need one shared address for shift rotas, wider access exposes management mail, the shop manager decided | Verified group page lists all counter members                                   | 10:57     |
| 3   | 3 Units          | 11:00     | Admin console > Directory > Organizational units > Create organizational unit | Front Desk under /Trainees/madlinyussuf/Staff                                | Chat must be turned off for counter staff only while other staff keep it, the owner decided                   | Verified Front Desk OU appears in tree and moved new starter into it            | 11:02     |
| 4   | 4 Delegated role | 11:05     | Admin console > Account > Admin roles > Assign users                          | Accountant user in /Trainees/madlinyussuf/Staff, Password Reset Admin        | The job needs password resets for staff only, full admin risks billing and data deletion, the owner decided   | Signed in as accountant and tested three actions to confirm role limits         | 11:07     |
| 5   | 5 Rollback       | 11:10     | Admin console > Account > Admin roles > Unassign users                        | Accountant user in /Trainees/madlinyussuf/Staff, remove Password Reset Admin | The role test is complete and elevated privileges are no longer needed, the trainer decided                   | Confirmed Password Reset Admin role is removed from the accountant user profile | 11:12     |

## Ticket 4 — Accountant Role Test (Three Attempts)

1. **Reset password for a staff user in `/Trainees/madlin/Staff`:** Allowed — Admin Console opened the password reset screen and accepted a new password.
2. **Create a new user or delete an existing user:** Blocked — the **Add new user** and **Delete user** actions were unavailable and navigating directly displayed *"You don't have permission to access this page."*
3. **Open Billing or Account > Admin roles:** Blocked — **Billing** and **Admin roles** were hidden from the Admin Console menu and direct URLs returned *"You don't have permission"* (confirming role boundaries by testing rather than reading documentation).

## SCS3.2 -- sharing, security, backups, offboarding (2026-11-23)

Practice OU only.  Every row written before the click; the check column filled after it.

| # | Time | What I am about to change (console path) | Who or what it affects | Why, in one line | How I checked it | Undo |
|---|---|---|---|---|---|---|
| 1 | 11:20 | Admin console > Apps > Google Workspace > Drive and Docs > Sharing settings | `/Trainees/madlin/Staff` external sharing permissions | Restrict external sharing to named recipients and disable public link sharing so client files cannot leak | Tested sharing a file to an external partner account and confirmed outside share is restricted/warned | Set sharing permissions back to default in Drive Sharing settings |
| 2 | 11:25 | Admin console > Apps > Google Workspace > Drive and Docs > Manage shared drives > Create shared drive | Practice business team Shared Drive for `/Trainees/madlin/Staff` | Store business files in a team-owned Shared Drive rather than personal My Drive folders | Verified Shared Drive appears for staff members and added team members with appropriate roles | Remove members and delete empty test Shared Drive if rolling back |
| 3 | 11:30 | Admin console > Security > Authentication > 2-Step Verification | `/Trainees/madlin/Staff` organizational unit | Require 2-Step Verification on all staff sign-ins to prevent credential theft | Verified 2SV enforcement status on practice user profile and confirmed 2-step prompt at sign-in | Disable 2SV enforcement on `/Trainees/madlin/Staff` OU |
| 4 | 11:35 | Admin console > Devices > Mobile and endpoints > Settings > Universal settings > Password and screen lock | Devices accessing `/Trainees/madlin/Staff` accounts | Enforce device screen locks and basic endpoint rules so lost devices do not expose company Drive data | Verified screen lock requirement is active under Universal device settings for the practice OU | Revert screen lock enforcement setting to off in Universal settings |
| 5 | 11:40 | Admin console > Directory > Users > Suspend user and revoke sign-in sessions | `amina.otieno` (offboarding practice leaver in `/Trainees/madlin/Staff`) | Immediately block sign-in access when a staff member leaves without losing their Drive files | Attempted sign-in as `amina.otieno` in a private window and confirmed access is refused | Reactivate/un-suspend `amina.otieno` in Directory > Users |
| 6 | 11:45 | Admin console > Apps > Google Workspace > Drive and Docs > Transfer ownership | Transfer My Drive files from `amina.otieno` to manager in `/Trainees/madlin/Staff` | Preserve business ownership of the leaver's files and folders before resetting the practice OU | Verified transferred files appear in the manager's Drive and Drive log shows ownership transfer | Transfer ownership of the folder back to `amina.otieno` |
| 7 | 12:15 | Admin console > Directory > Users > Reactivate (un-suspend) user | `amina.otieno` in `/Trainees/madlin/Staff` | Restore the practice OU to whole active state at the end of the lab drill | Verified `amina.otieno` shows Active in Directory > Users export with zero suspended users | Suspend `amina.otieno` again if needed |
