// ALL VARIABLES
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelectorAll('.nav__link');

// Set Date automatically
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

navToggle.addEventListener('click', function () {
    document.body.classList.toggle('nav-open');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
})


// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        // Prevent default scroll 
        e.preventDefault();

        // navigate to specific section
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");

        // Now get position of that element using offsetTop property
        let position = element.offsetTop - navHeight;

        if(!fixedNav) {
            position -= navHeight;
        }
        if(navHeight > 82) {
            position += containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        // Close toggle once a link is clicked
        linksContainer.style.height = 0;
    })
})
