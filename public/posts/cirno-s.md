Documented on November 14th

- [github repo](https://github.com/2192375d/Touhou-Game-Jam-16-Cirno-s-Swirlaria)
- [game link](https://2635266513.itch.io/cirnos-swirlaria)

### what even is this?

This is a video game project which me and three of my friends worked on a while ago, dedicated for the [Touhou's bi-annual game jam](https://itch.io/jam/touhou-jam-16); due to a bunch of exams I end up writing this dev log on November 14th (that is, 3 weeks after :(

Here are the assets made for the game, and the color palette I used:

![CirnoSMostAssets1](/assets/posts/CirnoS/CirnoSMostAssets1.webp)
![CirnoSColorPalette](/assets/posts/CirnoS/CirnoSColorPalette.webp)

Some screenshots of the game:

![CirnoSScreenShot2](/assets/posts/CirnoS/CirnoSScreenShot2.webp)
![CirnoSScreenShot4](/assets/posts/CirnoS/CirnoSScreenShot4.webp)

### team composition

We are in a small team of 4 people; 3 of us are doing a mixture of game dev and art, and one person is dedicated for illustration.

Team composition:

- Lumiere (me): responsible for the 2D action part, and pixel art assets
- [Yoshixi](): responsible for the ice cream making part, and testing
- [Cheese](https://github.com/heptagonal7): responsible for some game visual features, pixel art assets, and testing
- [Ichigo](https://amai-ichigo.itch.io/): responsible for illustrations (she's really good)

The roles above is just a really really really general generalization of what each one worked on, in fact, we all sort of just did a bit of everything, instead of been assigned to a specific task.

To be honest everyone in the game contributed almost equally and enormously, the game would look much worse if we had one less person.

### pre-jam planning

Our idea was to mix one of those Papa's foodaria game with classical stg (bullet hell) game.

After chatting with my teammates for around 3 hours, we decided that it's best to make a game where this random Touhou character, called [Cirno](https://en.touhouwiki.net/wiki/Cirno), to sell ice creams while dodging bullets from [Reimu](https://en.touhouwiki.net/index.php?title=Reimu_Hakurei&mobileaction=toggle_view_mobile) (another Touhou character).

### How does the game work?

A quick explanation of how the game works:

- On the right side of the game, it's the danger zone, where Cirno needs to dodge bullets while grabbing resources
- On the left side of the game, it's the safe zone, where Cirno makes ice creams and sell it to customers

The game follows the following loop:

- Go to the danger zone, grab the resources (while dodging bullets)
- Head back to safe zone, make ice creams
- repeat

If you get hit, you lose HP, successfully making ice creams restores your HP, and rewards you score.

Your goal is to reach certain amount of score within the time constraint (to get the happy ending).

### Day 0 (early development during day 1, but it didn't take too long)

Here are two early sketches of the (expected) gameplay

![CirnoSEarlySketch1](/assets/posts/CirnoS/CirnoSEarlySketch1.webp)
![CirnoSEarlySketch2](/assets/posts/CirnoS/CirnoSEarlySketch2.webp)

(Unfortunately some features are discarded, like the obstacle)

At the start of the jam, I made a very basic "base" for the game, just to motivate the team to get started.

![CirnoSScreenShot1](/assets/posts/CirnoS/CirnoSScreenShot1.webp)

(Yeah that green part is the danger zone and flesh color is the safe zone)

After watching some [tutorials](https://www.youtube.com/watch?v=X3J0fSodKgs) about Godot inventory system on YouTube, I planed out a quick chart for how every ingame components will tie with each other.

![CirnoSPlans](/assets/posts/CirnoS/CirnoSPlans.webp)

(Yeah it's pretty messy; I was too excited to start working on it so I just quickly wrote everything)

Because I have previous experience with making bullet hell games (all of which are incomplete products), we decided that I'm gonna be dealing with the resource gathering + bullet dodging part, while the other developers primarily handle the ice cream making part.

Just like that, development started.

### side note

The following contents on this page describe what I did during development from my persepective, if you want to see what Yoshi did (the ice cream making making guy), check his [dev log](https://www.yoshixi.net/hackathons/touhoujam6)

### Day 1 (resource gathering system)

(Check the source code from the github repo if you wanna see how exactly things are made)

The first thing I did was to create the script for the resource of Item. It's a very simple thing with a texture and a name.

Once this is done, I created the resources, and made a simple inventory system where the inventory is a dictionary that takes an item resource, and provides the number of such item that player has.

![CirnoSDevScreenShot1](/assets/posts/CirnoS/CirnoSDevScreenShot1.webp)

Next I made an "ObjectInteractComponent" to check if player is in the range to grab the item, and interact key detection for grabbing it.

Now everything for item object are set, I made use of those components and made a code to generate it randomly on every interval of 0.5 to 1.5 seconds.

![CirnoSDevScreenShot2](/assets/posts/CirnoS/CirnoSDevScreenShot2.png)

(Other developers later on make it spin, and modulate to make everything look nicer)

Next I made the ui display the inventory, on the very right of the screen

![CirnoSScreenShot5](/assets/posts/CirnoS/CirnoSScreenShot5.png)

And I attached a global signal to update the inventory UI, everytime when it's necessary.

After finishing testing + debugging, with doubts of whether or not I can even complete this project, I headed back to sleep.

### Day 2 (bullet hell system)

Day 2, I started by connecting the sprites for the enemy, that is Reimu. And setup an AI component for her, that randomly chooses attacks on every 1-2 seconds.

![CirnoSDevScreenShot5](/assets/posts/CirnoS/CirnoSDevScreenShot5.png)

Next I made the scripts for the resources of bullet patters, and made use of Cheese's assets for the bullets as part of each resources

![CirnoSDevScreenShot7](/assets/posts/CirnoS/CirnoSDevScreenShot7.png)
![CirnoSDevScreenShot8](/assets/posts/CirnoS/CirnoSDevScreenShot8.png)
![CirnoSDevScreenShot9](/assets/posts/CirnoS/CirnoSDevScreenShot9.png)
![CirnoSDevScreenShot10](/assets/posts/CirnoS/CirnoSDevScreenShot10.png)

After that I worked on some bullet patterns that Reimu uses to attack, and I took reference from my Cheese's sketch for the attacks:

![CirnoSDevScreenShot3](/assets/posts/CirnoS/CirnoSDevScreenShot3.png)
![CirnoSDevScreenShot4](/assets/posts/CirnoS/CirnoSDevScreenShot4.png)

One funny thing is that I can't even understand the code I wrote for the 3rd bullet pattern, but somehow this pattern worked out well after I tweaked the numbers a bit.

![Cirno clip](/assets/posts/CirnoS/CirnoSClip1.webp)

![CirnoSDevScreenShot6](/assets/posts/CirnoS/CirnoSDevScreenShot6.png)

Once I finished all the patterns, I added hitbox for Cirno, and created a HP component for her, and leave Yoshi to connect everything from Cirno's HP component with the TV that displays the health all that.

It's 4am, so I headed back to sleep. The game is somewhat playable already, hopefully I can get everything done tomorrow.

### Day 3 (add illustrations, game menu, story, end game screen all that)

Today is a lot of stress, as the deadline is at 3pm (technically it's extended but we barely worked on it afterwards)

As what the title suggested, I communicated with Ichigo and got some of the nice arts she made:

![CirnoSDevScreenShot11](/assets/posts/CirnoS/CirnoSDevScreenShot11.webp)
![CirnoSDevScreenShot12](/assets/posts/CirnoS/CirnoSDevScreenShot12.webp)
![CirnoSDevScreenShot13](/assets/posts/CirnoS/CirnoSDevScreenShot13.webp)
![CirnoSDevScreenShot14](/assets/posts/CirnoS/CirnoSDevScreenShot14.webp)

Yoshi connected those images with the game, and added checks for scoring to trigger the corresponding ending, cooperating with Cheese who is writing the scripts for the stories, while I worked on the game menu and "how to play" page:

![CirnoSDevScreenShot18](/assets/posts/CirnoS/CirnoSDevScreenShot18.png)
![CirnoSDevScreenShot15](/assets/posts/CirnoS/CirnoSDevScreenShot15.png)
![CirnoSDevScreenShot16](/assets/posts/CirnoS/CirnoSDevScreenShot16.png)
![CirnoSDevScreenShot17](/assets/posts/CirnoS/CirnoSDevScreenShot17.png)

After some FINAL testings + tweakings, we launched the game

### conclusion

And that's it, there's much much more stuffs I did after the day of release, like adding new features, dealing with stupid godot export and stupid itch.io website lagging all that. But I'm too lazy to include all of them. They aren't even part of the 3 days afterall!

I'm really happy for completing this, this is the first time I managed to prove myself that I can actually complete a game dev project without gaving up half way.

There is an enormous amount of stuffs I learned when making this, mostly tied to resources, effect, and ways of managing big project (In cmd, I ran `tree .` in the root directory of the project, and it tells me we got 474 files! Never had a project with many files made in barely 3 days!)

I'm also really happy with regards to how much the other three members contributed, I'm really thankful! I definitely cannot do all of this in 3 days! Thanks!

next dream...
