
# Steps to install and run your project. Assume the user will be on OSX but if you do not have access to an OSX machine, provide the needed steps to run your app on any other OS.

- run the following commands: 
1. git clone https://github.com/calooper/PE.git
2. cd PE/911IncidentEnrichment/
3. npm install
4. ng serve

- open http://localhost:4200/incident-details
- Click the 'Browse Files' button
- Select an appropriate .json file
- Click "Add to map"
- You should be able to see markers of the incident, the responding units, and a panel with incident and weather details


# What improvements would you make or best practices would you utilize if you had double the time?
- I would enhance the UI experience by adding better visualizations to the map, rather than just a parsed JSON.
- Improve error handling and data validation
- Define types a little better
- use a .env
- Add a snackbar for user feedback.
- Add test coverage.
- Add e2e tests.
- Add user documentation (how-to and help guide)
- Would be nice to containerize it


# About how much time did you spend on the project?
~ 4 hours to get it to MVP and then another couple making it look better. 