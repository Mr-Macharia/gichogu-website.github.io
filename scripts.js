document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }

    darkModeToggle.addEventListener("click", () => {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = 'Light Mode';

        document.documentElement.style.setProperty('--background', '#1a2236');
        document.documentElement.style.setProperty('--text', '#ffffff');
        document.documentElement.style.setProperty('--border', '#98dede');
        document.documentElement.style.setProperty('--input', '#34495e');
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', null);
        darkModeToggle.textContent = 'Dark Mode';

        document.documentElement.style.setProperty('--background', '#ffffff');
        document.documentElement.style.setProperty('--text', '#1a2236');
        document.documentElement.style.setProperty('--border', '#98dede');
        document.documentElement.style.setProperty('--input', '#dfdfe0');
    }

    // Headline title animation
    const headlineTitle = document.querySelector(".headline-title");
    const headlineText = "Hello, I'm Gichogu Macharia";
    let index = 0;

    function typeWriter() {
        if (index < headlineText.length) {
            headlineTitle.textContent += headlineText.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Dynamic contact form submit
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});
