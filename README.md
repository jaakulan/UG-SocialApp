# Uniting Gamers Mobile App

> This application was initally worked on by the members of Team 404: Error not Found, as part of the University of Toronto's Fall 2021 CSC301 class project. The students who wrote the first iteration of this application are Alexandra Thompson, Arjun Sahni, Jaakulan Subeethakumar, Hamzah Shahid, Herjot Dhaliwal, Nada El-Falou and Thomas Tsangaris.

## Description

This mobile app is a Linkedin-esque Social Network for Gamers, focusing on an gamer-based interface to help gamers connect with one another.

Out of the many social media existing today, none serve as platforms for gamers to get to know others gamers with similar interests who might be able to play with them. Our application, Uniting Gamers, will seek to connect gamers across the world.

The vision of this application is to allow gamers to break out of the "dark room" stigma, and allow those who desire to play socially. This will also seek to bridge the gap between gamers of different backgrounds, to allow gaming culture to be more inclusive. By connecting gamers through our app, we believe gaming can be made more social and inclusive to different groups of people non-traditionally associated with gaming (women, kids, parents, elderly).

## Key Features

- SignUp/SignOut
- View Profile
- Update Profile Pictures
- Update Gamecards on Profile
- View Friends List
- Logout and delete account

## Future Features
- Searching for friends + adding friends
- Rearranging gamecards on profile
- Adding trophy/badge system
- Forums
- Private Messaging

## Instructions on running the application

The current application is deployed to [expo.io](expo.io), a deployment platform for development purposes before the application can get published on official app stores.

1. Follow [https://expo.dev/@err404/unitinggamers](https://expo.dev/@err404/unitinggamers)
2. Download the [Expo Go App](https://expo.dev/client) from Google Play or another Android application store and scan the QR code shown.

OR
2. Open an mobile emulator (such as emulators found on the Android Studio AVD) and click "Open on Android/Emulator".

OR
2. Select "open project in the browser" to view the app on your browser *(warning: may not display correctly in all browsers, it is highly recommended to follow one of the above methods)*

Our current deliverable consists of the user's profile page, which is where you will land after the above instructions. Scroll to view all components of the profile. You will be able to see the user's name, username, profile picture, background picture, location, biography, games played, other social media usernames and trophies.

Note: the displayed profile is based on temporary dummy data, since the login/signup page, databases and APIs have yet to be integrated.

## Development requirements

#### Running frontend
Developers would require Node (npm), React Native and Flask to run the application.

To test the app, the developer would also need to view it directly on an emulator, on a physical device, on the web *(not reliable, as this is not the intended deployment tool for our product)*.

Here are the instructions for running our application as a developer:

1. First, clone our repo from [https://github.com/csc301-fall-2021/team-project-20-uniting-gamers](https://github.com/csc301-fall-2021/team-project-20-uniting-gamers)

2. Next, checkout the deployment branch, by using the command `git checkout main` (if not already there)

3. Then, navigate to the frontend development side, by using the command `cd UnitingGamersFE`

4. Now, install the necessary packages by running the command `npm install`

5. Go ahead and run the application using `npm start`

6. At this point, the information for running the application should appear on both your command terminal and your browser at a local port.

7. Now choose one of the following: Download the [Expo Go App](https://expo.dev/client) from Google Play or another Android application store and scan the QR code shown.

OR

7. Open an mobile emulator (such as emulators found on the Android Studio AVD) and click "Open on Android/Emulator".

OR
7. Select "open project in the browser" to view the app on your browser *(warning: may not display correctly in all browsers, it is highly recommended to follow one of the above methods)*

8. Celebrate because you successfully opened the application as a developer.

#### Running the server
Here are the instructions for running the server
1. Navigate to the UnitingGamersBE folder
2. Make sure node and npm are installed, then run "npm install" to install the project dependencies
3. run "node server.js", this will start the server on localhost
4. After this requests can be made to the different API endpoints
5. Documentation for the server is in APIDocumentation.txt (in the UnitingGamersBE folder).

## Deployment and Github Workflow

We have a development branch off of main (called dev), which is what would be deployed at the end of our D2. Team members must implement their user stories on branches from dev, then must create pull requests in order for their code to be accepted onto development. Branches must be named appropriately to the user story the developer is working on. Therefore, dev is the branch where all code is tested and approved, but not yet deployed. Main will be the branch where all code is deployed. Pull requests must be approved by at least two people (other than the developer themselves) before merging to dev, and all pull requests are managed through GitHub.

We are using expo.io for deployment, since it is efficient, easy and made for the exact purpose for mobile developers to see and test the deployed app. We chose an agile workflow for the purposes of dealing with issues/strengths as they come up in the lifecycle of our development. Our main goals were to streamline productivity and ensure that no developer was stuck for too long on any one task.

## Licenses

This code has applied a MIT license to the codebase. The use of our codebase will be will be free of charge to any person obtaining a copy of this codebase. However, that does not necessary imply our code is open source, but that it is free to use and free to distribute only with the permission of the license holder(s). This will allow our partner, Uniting Gamers, to be the license owner and have the ability to share the code to whoever they need, as well as freely use the code for upcoming iterations of the application. That way, in the future if they so please, our code will but under a MIT license, but there's can have a different license for business purposes as need be. This also benefits the members of our group, as we are able to share our iteration of the code freely with employers and those looking to see the work we've done, but not sell the code for business purposes. We chose this license based on the idea that React itself is under an MIT license and it gives the holders the most freedom to use the code as they wish, which is what was decided upon between our team and our partner.
