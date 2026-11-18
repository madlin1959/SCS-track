# Access map -- the reference shop (an invented business) -- SCS3.1

Who should have which access, and why?  One row per person, or per identical job.
Groups are people; units are settings; every person is in one unit and many groups.
Why: the three questions in one line -- what the job needs, what goes wrong with more, who decided.
This map is of an invented business and may be committed.  Your client's map never comes here:
it lives in the client folder (Clients, in your Windows SCS folder).



Partner: ____.  One person with more than the job needs, or "none" and why: ____.
Person (job)	What the job needs	OU	Groups	Admin role	Why
The owner	Business reports and business settings	/Staff	Owners	empty	Needs to manage the business; extra access is unnecessary; owner decided.
The accountant	Billing and financial records	/Staff	Accountants	none	Needs financial information; extra access risks other settings; owner decided.
The shop manager	Manage shop work and staff	/Staff	Shop-Managers	none	Needs to organise shop work; extra access risks account settings; owner decided.
Counter staff (four)	Serve customers and use the counter system	/Front Desk	Counter-Staff	none	Needs customer service tools; extra access risks private records; manager decided.
The new starter	Basic counter work	/Front Desk	Counter-Staff	none	Needs basic work access; extra access is not needed; manager decided.
Welders (three)	Workshop work information	/Workshop	Welders	none	Need workshop information; extra access risks business records; manager decided.
Drivers (two)	Delivery and transport information	/Drivers	Drivers	none	Need delivery information; extra access risks other records; manager decided.
Me (the admin)	Administer users, groups and units	/Staff	Admins	super-admin	Needs to manage the sandbox; extra access is not given to other workers; trainer decided.
