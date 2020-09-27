TODO: 

To create an interactive dashboard which pinpoints potential COVID-19 patients by location (sample: https://covid19.yokeserver.com/). Sample patient is provided in the Mongo DB Dump collection called 'requests', patient symptoms are provided in the collection called 'symptoms'.


Steps
---
- Setup the database using the sample database on mLab (or any other free provider of your choice)
- Set up a NodeJS project which has two (2) routes
	- A route which pulls patient requests based on date ranges and symptoms
	- A route which pulls a list of symptoms
- Set up the dashboard using any javascript framework of your choice (Vue, React, Angular..etc) which displays the patient request data on the map as illustrated in the sample
- Dashboard users should be able to filter results by date and symptom
- Feel free to add any improvements you feel are needed to the dashboard

Notes
---
Request data dates in the database ranges March 2020 - May 2020
If you're unable to setup the database, please use the one which we've already setup on mLab
Connect via shell: mongo "mongodb+srv://cluster0.c0vpq.mongodb.net/covid" --username dbDev 

database: covid
username: dbDev
password: dbPass

Due date: Close of business on Monday 28/9/2020

Deliverables
- link to working dashboard
- links to git repos (dashboard and API)
- submit via email to louisa@yokesolutions.com
