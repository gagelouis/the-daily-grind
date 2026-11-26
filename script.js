// The Daily Grind JavaScript

console.log("The Daily Grind is ready!");
// The Daily Grind JavaScript

// Select HTML elements
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

// Open and close the mobile menu
menuToggle.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

const navLinks = document.querySelectorAll(".navigation a");

// Close the mobile menu
function closeMenu() {
    navigation.classList.remove("active");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}

// Close menu when a navigation link is clicked
navLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

// Close menu when Escape is pressed
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && navigation.classList.contains("active")) {
        closeMenu();
        menuToggle.focus();
    }
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    if (
        navigation.classList.contains("active") &&
        !navigation.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        closeMenu();
    }
});

// Reset mobile menu when switching to desktop
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});