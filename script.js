document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        this.classList.toggle('active');

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

// Smooth scrolling functionality
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
