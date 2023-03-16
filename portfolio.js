// ALL VARIABLES
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// NAV BAR TOGGLE
// Add event listener on toggle button
navToggle.addEventListener("click", function() {
    links.classList.toggle("show-links");
})