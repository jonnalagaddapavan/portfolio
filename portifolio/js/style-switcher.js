// Style Switcher Toggle
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// Theme Color Switching
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

// Light/Dark Mode Toggle
const dayNight = document.querySelector(".day-night");

// Function to update icon and colors
function updateThemeIcon() {
    const icon = dayNight.querySelector("i");
    if(document.body.classList.contains("dark")) {
        // Dark mode - show sun icon (light color)
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        icon.style.color = "#ffffff";
        dayNight.style.backgroundColor = "#333";
    } else {
        // Light mode - show moon icon (dark color)
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        icon.style.color = "#333333";
        dayNight.style.backgroundColor = "#f0f0f0";
    }
}

// Click event for theme toggle
dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    updateThemeIcon();
});

// Check saved theme preference on load
window.addEventListener("load", () => {
    // Check local storage for saved theme
    if(localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    } else if(localStorage.getItem("theme") === "light") {
        document.body.classList.remove("dark");
    }
    
    // Check system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    if(prefersDark.matches && !localStorage.getItem("theme")) {
        document.body.classList.add("dark");
    }
    
    // Initialize icon
    const icon = document.createElement("i");
    icon.classList.add("fas");
    dayNight.appendChild(icon);
    updateThemeIcon();
});