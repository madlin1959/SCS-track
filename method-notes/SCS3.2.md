1. I set up sharing boundaries, a shared drive for team files, 2-Step Verification enforcement, device rules, and offboarding ownership transfers for the practice business.
2. Every console change was written in admin-change-log.md before clicking in the Admin Console so every action can be audited or rolled back.
3. I drafted the sharing and retention policy with AI assistance and audited every line against the actual Google Workspace edition settings, replacing unverified retention claims with "to be checked".
4. I tested four distinct restore paths (suspended user, shared drive trash, user Drive trash, and archive export) and recorded what came back versus what metadata or sharing did not return.
5. Keeping the offboarding export and audit logs in ~/scs/evidence/scs3.2 outside the public repo ensured no client or user details leaked into Git.
6. What I might be wrong about in this client's data: I may have assumed all active client files live inside the main Shared Drive rather than personal My Drives or local folders; I would find out by checking the Drive audit log and surveying staff before offboarding anyone.
