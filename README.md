# Welcome to the ORV Wiki/Guide/Handbook/Thing

This is a massive project that I have decided to work on which will basically be an everything ORV (Omniscient Reader's Viewpoint) website. 

(This is a passion project which will NEVER be monetized for personal gain, however you will need to show proof of purchase of ORV novel and/or manwha to access the Read page to avoid legal complications. There is a donation page planned so that contributors, fan contest winners, etc. can get a chance to access the Read page based on their efforts)

I know almost nothing on how to code so any help will be much appreciated. I chose to build this on react as it looked beautiful and my light research concluded that to have this be highly interactive, reactjs was my best option.

(Huge shoutout to @EGATORTUTORIALS for posting his crystal clear tutorials that have allowed me to get started on this HUGE project)

## "Roadmap"
*not based on priority or chornoligical order, just all the plans I have for this project. Any recommendations or feedback will be helpful*

***WIP!!!***

 - A unique loading animation, most likely based on the ORV novel logo. 

 ![ORV logo for loading animation](https://raw.githubusercontent.com/StudentShake/orv-wiki/master/src/assets/logo.png)

### Homepage
(*I'm speaking in desktop screen terms but I will also fix this for mobile and other stuff*)

- Top left corner will have a text animation that read "Welcome to ORV!" that transforms to other languages
- A kind of blurb text introducing ORV on the left side
- Top right corner will have the navbar with icons that reveal text when hovered on
- Right side will have some sort of planet based art that changes depending on how far you are in the story.

Concept Art:
    Desktop:
    ![HomePage Concept "Art" (desktop)](https://github.com/StudentShake/orv-wiki/blob/master/src/assets/homePage_conceptArt_desktopVer.jpg?raw=true)
    Mobile:
    ![HomePage Concept "Art" (mobile)](https://github.com/StudentShake/orv-wiki/blob/master/src/assets/homePage_conceptArt_mobileVer.jpg?raw=true)

- Scrolling down will show 
    - previews of the reading view, 
    - a few snippets of the guide, 
    - a showcase of the search page,
    - a small walkthrough through the contribution page and how to use it, 
    - a gallery view of the community page with different tabs for fan art, fics, events, forums, blogs, etc. 
    - a contact menu
    - and finally a roadmap voting thing where you can see what I am currently working on and vote for what feature should come out next and/or recommend new features I should implement

*I might update this depending on if I get more ideas

---

### Read Page

If I recall correctly, the first chapter or the first few chapter of both the novel and manwha are "free" and therefore you can access them in Guest Mode / F2P mode here as well

You will first be faced with 2 options, the novel or the manwha. Again, the first or the first few chapters will be free.

If you want to read the novel, you should be able to read both the webnovel and the ebook, and you can see a short summary of the differences in content in two columns, like how it looks when you compare two subscription plans. Ebook option will come with the addition of the side stories.

Besides the difference in actual content, the reading mode will work the same.

**Reading Mode** (*Text*):

- ALL OPTIONS CAN BE TOGGLED ON/OFF

- Convert all text to Bionic text (doubles reading speed and helps with ADHD)

- Smart Linking (to the guide)
    - Like Wikipedia links (so in-line hyperlinks) but intelligent and controllable (*inspired from obsidian.md*)
    - For example, links will naturally appear when there have been changes made to the guide. Yes, the guide will change its content depending on what chapter you are on. 
    - Instead of opening a whole new webpage and taking you out of the reading page, you can just hover over the smart links and a small window popup summarizing the changes/additions will be there
    - The "spawn rate" of the smart links can be customizable, ranging from no smart links, to every single other concept or word being mentioned having a smart link.
    - Spawn rate can change also depending on your behaviour interacting with the settings and your daily reading amount (so say you haven't read orv for the past month, the spawn rate of the smart links will increase since you might've forgotten stuff)
    - Smart link shenanigans will also change depending on if it's your second or third read.

- Marginal Notes
    - Notes on the margin that highlight certain important events, provide context and background for scenarios, e.g. explaining dokkaebis in korean culture, contexualizing murim, etc.
    - Definition of some words
    - Explaining concepts like for example film theory
    - Referencing explanations done in previous chapters
    - Highlighting a difference between the ebook and the webnovel
    - Place to keep YOUR comments and bookmarks
    - Focus on important/iconic quotes

- Chapter Summary Infoboxes / Highlights
    - Basically a summary of all the plot points and changes in the chapter
    - For Example: 
        - ! New Content in Character Guide: Kim Dokja, Yoo Jonghyuk, Nirvana Moebius's Status has been updated.
        - ! New Scenario Cleared, New Location unlocked "Underworld", check World Guide.
    - Can also highlight important reveals that are indirectly said and might confuse readers.

- Rereading Hints
    - Rereading is a big part of ORV and its so detailed that underlining these small nuanced hints and breadcrumbs that foreshadow and reference the events that will happen later on help rereaders appreciate the story even more

- Literary Analysis mode:
    - A mode that looks at the novel as a piece of literature and highlights text in different colors depending on its theme, or highlighting the use of literary techniques such as personification, metaphors, etc. and commenting on the narration technique such as stream-of-conciousness style or unreliable narrator to show how that plays a role in the story. (Useful for literature students that can use ORV in their studies which means more exposure to orv :D )

-  Music
    - I suck with music but once the money starts coming in istg im building a genshin style symphony for this novel like imaging reading a huge fight war scene with battle sounds and a whole ass opera like damn its gonna be amazing. 


*I might update this depending on if I get more ideas

---

### Search Page

Fortunately, the reading page is the most complex part of this project. However, the Search page isn't simple either.

First of all, for people with access to the read page, the content you can search through and find will depend on what chapter you are on and whether or not you have reread, and if you have, what chapter of your reread you are on, just like the hints/infoboxes/margin things work on the reading page.

Instead of having an index and table of content like page, it will be more of a graph type node view, with a clickable node to every single unlocked page of the wiki (unlocked i.e. depending on where you are in the novel/manwha) and these nodes will be linked to other nodes they are connected with, i.e. sponsors and incarnations and stigmas and locations etc etc. This should in the end form something like a night sky with stars (the nodes) and constellations (the links).

Since you can link a LOT of stuff there will be a setting to reduce the number of stuff of you can link and a setting to filter out stuff like chapters or items or locations or stuff that isn't that relevant or prioritized. You will also be able to zoom in and out and drag the "map" (thinking the <Star Stream> might be a good name for it). There will be an automatic filter which will decide to prioritize (brighten) and filter (dim) nodes depending on the relevancy of it which is dependent on where you are in your read.

Unlike the read page, this page will be accessible to F2P readers, and so will all the rest of the pages. Before you start searching you will be given a warning that to avoid spoilers it's better to enter the chapter number you have stopped on so that search page can work as intended. (This also gives me the idea to make the F2P accounts have a tracking feature where they can track their progress on the novel/manwha/ebook if they opt for the "sailing the seven seas" option :D)

**LACIE (Large And Complex Intelligent Encyclopedia)**

The Search page will also feature an Advanced search option to search through the novel(the fifth wall will crumble one day so gotta keep its replacement healthy and even sturdier). Searching for quotes should be faster and easier after all the chapters have been tagged and linked to the wiki, for example all new character introductions will be linked to the wiki, so if someone is searching for an Uriel quote teh websote will only look at chapters that have Uriel in it. (This should be better and faster when I adopt a frequently searched quotes thing which will happen after I get more than 10 users XD)

gonna dub this LACIE (Large And Complex Intelligent Encyclopedia) for now :DD

*I might update this depending on if I get more ideas

---

### Guide/Wiki Page

Should be self explanatory.

The page will first open to an introduction page to ORV describing what it is, its genres, a few pictures from the manwha, etc etc. 

From there you can find hyperlinks that can help you navigate, for example on the homepage of this page you can find a hyperlink to another page on here about the novel which can redirect you to buying the novel and reading on here or reading the summary/notes on chapters which we will have here. This can also link to character pages and stuff.

Before you proceed to any page you will be given a warning that either you enter the chapter number you're on or make an account or you will get spoiled. It makes sense to guess from this that page information will change depending on where you are and this will also ensure people don't get spoiled. :D

running out of brain power rn so can't think of anything else 

*I might update this depending on if I get more ideas

---

### Contribution/Edit Page

Simple page where you can give my your contact, donate, and/or apply to edit pages.

This is mostly because I want to make editing easy for people and have them edit it online on the webpage rather than actually touching the code and getting confusion.

As I stated before donations will only be used to give back to the community and maybe help on the server side of things but I won't be using them for monetary gain. This site is supposed to be a gift. 

Donations will also be good for contributors, fan contest winners, etc. to get a chance to access the Read page based on their efforts. And will also allow us to host fan events with prizes and stuff. 

(And since I won't be using this site to make money that means NO ADS! :DDD)

### Fan/Community Page

A place for the community to hang out. I will expand on the detail later but uh for now I have planned:

- A Discussion Forum for theories and other stuff (before you post on this you will have to like put a chapter tag so that it will automatically get blocked for ppl who aren't at that chapter yet so they don't get spoiled and also this will get like prioritized if you're near the chapter for which that post was posted abt)
    - There will be a warning for ppl who dont have an account that thsi post has spoilers for XXX chapter just so that everyone stays safe.

- Fanart

- Fanfics

- Contests/Events

- News (abt ORV, like english novel getting published or anime release etc etc)

- Creator Blog/BTS 

- Honorable mentions and links to other places (i.e. Flamescans)

### Accounts Page

A place to yk make your account and stuff. There are 5 types of accounts.

Account types:

1. Guest (Reader) Account
    - Doesn't need to sign up, I have 0 information about you
    - You don't pay anything
    - Can Access everything besides the Read and Edit Page
    - Has no records on the website, will be prompted to enter chapter number everytime something is clicked :/

2. F2P (Sponsorless) Account
    - Gives me your email so I can flood it with update releases, subscribe to the orv newletter, etc etc.
    - You don't pay anything
    - Can Access everything besides the Read and Edit Page
    - HAS THE OPTION TO TRACK THEIR READ so they won't be prompted to enter a chap num everytime they click something :D

3. Community Member (Incarnation) Account
    - Gives me your email so I can flood it with update releases, subscribe to the orv newletter, etc etc.
    - You don't pay anything
    - Can Access everything besides the Read page
    - Unlocks access to the edit/contibution page so you can post fanart, fanfics, and post on the forum (F2P account can't post but can reply to posts. Also to become a community member you need to be verified (how you get verified is something I am still working on))
    - HAS THE OPTION TO TRACK THEIR READ so they won't be prompted to enter a chap num everytime they click something :D
    - Since this unlocks fan submissions, you can now take part in events and get a chance to unlock the read page and become a Constellation account from donations.

4. Contribution Editor (Dokkaebi) Account
    - Gives me your email so I can flood it with update releases, subscribe to the orv newletter, etc etc.
    - You don't pay anything
    - Can Access everything besides the Read page
    - Unlocks access to the edit/contibution page so you can edit the guide/wiki, help out with the code, maybe work on the newsletter or something. To do all this you will need to be verified but again I haven't clearly stated the conditions of verification, something I will work on later.
    - HAS THE OPTION TO TRACK THEIR READ so they won't be prompted to enter a chap num everytime they click something :D
    - Your account will be prioritized depending on your contribution amount and will allow you to unlock Constellation Status from donations.

5. Premium (Constellation) Account
    - Gives me your email so I can flood it with update releases, subscribe to the orv newletter, etc etc.
    - You have to pay the minimum price for the novel/manwha/ebook/etc
        - the less you've paid for the lower your level but you can become a Myth-Grade if you bought everything available
        - This money does not go to me or my team, but its only so that we can buy the novel/manwha/ebook FOR YOU. 
    - You can donate to get perks like a shiny name, avater borders, and some custom UI as an incentive but 100% of your donations go back to giving readers a chance to read.
    - You can access everything EXCEPT the edit/contribution page.

*I might update this depending on if I get more ideas

---

(Still a work in progress so none of this is truly official, and can always be changed later if need be)

## Currently Working On

- Homepage
