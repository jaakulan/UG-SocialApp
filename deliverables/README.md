# Uniting Gamers App/Team Error 404

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical.

## Description

- Provide a high-level description of your application and it's value from an end-user's perspective
- What is the problem you're trying to solve?
- Is there any context required to understand **why** the application solves this problem?

#### Answer
We aim to build a Linkedin-esque social network for gaming in the form of a mobile app. This product will be a gamer-based interface for gamers to connect with one another, with a focus on recreational gaming. Out of the many social media existing today, none serve as platforms for gamers to get to know others gamers with similar interests who might be able to play with them. Our application, Uniting Gamers, will seek to connect gamers across the world.

The vision of this application is to allow gamers to break out of the "dark room" stigma, and allow those who desire to play socially. This will also seek to bridge the gap between gamers of different backgrounds, to allow gaming culture to be more inclusive. By connecting gamers through our app, we believe gaming can be made more social and inclusive to different groups of people non-traditionally associated with gaming (women, kids, parents, elderly).

## Key Features

- Described the key features in the application that the user can access
- Provide a breakdown or detail for each feature that is most appropriate for your application
- This section will be used to assess the value of the features built

#### Answer

For our MVP, we will be incorporating 2 main features:

- (Main objective of D2) Players will have their own profiles which shows their info (games, stats, etc). This will allow other players to see which games someone likes to play, where they are located, how to connect with them, etc.

- Forums for gamers to communicate on, a direct messaging system might also be viable. This will allow gamers to connect with each other and coordinate gaming through our application.

Additionally, the following feature is no longer a part of the MVP, but we hope to try to implement it/ it is part of the partner organization's vision for this application:

- Badge/Trophy system, which will award players badges which can be displayed on their profile as well as show gaming rankings. Players can hand out these badges to other players for attributes such as good sportsmanship etc. They will be similar to Linkedin recommendations and will help create reliable and safe profiles.

Lastly, in order to keep track of our user stories and our progress related to these features, we created a Jira board to assign tasks and user stories to our team members: [error404-unitinggamers.atlassian.net](error404-unitinggamers.atlassian.net)

## Instructions

- Clear instructions for how to use the application from the end-user's perspective
- How do you access it? Are accounts pre-created or does a user register? Where do you start? etc.
- Provide clear steps for using each feature described above
- This section is critical to testing your application and must be done carefully and thoughtfully

#### Answer

The current deliverable application is deployed to [expo.io](expo.io), a temporary deployment platform for development purposes before the application can get published on official app stores.

1. Follow [https://expo.dev/@err404/unitinggamers](https://expo.dev/@err404/unitinggamers)
2. Download the [Expo Go App](https://expo.dev/client) from Google Play or another Android application store and scan the QR code shown.

OR
2. Open an mobile emulator (such as emulators found on the Android Studio AVD) and click "Open on Android/Emulator".

OR
2. Select "open project in the browser" to view the app on your browser *(warning: may not display correctly in all browsers, it is highly recommended to follow one of the above methods)*

Our current deliverable consists of the user's profile page, which is where you will land after the above instructions. Scroll to view all components of the profile. You will be able to see the user's name, username, profile picture, background picture, location, biography, games played, other social media usernames and trophies.

Note: the displayed profile is based on temporary dummy data, since the login/signup page, databases and APIs have yet to be integrated.

## Development requirements

- If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
- Briefly describe instructions for setting up and running the application (think a true README).

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

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

- Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
- If applicable, specify any naming conventions or standards you decide to adopt.
- Describe your overall deployment process from writing code to viewing a live application
- What deployment tool(s) are you using and how
- Don't forget to **briefly explain why** you chose this workflow or particular aspects of it!

#### Answer
We have a development branch off of main (called dev), which is what would be deployed at the end of our D2. Team members must implement their user stories on branches from dev, then must create pull requests in order for their code to be accepted onto development. Branches must be named appropriately to the user story the developer is working on. Therefore, dev is the branch where all code is tested and approved, but not yet deployed. Main will be the branch where all code is deployed. Pull requests must be approved by at least two people (other than the developer themselves) before merging to dev, and all pull requests are managed through GitHub.

We are using expo.io for deployment, since it is efficient, easy and made for the exact purpose for mobile developers to see and test the deployed app. We chose an agile workflow for the purposes of dealing with issues/strengths as they come up in the lifecycle of our development. Our main goals were to streamline productivity and ensure that no developer was stuck for too long on any one task.

## Licenses

Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

- What type of license will you apply to your codebase?
- What affect does it have on the development and use of your codebase?
- Why did you or your partner make this choice?

#### Answer

We decided to apply a MIT license to our codebase. The use of our codebase will be will be free of charge to any person obtaining a copy of this codebase. However, that does not necessary imply our code is open source, but that it is free to use and free to distribute only with the permission of the license holder(s). This will allow our partner, Uniting Gamers, to be the license owner and have the ability to share the code to whoever they need, as well as freely use the code for upcoming iterations of the application. That way, in the future if they so please, our code will but under a MIT license, but there's can have a different license for business purposes as need be. This also benefits the members of our group, as we are able to share our iteration of the code freely with employers and those looking to see the work we've done, but not sell the code for business purposes. We chose this license based on the idea that React itself is under an MIT license and it gives the holders the most freedom to use the code as they wish, which is what was decided upon between our team and our partner.
