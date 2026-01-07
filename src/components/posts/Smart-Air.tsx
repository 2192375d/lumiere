const ASSET_SOURCE = "/assets/posts/Smart-Air/";

export default function SmartAir() {
  return (
    <section>
      Documented on 03/11/2025
      <br />
      An Android App dedicated to help child understand and handle Asthma
      <br />
      <ul>
        <li><a href="https://github.com/Kyaw-Thiha/b07-project">github repo</a></li>
      </ul>
      Some screenshots of our final product:
      <br />
      <img className="postImg" src={ASSET_SOURCE + "img1.png"} />
      <img className="postImg" src={ASSET_SOURCE + "img2.png"} />
      <img className="postImg" src={ASSET_SOURCE + "img3.png"} />
      <img className="postImg" src={ASSET_SOURCE + "img4.png"} />
      <img className="postImg" src={ASSET_SOURCE + "img5.png"} />
      <img className="postImg" src={ASSET_SOURCE + "img6.png"} />
      <img className="postImg" src={ASSET_SOURCE + "img7.png"} />
      <img className="postImg" src={ASSET_SOURCE + "img8.png"} />
      <br />
      <h3>project description</h3>
      This app allows users to choose a role of:
      <ul>
        <li>parent</li>
        <li>child (eg the user with asthma)</li>
        <li>provider</li>
      </ul>
      Where user can signup/login as one of the roles, and link with other users correspondingly.
      <br />
      As a child, you can:
      <br />
      <ul>
        <li>log medicine</li>
        <li>do daily check in</li>
        <li>get technique helper</li>
        <li>run PEF test</li>
        <li>get emergency help (RESCUE)</li>
        <li>get badges based for consistently staying active</li>
      </ul>
      As a parent you can:
      <br />
      <ul>
        <li>manage/view data from each child</li>
        <li>manage medicine inventory</li>
        <li>add action plan</li>
        <li>invite provider(s)</li>
        <li>manage info available to each provider, and generate report for them correspondingly</li>
      </ul>
      As a provider you can:
      <br />
      <ul>
        <li>check shared info from parent in form of a report</li>
      </ul>

      (<a href="https://www.youtube.com/watch?v=X_T_P1A1J-4">demo link</a>)
      <h3>tools/methodologies used throughout the project</h3>
      This project is completed from a team of 5 people, in three weeks, utilizing the following tools
      <ul>
        <li>Firebase Authentication</li>
        <li>Firebase Realtime Database</li>
        <li>Android Studio/Android SDK (java + xml)</li>
        <li>Model View Process</li>
        <li>Scrum using Jira</li>
        <li>Object Oriented Programming</li>
      </ul>
      <h3>contributors</h3>
      All of these people (including me) worked really hard for this project! Checkout their Github if you are interested.
      <br />
      <ul>
        <li>https://github.com/2192375d (me)</li>
        <li>https://github.com/Kyaw-Thiha</li>
        <li>https://github.com/najjalowe</li>
        <li>https://github.com/Tina-wanjun</li>
        <li>https://github.com/J0thame</li>
      </ul>
      <h3>scrum</h3>
      To co-operate for this project, we decided to use Scrum's methodology.
      <br />
      Here is the work agreement we had:
      <br />
      <img className="postImg" src={ASSET_SOURCE + "img12.png"} />
      <br />
      Essentially, our Sprint Meeting occurs weekly on every Thursday, and we have two more mandatory meetings every Tuesday + Sunday.
      <br />
      I wrote the work agreement and carefully went through each of them with the team before the project began.
      <br />
      And throughout the process of scrum, we made good use of Jira to write track our progress.
      <br />
      <h3>the beginning</h3>
      Throughout this project, I was primarily responsible for organizing the team meetings and floating around with frontend and backend.
      <br />
      Right before the first sprint meeting, to motivate the team, I decided to take initiative and create a sample login page. Mainly to motivate the team as none of us had previous Android experience.
      <br />
      <img className="postImg" src={ASSET_SOURCE + "img9.png"} />
      <br />
      (We end up discarding this theme and went for a more lightweight one)
      <br />
      In the mean time, some team member made a simple template + set of instruction for how our app's pages will be connected:
      <br />
      <img className="postImg" src={ASSET_SOURCE + "img10.png"} />
      <img className="postImg" src={ASSET_SOURCE + "img11.png"} />
      <br />
      Seeing the team is ready to work, I started the first sprint meeting

      <h3>sprint 1</h3>
      During the first meeting, I started by explaining to the team how to build a simple login page. More specifically, how to make an activity and connect the buttons on the .xml file with the corresponding .java file
      <br />
      After this, we discussed around each person's job and I end up been assigned to the work of completing the signup/login system.
      <br />
      To achieve this, I started by creating the pages with the corresponding buttons/textEdit.
      <br />
      Next I connected the signup, login and reset password pages with our Firebase Database using Firebase Authentication. (zoom in if necessary)
      <br />
      <img className="postImg" src={ASSET_SOURCE + "img13.png"} />
      <img className="postImg" src={ASSET_SOURCE + "img14.png"} />
      <br />
      To keep track of usertype and child's age, I made use of shared preference
      <br />
      <img className="postImg" src={ASSET_SOURCE + "img15.png"} />
      <br />
      Here are all the activities for the login system of the app:
      <br />
      <img className="postImg" src={ASSET_SOURCE + "img16.png"} />
      <h3>sprint 2 and 3</h3>
      During sprint 2 and 3, my job was primarily connecting the app with the backend, while conducting the team to work on their own part of the page.
      <br />
      The way how our team co-orperates between front/backend, is that the front-end worker completes the page with it's functionality. And leave a TODO comment to indicate spots in the code that requires backend connection.
      <br />
      <img className="postImg" src={ASSET_SOURCE + "img23.png"} />
      <br />
      To connect the backend (that is, Realtime Firebase Database), I decided to follow this view model:
      <br />
      <img className="postImg" src={ASSET_SOURCE + "img17.png"} />
      <img className="postImg" src={ASSET_SOURCE + "img18.png"} />
      <img className="postImg" src={ASSET_SOURCE + "img19.png"} />
      <img className="postImg" src={ASSET_SOURCE + "img20.png"} />
      <img className="postImg" src={ASSET_SOURCE + "img21.png"} />
      <img className="postImg" src={ASSET_SOURCE + "img22.png"} />
      <br />
      After a lot of tweakings, I end up using those classes, but they function similar to the diagram above; in terms of how they are connecting the views with the services.
      <br />
      <img className="postImg" src={ASSET_SOURCE + "img24.png"} />
      <br />
      After I connected the backend, and some final debuggings + testings, our project is complete.
      <h3>conclusion</h3>
      This is my first long term team work project and this experience taught me a lot in both
      <br />
      <ul>
        <li>hard skills: Android Development, Firebase</li>
        <li>soft skills: leadership, communication and Jira usage</li>
      </ul>

      More specifically, in terms of soft skills, I am now capable of
      <br />
      <ul>
        <li>assigning fair workload to the team</li>
        <li>motivating the team in working in an enthusiastic way</li>
        <li>taking initiative and making correct decisions when facing unexpected situations</li>
        <li>making correct usages of Jira to facilitate Scrum</li>
      </ul>
      One last thing to mention. Similarly to me, most of my teammates are also beginners in teamwork for software development, and I'm really happy to share this first time learning experience with them.
    </section>
  )
}
