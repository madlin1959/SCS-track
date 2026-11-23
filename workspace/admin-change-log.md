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
| 1 | 11:15 | Admin console > Apps > Google Workspace > Drive and Docs > Sharing settings > Sharing options | `/Trainees/madlin/Staff` external sharing permissions | Restrict external sharing to named recipients so client files cannot be shared openly outside the business | Verified external sharing setting saves for `/Trainees/madlin/Staff` OU | Set external sharing back to default in Drive Sharing settings |
| 2 | 11:18 | Admin console > Apps > Google Workspace > Drive and Docs > Sharing settings > Link sharing default | `/Trainees/madlin/Staff` newly created Drive files | Turn off default "Anyone with the link" visibility so new files stay restricted unless explicitly shared | Created a test doc and confirmed link access defaults to Restricted | Revert link sharing default in Drive Sharing settings |
| 3 | 11:22 | Admin console > Apps > Google Workspace > Drive and Docs > Manage shared drives > Create shared drive | Practice business team Shared Drive for `/Trainees/madlin/Staff` | Store business records in a company-owned Shared Drive rather than individual My Drive folders | Verified Shared Drive appears in Drive for `/Trainees/madlin/Staff` | Remove members and delete empty test Shared Drive |
| 4 | 11:25 | Admin console > Apps > Google Workspace > Drive and Docs > Manage shared drives > Manage members | Staff and manager roles on the practice Shared Drive | Assign Content Manager to staff and Manager to the supervisor so no single user owns team files | Checked member list on Shared Drive and verified permissions | Remove or adjust member roles on the Shared Drive |
| 5 | 11:30 | Admin console > Security > Authentication > 2-Step Verification | `/Trainees/madlin/Staff` organizational unit | Enforce 2-Step Verification on all staff accounts to protect sign-ins against stolen passwords | Verified 2SV enforcement is ON for `/Trainees/madlin/Staff` and confirmed 2-step prompt | Turn off 2SV enforcement on `/Trainees/madlin/Staff` OU |
| 6 | 11:33 | Admin console > Security > Authentication > 2-Step Verification > Allowed methods | `/Trainees/madlin/Staff` 2-step methods and backup codes | Allow authenticator/phone verification and generate printed backup codes for recovery without SMS | Verified practice user enrolled in 2SV and printed backup codes offline | Revert allowed 2SV methods to default |
| 7 | 11:37 | Admin console > Devices > Mobile and endpoints > Settings > Universal settings > Password and screen lock | Devices accessing `/Trainees/madlin/Staff` accounts | Require screen locks on devices accessing company accounts so lost hardware stays locked | Confirmed screen lock requirement is active under Universal device settings | Set screen lock enforcement back to off |
| 8 | 11:40 | Admin console > Security > Access and data control > Google Cloud session control | `/Trainees/madlin/Staff` web session duration | Set bounded web session duration so unattended browser sessions require re-authentication | Verified session duration policy applies to `/Trainees/madlin/Staff` | Reset Google Cloud session control to default |
| 9 | 11:45 | Admin console > Directory > Users > Suspend user and revoke sign-in sessions | `amina.otieno` (offboarding practice leaver in `/Trainees/madlin/Staff`) | Immediately block sign-in access when a staff member leaves without deleting their files | Tested sign-in as `amina.otieno` in a private window and confirmed access is refused | Reactivate/un-suspend `amina.otieno` in Directory > Users |
| 10 | 11:50 | Admin console > Apps > Google Workspace > Drive and Docs > Transfer ownership | Transfer My Drive files from `amina.otieno` to manager in `/Trainees/madlin/Staff` | Move ownership of the leaver's files to the manager so business records remain accessible | Confirmed transferred folder in manager's Drive and verified ownership transfer in Drive log | Transfer ownership of the folder back to `amina.otieno` |
| 11 | 12:15 | Admin console > Directory > Users > Reactivate (un-suspend) user | `amina.otieno` in `/Trainees/madlin/Staff` | Return the practice OU to whole active state at the end of the lab drill | Verified `amina.otieno` is Active in Directory > Users export with zero suspended users | Suspend `amina.otieno` again if needed |
