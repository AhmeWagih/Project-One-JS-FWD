/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const menu = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function sectionInViewPort(element) {
    let sectionPos = element.getBoundingClientRect();
    return (sectionPos.top >= 0);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function creatListItem() {
    for (section of sections) {
        sectionName = section.getAttribute('data-nav');
        sectionLink = section.getAttribute('id');
        listItem = document.createElement('li');
        listItem.innerHTML = `<a class="menu__link" herf="#${sectionLink}">${sectionName}</a>`;
        menu.appendChild(listItem);
    }
}

function toggleActiveClass() {
    for (section of sections) {
        if (sectionInViewPort(section)) {
            if (!section.classList.contains("your-active-class")) {
                section.classList.add("your-active-class");
            }
        } else {
            section.classList.remove("your-active-class");
        }
    }


}



creatListItem();

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", toggleActiveClass);


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


