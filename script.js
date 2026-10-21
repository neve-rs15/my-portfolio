
console.log("Welcome to Nevethaa's Portfolio!");

const sections = document.querySelectorAll("body > section");
const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

function showSection(sectionId) {
    const target = document.getElementById(sectionId);

    if (!target || !target.matches("body > section")) {
        return;
    }

    // Hide every section first
    sections.forEach((section) => {
        section.hidden = true;
    });

    // Show only the selected section
    target.hidden = false;

    // Highlight the selected navigation link
    navLinks.forEach((link) => {
        const active = link.getAttribute("href") === "#" + sectionId;
        link.classList.toggle("active", active);

        if (active) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    window.scrollTo(0, 0);
}

// Navigation click
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const sectionId = link.getAttribute("href").slice(1);

        if (document.getElementById(sectionId)) {
            event.preventDefault();
            showSection(sectionId);
            history.replaceState(null, "", "#" + sectionId);
        }
    });
});

showSection("home");
