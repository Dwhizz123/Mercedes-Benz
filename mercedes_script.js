
// Toggle mobile navigation menu (if applied)
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

// Simple placeholder for future image slider (console example)
console.log("Mercedes-Benz site script loaded. You can add interactivity like sliders or modals here.");
