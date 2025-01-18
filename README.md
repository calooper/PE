
# Steps to install and run your project. Assume the user will be on OSX but if you do not have access to an OSX machine, provide the needed steps to run your app on any other OS.

- run the following commands: 
- run the following commands: 
1. `git clone https://github.com/calooper/PE.git`
2. `cd PE/911IncidentEnrichment/`


NOTE: you may need to install node to run npm
  - `nvm install node` (or whichever packer manager you're using)
3. `npm install`

NOTE: you may need to install angular to run ng
- `nvm install -g @angular/cli`
4. `ng serve`

(I have only tested in Google chrome)

- open: http://localhost:4200/PE/incident-details
- Click the 'Browse Files' button
- Select an appropriate .json file
- Click "Add to map"
- You should be able to see markers of the incident, the responding units, and a panel with incident and weather details


# What improvements would you make or best practices would you utilize if you had double the time?
- I would enhance the UI experience by adding better visualizations to the map, rather than just a parsed JSON.
- Adding in custom markers for the map.
- Add the ability to toggle between a couple TMS servers )(open steet, open topo, etc..)
- Improve error handling and data validation, especailly for the parsing
- use a .env
- Add a snackbar for user feedback.
- Add test coverage.
- Stretch goal: add in a user help guide.
- Would be nice to containerize it
- I was aiming to use most of the newer angular practices (stand-alone components, newer ngIf/ngFor syntax, signals), which I am still getting used to, but I would have liked to implement that more. 


# About how much time did you spend on the project?
~ 4 hours to get it to MVP and then another couple making it look/ function a little better. And then about an hour later tonight making sure it worked on my old Mac, which took awhile to get things installed. Overall, this was fun and I enjoyed getting to start a project from scratch.  

![image](https://github.com/user-attachments/assets/6d71f11f-7e00-485e-952a-02f5bf2a5126)

![image](https://github.com/user-attachments/assets/ad9a4045-4563-49e1-8d12-95dc2ec839ce)

![image](https://github.com/user-attachments/assets/60f9a11f-4aaa-45f6-bb9b-7433dc99f6bf)


