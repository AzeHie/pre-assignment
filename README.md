# solita pre-assignment

Frontend: React & Typescript

Backend: nodeJS & Express

Database: Mongo

Styling: CSS

---

PROJECT LOG:
  - I have "PROJECT LOG" - file attached to the project. If you are interested for more information than just commits, please check it up! It's kind of diary, where       I've explained what I've done and when, what issues I had and how I solved them - day by day.
  - It might look like I've been working for this project for very long time, but actually I've used only around 1-3h / day on it. I would like to do lot of more in a day, but since I have full day job, family, and other hobbies - it's not possible. But however, this has been very good practice and repeating the things I've learned in past couple years for me.

IMPORTANT NOTE ABOUT THE DATA SETS FOR THIS ASSIGNMENT:
  - I imported only one of three data sets to mongoDB, because it's free up to 512mb and there was lot of more data in those sets.
  - Deleted a lot of documents without coveredDistance field.
  - There was also lot of documents multiple times, I didn't do anything about it.

ABOUT THE FEATURES I'VE IMPLEMENTED TO THIS PROJECT
  - Everything of recommended features are implemented to the project. I also added most of additional features and as extra I added also UI's and endpoints for adding new stations and journeys.

IMPORTANT NOTE ABOUT REACT.STRICT MODE:
  - Since strict mode renders component twice when first time rendered on the screen (atleast/only(?) when in dev-mode), there is some problems showing loading spinner and some loading texts on the first time when component is rendered. And since that and only because of that you should remove <React.StrictMode> tags in the index.tsx file when running app in dev-mode! Everything else is working just fine also when strict mode is on..

ABOUT JOURNEYS SEARCH:
  - Journeys search is not yet working as expected, im working on it currently. Searching in the stationlist is working good, and everything else in the app should be working as expected. 

HOW TO INSTALL AND TEST THE APPLICATION:
- App is built and tested in windows, not sure how it works with linux. Node has to be installed on the computer.

1. Download zip
2. Extract files
3. Add .env file to the backend's root folder (easiest way to do that is vs-code or some other IDE), I'll give you code for that file somehow/somewhere (includes some passwords to the database etc).
4. Navigate to backend folder of app with vs-code terminal or cmd => install with command "npm install"
5. Navigate to frontend folder of app with vs-code terminal or cmd. => install with command "npm install"
6. Start frontend/ui: type "npm start" in frontend folder => starts react app in localhost:3000
7. Start backend: type "npm start" in backend folder => starts nodeJS backend in localhost:5000
8. Open localhost:3000 (actually should happen automatically) in browser => app should be running!
9. LoadingSpinner / loading texts not working correctly in dev-mode because of that react.strict mode "twice rendering" thing. Remove <React.StrictMode> tags in the index.tsx if you like to get better user experience also in dev-mode.

