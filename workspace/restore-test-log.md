# Restore test log -- the practice business (2026-11-23)

A backup nobody has restored from is a hope.  'It worked' is not an entry: say what did not come back,
or what you checked to be sure nothing is missing.

| # | Restore | What I deleted or suspended | How I restored it | How long | What came back | What did not come back |
|---|---|---|---|---|---|---|
| 1 | The suspended user, restored whole | Suspended practice user `amina.otieno` in `/Trainees/madlin/Staff` and revoked active sessions | Admin console > Directory > Users > selected `amina.otieno` > Reactivate user | 2 mins | User account profile, OU placement, group memberships, email address, and calendar access returned intact | Active browser sign-in sessions and third-party app OAuth tokens did not come back (user had to re-authenticate) |
| 2 | A file from the shared drive's trash | Deleted test operations spreadsheet from the company Shared Drive | Opened Shared Drive > Trash > selected deleted file > Restore | 1 min | File content, folder location inside the Shared Drive, and Shared Drive member permissions came back | Any prior direct share links created before moving into the Shared Drive did not come back |
| 3 | A user's deleted file, restored by the admin | Deleted a file from the practice user's My Drive and emptied user Trash | Admin console > Directory > Users > user profile > Restore data > selected Drive and date range | 3 mins | The deleted file reappeared in the user's My Drive root/folder with its original content intact | External collaborator sharing permissions and comment notifications from before permanent deletion did not come back |
| 4 | One file from the export | Extracted `BusinessFiles/customer-list.csv` and `BusinessFiles/price-list.csv` from `company-backup.tar.gz` into `restore-test` | Ran `tar -xzf backups/company-backup.tar.gz -C restore-test/` and verified file contents and row counts | 1 min | Both CSV files (`customer-list.csv` 63 bytes and `price-list.csv` 48 bytes) extracted cleanly with full data intact | Original archive `root:staff` group ownership metadata did not come back under non-root restore (`madlin:madlin` applied instead) |
