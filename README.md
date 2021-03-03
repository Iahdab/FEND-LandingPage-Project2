# Project Landing Page 
***2nd Project for [UDACITY](UDACITY.com) NanoDegree*** 

## Table of Contents

- [Overview](#Overview)
- [GettingStarted](#GettingStarted)
   - [Functionality](#Functionality)
   - [File](#File)
   - [CloningRepo](#CloningRepo)
   - [RunningProject](#RunningProject)
- [Deploying](#Deploying)


## Overview

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.
To get started, open `js/app.js` and start building out the app's functionality.

## GettingStarted
   
 ### Functionality
 
   - **Navigation:**
      To build the Navigation bar I used for loop , createElement Function to create li tag & a tag,
      set class `menu__link`for anchors, lastly attach the a tag as child to the li tag.

   - **Section Active State:**
      To create this functionality it contain four parts:
      Part 1: create a `checkIfSectionInView(element)`to check if the section is in viewport return either true or false.
      Part 2: create a `makeSectionsNotHighlighted()` to remove class ‘your-active-class’ from all sections.
      Part 3: create a to set the class `your-active-class` to make the section in view more distinguished/highlighted through setting this class to section element.
      Part 4: lastly to make this functionality fire in every scroll, create event listener to window and add all the 3 functions inside it.

   - **Scroll to Anchor:**
        To create this functionality scrolling on click of an anchor to go to a specific section ,created `scrollingToSection()`
        Function that have all the anchors in array and through for loop each anchor element will have an event listener, and prevent the default action which         like jump to a smooth scroll used `scrollTo` (set the Top & behavior)

 ### File
 
 - Index.html
 - **JS Folder**
    - App.js
 - **CSS Folder** 
    - Style.css
   
 ### CloningRepo
 
   - **In Terminal:**\
   ```git clone https://github.com/Iahdab/FEND-LandingPage-Project2.git``` 
   OR
   - **In VS code Command Palatte:**\
   ```>Git: Colne  https://github.com/Iahdab/FEND-LandingPage-Project2.git``` 
   - ***NOTE: also you can fetch or Download as zip file.***
    
 ### RunningProject
 
  open index.html in browser 

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
