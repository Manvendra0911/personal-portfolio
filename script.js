// Portfolio Website JavaScript

console.log("Portfolio Loaded Successfully");

// Dark Mode Toggle

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkBtn.innerHTML = "☀️";
    } else {
        darkBtn.innerHTML = "🌙";
    }

});

// Greeting Message

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

let message = "";

if (hour < 12) {
    message = "Good Morning 👋";
}
else if (hour < 18) {
    message = "Good Afternoon 👋";
}
else {
    message = "Good Evening 👋";
}

greeting.innerText = message;

// Current Year

document.getElementById("year").innerText =
new Date().getFullYear();

// Scroll Reveal Animation

const sections = document.querySelectorAll(".section");

function revealSections() {

    sections.forEach(section => {

        const sectionTop =
        section.getBoundingClientRect().top;

        const screenHeight =
        window.innerHeight;

        if (sectionTop < screenHeight - 100) {
            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

// Typing Effect

const roles = [
    "Software Developer",
    "Java Developer",
    "Backend Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement =
document.querySelector(".hero h2");

function typeRole() {

    if (charIndex <
        roles[roleIndex].length) {

        roleElement.textContent +=
        roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole, 100);

    } else {

        setTimeout(eraseRole, 1500);

    }

}

function eraseRole() {

    if (charIndex > 0) {

        roleElement.textContent =
        roles[roleIndex].substring(
            0,
            charIndex - 1
        );

        charIndex--;

        setTimeout(eraseRole, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeRole, 300);

    }

}

roleElement.textContent = "";

typeRole();
