/**
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const allSectionsList = document.querySelectorAll("section");
const unorderedList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Function TODO: remove "your-active-class" form all section
function makeSectionsNotHighlighted() {
  for (let i = 0; i < allSectionsList.length; i++) {
    if (allSectionsList[i].classList.contains("your-active-class"))
      allSectionsList[i].classList.remove("your-active-class");
  }
}

// Function TODO: Check if the specific section is in closest to the top or not
function checkIfSectionInView(elementSection) {
  let bottomNatchValue = elementSection.getBoundingClientRect();
  let browserViewHeight = window.innerHeight;

  if (bottomNatchValue.bottom <= browserViewHeight) {
    return true;
  } else return false;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function mainNavBarBuild() {
  for (let i = 0; i < allSectionsList.length; i++) {
    let elementSection = allSectionsList[i];
    let listIElement = document.createElement("li");
    let anchorElement = document.createElement("a");
    anchorElement.href = `#${elementSection.id}`;
    anchorElement.textContent = elementSection.dataset.nav;
    anchorElement.classList.add("menu__link");
    listIElement.appendChild(anchorElement);
    unorderedList.appendChild(listIElement);
  }
}

// Add class 'active' to section when near top of viewport
function sectionInViewHighlighted(elementSection) {
  elementSection.classList.add("your-active-class");
}

// Scroll to anchor ID using scrollTO event
function scrollingToSection() {
  let allAnchorElements = unorderedList.querySelectorAll("a");
  for (let i = 0; i < allAnchorElements.length; i++) {
    let anchorelement = allAnchorElements[i];
    anchorelement.addEventListener("click", function(event) {
      event.preventDefault();
      let herfValue = anchorelement.getAttribute("href");
      let SectiontopPosition = document.querySelector(herfValue).offsetTop;
      scrollTo({ top: SectiontopPosition, behavior: "smooth" });
    });
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
mainNavBarBuild();

// Scroll to section on link click
scrollingToSection();

// Set sections as active
window.addEventListener("scroll", function() {
  for (let i = 0; i < allSectionsList.length; i++) {
    let sectionElement = allSectionsList[i];
    if (checkIfSectionInView(sectionElement)) {
      makeSectionsNotHighlighted();
      //sectionElement.classList.add("your-active-class");
      sectionInViewHighlighted(sectionElement);
      //console.log('##########this section in viwe'+sectionElement.id)
    }
  }
});
