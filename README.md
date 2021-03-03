# Landing Page Project

## Table of Contents

- [Instructions](#instructions)
- [Functionality](#functionality)
- [ToClone](#To clone)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Functionality

Navigation:
To build the Navigation bar I used for loop , createElement Function to create li tag & a tag, set class `menu__link`for anchors, lastly attach the a tag as child to the li tag.

Section Active State :
To create this functionality it contain four parts:
Part 1: create a `checkIfSectionInView(element)`to check if the section is in viewport return either true or false.
Part 2: create a `makeSectionsNotHighlighted()` to remove class ‘your-active-class’ from all sections.
Part 3: create a to set the class ‘`your-active-class`’ to make the section in view more distinguished/highlighted through setting this class to section element .
Part 4: lastly to make this functionality fire in every scroll, create event listener to window and add all the 3 functions inside it.

Scroll to Anchor:
To create this functionality scrolling on click of an anchor to go to a specific section ,created `scrollingToSection()`
Function that have all the anchors in array and through for loop each anchor element will have an event listener, and prevent the default action which like jump to a smooth scroll used `scrollTo` (set the Top & behavior)

## To clone 
in terminal
```sh
`git clone https://github.com/Iahdab/FEND-LandingPage-Project2.git` \
```
or in vscode command palatte 
```sh
>Git: Colne  https://github.com/Iahdab/FEND-LandingPage-Project2.git
```
