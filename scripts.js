
function init() {
    /**
     * Toggle dark mode on and off.
     *
     * @param {Element} darkModeToggle - The dark mode toggle button.
     * @param {Element} body - The document body.
     */
    function setupDarkMode(darkModeToggle, body) {
      // Check for saved dark mode preference
      if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode(body);
      }
  
      darkModeToggle.addEventListener("click", () => {
        if (body.classList.contains('dark-mode')) {
          disableDarkMode(body);
        } else {
          enableDarkMode(body);
        }
      });
    }
  
    /**
     * Enable dark mode.
     *
     * @param {Element} body - The document body.
     */
    function enableDarkMode(body) {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
      darkModeToggle.textContent = 'Light Mode';
    }
  
    /**
     * Disable dark mode.
     *
     * @param {Element} body - The document body.
     */
    function disableDarkMode(body) {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
      darkModeToggle.textContent = 'Dark Mode';
    }
  
    /**
     * Animate the headline title.
     *
     * @param {Element} headlineTitle - The headline title element.
     * @param {string} headlineText - The headline text.
     */
    function animateHeadline(headlineTitle, headlineText) {
      let index = 0;
  
      function typeWriter() {
        if (index < headlineText.length) {
          headlineTitle.textContent += headlineText.charAt(index);
          index++;
          setTimeout(typeWriter, 100);
        }
      }
  
      typeWriter();
    }
  
    /**
     * Setup smooth scrolling for navigation links.
     *
     * @param {NodeList} navLinks - The navigation links.
     */
    function setupSmoothScrolling(navLinks) {
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
    }
  
    /**
     * Setup dynamic contact form submission.
     *
     * @param {Element} contactForm - The contact form.
     */
    function setupContactForm(contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
      });
    }
  
    // Get elements
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const headlineTitle = document.querySelector(".headline-title");
    const headlineText = "Hello, I'm Gichogu Macharia";
    const navLinks = document.querySelectorAll('.nav-link');
    const contactForm = document.querySelector('form');
  
    // Setup event listeners and functionality
    setupDarkMode(darkModeToggle, body);
    animateHeadline(headlineTitle, headlineText);
    setupSmoothScrolling(navLinks);
    setupContactForm(contactForm);
  }
  
  // Call the init function when the document is ready
  document.addEventListener("DOMContentLoaded", init);