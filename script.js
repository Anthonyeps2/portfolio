// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
const animateElements = document.querySelectorAll('.skill-card, .project-card, .stat-item, .certificate-card');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && subject && message) {
        // Show success message (in a real app, you'd send this to a server)
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Typing effect disabled to prevent flickering
// const heroSubtitle = document.querySelector('.hero-subtitle');
// const originalText = heroSubtitle.textContent;
// const roles = ['Web Developer', 'Designer', 'Problem Solver', 'Creative Thinker'];
// let roleIndex = 0;
// let charIndex = 0;
// let isDeleting = false;
// let typingSpeed = 100;

// function typeEffect() {
//     const currentRole = roles[roleIndex];
//     
//     if (isDeleting) {
//         heroSubtitle.textContent = currentRole.substring(0, charIndex - 1);
//         charIndex--;
//         typingSpeed = 50;
//     } else {
//         heroSubtitle.textContent = currentRole.substring(0, charIndex + 1);
//         charIndex++;
//         typingSpeed = 100;
//     }
//     
//     if (!isDeleting && charIndex === currentRole.length) {
//         isDeleting = true;
//         typingSpeed = 2000; // Pause at end
//     } else if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         roleIndex = (roleIndex + 1) % roles.length;
//         typingSpeed = 500; // Pause before typing next
//     }
//     
//     setTimeout(typeEffect, typingSpeed);
// }

// Start typing effect after a delay
// setTimeout(typeEffect, 1000);

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Parallax effect disabled to prevent flickering
// window.addEventListener('scroll', () => {
//     const heroContent = document.querySelector('.hero-content');
//     const heroImage = document.querySelector('.hero-image');
//     const scrolled = window.scrollY;
//     
//     if (scrolled < 800) {
//         heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
//         heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
//     }
// });

// Loading animation disabled to prevent flickering
// window.addEventListener('load', () => {
//     document.body.style.opacity = '0';
//     document.body.style.transition = 'opacity 0.5s ease';
//     
//     setTimeout(() => {
//         document.body.style.opacity = '1';
//     }, 100);
// });
