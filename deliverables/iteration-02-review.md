# Error 404: Team Name not Found

 > _Note:_ This document is meant to be written during (or shortly after) your review meeting, which should happen fairly close to the due date.      
 >      
 > _Suggestion:_ Have your review meeting a day or two before the due date. This way you will have some time to go over (and edit) this document, and all team members should have a chance to make their contribution.


## Iteration 02 - Review & Retrospect

 * When: **Friday, October 29th @ 7pm EST**
 * Where: **Online, through our team's Discord**

## Process - Reflection


#### Q1. Decisions that turned out well

List **process-related** (i.e. team organization and how you work) decisions that, in retrospect, turned out to be successful.


 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Explain why (i.e. give a supporting argument) you consider a decision to be successful.
 * Feel free to refer/link to process artifact(s).

#### Answer

There were several decisions that did result in good communication and efficient progress. The most important decision was to create high-fidelity mockups of our planned mobile application using Figma. In deliverable 1, we were given the option to rather create rough sketches or high-fidelity layouts using software. We started with rough sketches, but thankfully a member on our team (Alexandra) has extensive experience crafting mockups in Figma. Creating these designs helped the frontend team when designing the application, since it leaves little to the imagination which saves us time in the development process since the frontend team could focus on coding. The high-fidelity designs also gave Josh (our project partner) an accurate idea of what the final product will resemble that a rough sketch could never convey. This was a great asset to us in our review meeting, since the application we demonstrated was nearly identical visually to the Figma mockups we had sent Josh weeks prior, which had made Josh very happy to see. We will be sure to create high quality mockups before developing any new feature we decide upon.

The use of an agile planning software in the form of Jira became an integral part of our development process. Jira allows all members to track what tasks have yet to be started, what tasks are in progress and how many of them have been completed. The service also states which member is responsible for which component of the software. Through all the chaos and headaches that occur during the development process, Jira allowed us to remember the bigger picture and to maintain a goal oriented mindset, leading to higher productivity. Jira also gave members a way to check on others if they need help. For instance, if a task has been set to “ongoing” for a while, members could reach out to offer help. Also, seeing a task as “in progress” or “complete” gives team members an indicator to arrange their schedule in anticipation of an incoming pull request.   

Inviting Josh (our partner representative) to our group Discord server was also a great choice in hindsight. This quick communication channel allowed for meetings to be arranged conveniently, as we bypass delays between responses that come with formal emails. It was also a bonus that Discord was Josh’s preferred communication service. Using Discord also allowed us to send our partner representative rough sketches and high-fidelity Figma designs based on feedback he had given us after our meetings. Since Josh frequently uses Discord, he would always send us feedback in a timely manner, speeding up the development process.

Another good decision was to have weekly meetings. Specifically, we have group meetings every Wednesday and meetings between the product owners (Alexandra and Thomas) and Josh (as well as whoever else can join) on Friday evenings. Team meetings allowed for backend and frontend subgroups to express their concerns to each other and make the connection between the two more clear. This meeting also served as a time of planning where we would create and assign tasks on Jira for the next sprint. Weekly meetings with our partner representative, Josh, proved to be a benefit since Josh usually has more to say over voice than text chat. Voice chat also allowed for clearer discussion, lending itself to be better for Josh and the product owners to bounce ideas off each other.      


#### Q2. Decisions that did not turn out as well as we hoped

List **process-related** (i.e. team organization and how you work) decisions that, in retrospect, were not as successful as you thought they would be.

 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Explain why (i.e. give a supporting argument) you consider a decision to be unsuccessful
 * Feel free to refer/link to process artifact(s).

#### Answer

The biggest issue we faced as a group was deadlines. The vast majority of our pushes were made in the latter half of the assignment. This is not ideal as it was a scramble to understand everyone's implementation nearing the assignment. This was a problem with the majority of our team members, however, not all. This was a result of the decision being made by splitting all of the tasks up at the beginning and setting the deadline for the due date. In the future, the better approach would be to set more intermediate deadlines that are further more enforced by our team's Scrum Master would prevent last-minute panic and scrambling.

The next largest issue we faced was in miscommunication. One of our frontend developers followed the wrong prototype version, after a new prototype was made after a partner meeting based on the partner's recommended changes and tweaks. This was the fault of both the developer, for failing to follow the correct requirements, and the product owners for failing to convey the information in a clear manner. To ensure that frontend developers follow the correct prototype, all future prototypes and design templates will be made in Figma to create a clear image of what the application should look like. This creation will be done after D2 but before the start of D3.

Our most minor issue was the following of protocols with code reviews. As a reminder, our protocol is for two other developers to approve a PR request before pushing it to branch. However, often times what happened is that two frontend developers would approve a frontend user story, as opposed to a backend user approving the user story. This led to a clear disconnect between what the frontend was doing and what the backend was doing. In the future, we can propose that each PR request must be approved by at least one frontend developer and at least one backend developer.


#### Q3. Planned changes

List any **process-related** (i.e. team organization and how you work) changes you are planning to make (if there are any)

 * Ordered from most to least important.
 * Explain why you are making a change.

#### Answer

We plan to impose standup meeting twice a week involving all team members in order to gauge everyone’s progress, allowing anyone to voice concerns/difficulties that they ran into and a chance for everyone to describe what they are working on next. This is something we planned but did not follow rigidly, as some weeks we would only have 1 standup meeting. We think 2 standups per week would be better since the project is moving at a faster pace than anticipated, so more discussion amongst subgroups (backend and frontend) is needed to sort through encountered issues.

We have also decided to require pull requests on the dev branch of our git repository, since all code that is pushed to it should be looked over by another group member. Enforcing pull requests on dev allows for all code that is pushed there to be double checked, while not affecting the main branch which will be used near the end of development. We will also require that everyone works on a branch off dev with a branch name indicative of the feature they are working on. Note that this change isn’t completely new, as it is something we have started enforcing midway through working on D2.

That is all the changes we plan to make to our development process. We are confident in our other practices as development has been on a good pace thus far.   


## Product - Review

#### Q4. How was your product demo?
 * How did you prepare your demo?
 * What did you manage to demo to your partner?
 * Did your partner accept the features?
 * Were there change requests?
 * What did you learn from the demo from either a process or product perspective?
 * *This section will be marked very leniently so keep it brief and just make sure the points are addressed*

#### Answer

We used our weekly group meeting timeslot to prepare our demo. We decided to showcase only the frontend with placeholder data so that our product partner (Josh) could see the design we prepared as well as some of the functionality. Placeholder data (or “dumby” data) was used since we have not yet connected the backend with our frontend. We managed to demo the app via screenshare on Discord through using an emulator to simulate a mobile device. The app we showed only included the profile page (which is the MVP of the project). Our partner did accept most of the features, since our graphical user interface (GUI) is nearly identical to the high-fidelity mockups Josh approved of before. The only change request from Josh was to reorganize the games section, which we were aware of before, but the revised layout had got lost in translation amongst the frontend team (this is another reason why we plan to have standup meetings twice a week from now on). From this product demo, we learned that it is okay if we do not show integrated frontend and backend functionality right away, as Josh is more interested in the GUI’s design. This in turn also taught us to prioritize frontend development as it is something that Josh can give us feedback on. We also learned that developing and demoing the frontend depends on more than just the code; it also depends on which mobile operating system we use to show the application.         
