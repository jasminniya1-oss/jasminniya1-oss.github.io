// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change navbar background while scrolling
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');

    if (window.scrollY > 50) {
        nav.style.background = "#081220";
    } else {
        nav.style.background = "#112240";
    }
});
