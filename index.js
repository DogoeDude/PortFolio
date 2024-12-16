document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav__toggle');
    const navItems = document.querySelector('.nav__items');
    
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navToggle.classList.toggle('active');
        navItems.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navItems.contains(e.target)) {
            navToggle.classList.remove('active');
            navItems.classList.remove('active');
        }
    });

    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navItems.classList.remove('active');
        });
    });

    // Keep the existing back to top button functionality
    const backToTopButton = document.querySelector(".back-to-top");
    
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.visibility = "visible";
            backToTopButton.style.opacity = "1";
        } else {
            backToTopButton.style.visibility = "hidden";
            backToTopButton.style.opacity = "0";
        }
    });
});