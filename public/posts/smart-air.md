Documented on 03/11/2025

An Android App dedicated to help child understand and handle Asthma

- [github repo](https://github.com/Kyaw-Thiha/b07-project)

Some screenshots of our final product:

![img1](/assets/posts/Smart-Air/img1.png)
![img2](/assets/posts/Smart-Air/img2.png)
![img3](/assets/posts/Smart-Air/img3.png)
![img4](/assets/posts/Smart-Air/img4.png)
![img5](/assets/posts/Smart-Air/img5.png)
![img6](/assets/posts/Smart-Air/img6.png)
![img7](/assets/posts/Smart-Air/img7.png)
![img8](/assets/posts/Smart-Air/img8.png)

### project description

This app allows users to choose a role of:

- parent
- child (eg the user with asthma)
- provider

Where user can signup/login as one of the roles, and link with other users correspondingly.

As a child, you can:

- log medicine
- do daily check in
- get technique helper
- run PEF test
- get emergency help (RESCUE)
- get badges based for consistently staying active

As a parent you can:

- manage/view data from each child
- manage medicine inventory
- add action plan
- invite provider(s)
- manage info available to each provider, and generate report for them correspondingly

As a provider you can:

- check shared info from parent in form of a report

([demo link](https://www.youtube.com/watch?v=X_T_P1A1J-4))

### tools/methodologies used throughout the project

This project is completed from a team of 5 people, in three weeks, utilizing the following tools

- Firebase Authentication
- Firebase Realtime Database
- Android Studio/Android SDK (java + xml)
- JUnit test
- Model View Process
- Scrum using Jira
- Object Oriented Programming

### contributors

All of these people (including me) worked really hard for this project! Checkout their Github if you are interested.

- https://github.com/2192375d (me)
- https://github.com/Kyaw-Thiha
- https://github.com/najjalowe
- https://github.com/Tina-wanjun
- https://github.com/J0thame

### scrum

To co-operate for this project, we decided to use Scrum's methodology.

Here is the work agreement we had:

![img12](/assets/posts/Smart-Air/img12.png)

Essentially, our Sprint Meeting occurs weekly on every Thursday, and we have two more mandatory meetings every Tuesday + Sunday.

I wrote the work agreement and carefully went through each of them with the team before the project began.

And throughout the process of scrum, we made good use of Jira to write track our progress.

### the beginning

Throughout this project, I was primarily responsible for organizing the team meetings and floating around with frontend and backend.

Right before the first sprint meeting, to motivate the team, I decided to take initiative and create a sample login page. Mainly to motivate the team as none of us had previous Android experience.

![img9](/assets/posts/Smart-Air/img9.png)

(We end up discarding this theme and went for a more lightweight one)

In the mean time, some team member made a simple template + set of instruction for how our app's pages will be connected:

![img10](/assets/posts/Smart-Air/img10.png)
![img11](/assets/posts/Smart-Air/img11.png)

Seeing the team is ready to work, I started the first sprint meeting

### sprint 1

During the first meeting, I started by explaining to the team how to build a simple login page. More specifically, how to make an activity and connect the buttons on the .xml file with the corresponding .java file

After this, we discussed around each person's job and I end up been assigned to the work of completing the signup/login system.

To achieve this, I started by creating the pages with the corresponding buttons/textEdit.

Next I connected the signup, login and reset password pages with our Firebase Database using Firebase Authentication. (zoom in if necessary)

![img13](/assets/posts/Smart-Air/img13.png)
![img14](/assets/posts/Smart-Air/img14.png)

To keep track of usertype and child's age, I made use of shared preference

![img15](/assets/posts/Smart-Air/img15.png)

Here are all the activities for the login system of the app:

![img16](/assets/posts/Smart-Air/img16.png)

### sprint 2 and 3

During sprint 2 and 3, my job was primarily connecting the app with the backend, while conducting the team to work on their own part of the page.

The way how our team co-orperates between front/backend, is that the front-end worker completes the page with it's functionality. And leave a TODO comment to indicate spots in the code that requires backend connection.

![img23](/assets/posts/Smart-Air/img23.png)

To connect the backend (that is, Realtime Firebase Database), I decided to follow this view model:

![img17](/assets/posts/Smart-Air/img17.png)
![img18](/assets/posts/Smart-Air/img18.png)
![img19](/assets/posts/Smart-Air/img19.png)
![img20](/assets/posts/Smart-Air/img20.png)
![img21](/assets/posts/Smart-Air/img21.png)
![img22](/assets/posts/Smart-Air/img22.png)

After a lot of tweakings, I end up using those classes, but they function similar to the diagram above; in terms of how they are connecting the views with the services.

![img24](/assets/posts/Smart-Air/img24.png)

After I connected the backend, and some final debuggings + testings. The testings where done using JUnit tests.

### conclusion

This is my first long term team work project and this experience taught me a lot in both

- hard skills: Android Development, Firebase
- soft skills: leadership, communication and Jira usage

More specifically, in terms of soft skills, I am now capable of

- assigning fair workload to the team
- motivating the team in working in an enthusiastic way
- taking initiative and making correct decisions when facing unexpected situations
- making correct usages of Jira to facilitate Scrum

One last thing to mention. Similarly to me, most of my teammates are also beginners in teamwork for software development, and I'm really happy to share this first time learning experience with them.
