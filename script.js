// ==========================
// MOBILE NAVIGATION
// ==========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when clicking a nav link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==========================
// ACTIVE NAVIGATION LINK
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active-link");
        }
    });
});


// ==========================
// NAVBAR BACKGROUND ON SCROLL
// ==========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(15,23,42,0.95)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background =
            "rgba(15,23,42,0.8)";

        navbar.style.boxShadow =
            "none";
    }
});


// ==========================
// CONTACT FORM
// ==========================

const contactForm =
    document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Thank you for reaching out! I'll get back to you soon."
    );

    contactForm.reset();
});


// ==========================
// TYPING EFFECT
// ==========================

const titles = [
    "Machine Learning Enthusiast",
    "Web Developer",
    "Computer Science Student",
    "Problem Solver"
];

let titleIndex = 0;
let charIndex = 0;

const heading =
    document.querySelector(".hero-content h2");

function typeEffect() {

    if (charIndex < titles[titleIndex].length) {

        heading.textContent +=
            titles[titleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (charIndex > 0) {

        heading.textContent =
            titles[titleIndex].substring(
                0,
                charIndex - 1
            );

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        titleIndex++;

        if (titleIndex >= titles.length) {
            titleIndex = 0;
        }

        setTimeout(typeEffect, 500);
    }
}

window.addEventListener("load", () => {

    heading.textContent = "";

    setTimeout(typeEffect, 1000);
});


// ==========================
// AOS ANIMATION
// ==========================
/*
AOS.init({

    duration: 1000,
    offset: 100,
    once: true
});
*/

// ==========================
// SCROLL TO TOP BUTTON
// ==========================

// Create button dynamically

const topBtn = document.createElement("button");

topBtn.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "scrollTopBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563eb";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.fontSize = "18px";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ==========================
// PROJECT CARD HOVER EFFECT
// ==========================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x =
            e.clientX -
            card.getBoundingClientRect().left;

        const y =
            e.clientY -
            card.getBoundingClientRect().top;

        card.style.transform =
            `perspective(1000px)
             rotateX(${-(y - 150) / 25}deg)
             rotateY(${(x - 150) / 25}deg)
             translateY(-10px)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";
    });
});