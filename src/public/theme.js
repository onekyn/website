/**
 * Theme Switcher for Light/Dark Mode
 * Handles both user preference and system preference
 */

// Initialize theme based on saved preference or system preference
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

if (savedTheme == "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark-theme");
}

// Setup the theme toggle button when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const htmlElement = document.documentElement;
            const isDarkMode = htmlElement.classList.contains("dark-theme");

            if (isDarkMode) {
                htmlElement.classList.remove("dark-theme");
                localStorage.setItem("theme", "light");
            } else {
                htmlElement.classList.add("dark-theme");
                localStorage.setItem("theme", "dark");
            }

        });
    }
});
