// Slide-down navigation bar functionality
let lastScrollTop = 0;
const navbar = document.getElementById('slide-navbar');
const scrollThreshold = 300; // Show navbar after scrolling down 300px

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Only show navbar if scrolled past threshold
    if (scrollTop > scrollThreshold) {
        if (scrollTop < lastScrollTop) {
            // Scrolling up
            navbar.classList.add('visible');
        } else {
            // Scrolling down
            navbar.classList.remove('visible');
        }
    } else {
        // At top of page
        navbar.classList.remove('visible');
    }

    lastScrollTop = scrollTop;
});
