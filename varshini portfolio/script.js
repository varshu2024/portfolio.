document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 0);
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate Skills on Scroll
    const skillItems = document.querySelectorAll('.skill-item');
    
    function animateSkills() {
        skillItems.forEach(item => {
            const percent = item.getAttribute('data-percent');
            const progressBar = item.querySelector('.skill-progress');
            
            if (isElementInViewport(item)) {
                progressBar.style.width = percent + '%';
                item.classList.add('animated');
            }
        });
    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Run once on page load
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just log it and show an alert
            console.log({ name, email, subject, message });
            
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Scroll Reveal Animation
    const sections = document.querySelectorAll('section');
    
    function revealOnScroll() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('fade-in');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on page load
    
    // Project Filter (if you want to add filtering later)
    // const filterButtons = document.querySelectorAll('.filter-btn');
    // const projectCards = document.querySelectorAll('.project-card');
    
    // filterButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         // Remove active class from all buttons
    //         filterButtons.forEach(btn => btn.classList.remove('active'));
    //         // Add active class to clicked button
    //         button.classList.add('active');
            
    //         const filterValue = button.getAttribute('data-filter');
            
    //         projectCards.forEach(card => {
    //             if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
    //                 card.style.display = 'block';
    //             } else {
    //                 card.style.display = 'none';
    //             }
    //         });
    //     });
    // });
    
    // Load certifications from JSON (example)
    // fetch('certifications.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         const container = document.querySelector('.certificates-grid');
    //         container.innerHTML = '';
            
    //         data.forEach(cert => {
    //             container.innerHTML += `
    //                 <div class="certificate-card">
    //                     <div class="certificate-image">
    //                         <img src="${cert.image}" alt="${cert.title}">
    //                     </div>
    //                     <div class="certificate-content">
    //                         <h3>${cert.title}</h3>
    //                         <p>${cert.issuer}</p>
    //                     </div>
    //                 </div>
    //             `;
    //         });
    //     });
});

// Sample JSON data (certifications.json)
/*
[
    {
        "title": "Python for Data Science",
        "issuer": "IBM",
        "image": "ibm-cert.jpg"
    },
    {
        "title": "Full Stack Development",
        "issuer": "Accenture",
        "image": "accenture-cert.jpg"
    },
    {
        "title": "Cloud Computing Fundamentals",
        "issuer": "Deloitte",
        "image": "deloitte-cert.jpg"
    },
    {
        "title": "AI Foundations",
        "issuer": "IBM",
        "image": "ibm-cert2.jpg"
    },
    {
        "title": "Data Analysis with Python",
        "issuer": "IBM",
        "image": "ibm-cert3.jpg"
    },
    {
        "title": "Responsive Web Design",
        "issuer": "FreeCodeCamp",
        "image": "freecodecamp-cert.jpg"
    },
    {
        "title": "Azure Fundamentals",
        "issuer": "Microsoft",
        "image": "microsoft-cert.jpg"
    },
    {
        "title": "Database Essentials",
        "issuer": "IBM",
        "image": "ibm-cert4.jpg"
    },
    {
        "title": "JavaScript Algorithms",
        "issuer": "FreeCodeCamp",
        "image": "freecodecamp-cert2.jpg"
    },
    {
        "title": "Python for Beginners",
        "issuer": "Microsoft",
        "image": "microsoft-cert2.jpg"
    }
]
*/