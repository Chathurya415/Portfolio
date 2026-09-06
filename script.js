// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");


// Open / close mobile menu

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


// Close menu when a navigation link is clicked

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});


// =========================
// ACTIVE NAVIGATION LINK
// =========================

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});

// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();


    // Check empty fields

    if (!name || !email || !subject || !message) {

        formMessage.textContent =
            "Please fill in all the fields.";

        formMessage.style.color = "#E76F51";

        return;
    }


    // Check email format

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.color = "#E76F51";

        return;
    }


    // Successful submission

    formMessage.textContent =
        "Thank you! Your message has been received.";

    formMessage.style.color = "#F4F1DE";


    // Clear form

    contactForm.reset();

});

// =====================================================
// PORTFOLIO JAVASCRIPT
// =====================================================


// =====================================================
// MOBILE NAVIGATION
// =====================================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}


// Close mobile menu when clicking a navigation link

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


// =====================================================
// ADVANCED SCROLL SYSTEM
// =====================================================

const navbar = document.querySelector(".navbar");
const progressBar = document.getElementById("scroll-progress-bar");
const backToTop = document.getElementById("back-to-top");

const sections = document.querySelectorAll("main section[id]");


// =====================================================
// SCROLL EVENT
// =====================================================

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


    // -----------------------------------------------
    // 1. SCROLL PROGRESS
    // -----------------------------------------------

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width =
        `${scrollPercentage}%`;


    // -----------------------------------------------
    // 2. NAVBAR SCROLL EFFECT
    // -----------------------------------------------

    if (scrollTop > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }


    // -----------------------------------------------
    // 3. BACK TO TOP BUTTON
    // -----------------------------------------------

    if (scrollTop > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }


    // -----------------------------------------------
    // 4. ACTIVE NAVIGATION LINK
    // -----------------------------------------------

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            scrollTop >= sectionTop &&
            scrollTop < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (target === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


// =====================================================
// BACK TO TOP
// =====================================================

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-container, " +
    ".project-card, " +
    ".contact-container, " +
    ".footer"
);


// Add reveal class

revealElements.forEach(element => {

    element.classList.add("reveal");

});


// Intersection Observer

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                // Stop observing after animation
                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Start observing

revealElements.forEach(element => {

    revealObserver.observe(element);

});


// =====================================================
// PROJECT CARD STAGGER ANIMATION
// =====================================================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.12}s`;

});


// =====================================================
// CONTACT FORM
// =====================================================

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        // Check empty fields

        if (!name || !email || !subject || !message) {

            formMessage.textContent =
                "Please fill in all the fields.";

            formMessage.style.color =
                "#E76F51";

            return;

        }


        // Email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.color =
                "#E76F51";

            return;

        }


        // Success message

        formMessage.textContent =
            "Thank you! Your message has been received.";

        formMessage.style.color =
            "#F4F1DE";


        // Clear form

        contactForm.reset();

    });

}