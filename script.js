
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
const projectsButton = document.querySelector(".view-projects-btn");

if (projectsButton) {
    projectsButton.addEventListener("click", function (event) {
        event.preventDefault();
        showSection("projects");
        history.replaceState(null, "", "#projects");
    });
}
    // Show only the selected section
    target.hidden = false;

target.classList.remove("section-animate");
void target.offsetWidth;
target.classList.add("section-animate");


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


document.querySelectorAll(".skills-flip-grid .skill-flip-card")
    .forEach(function (card) {

        function flipCard() {
            const isFlipped = card.classList.toggle("flipped");
            card.setAttribute("aria-pressed", String(isFlipped));
        }

        card.addEventListener("click", flipCard);

        card.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                flipCard();
            }
        });
    });

const learningPath = document.querySelector(".cert-tree");
const learningPathButton = document.querySelector(".cert-tree-root");

if (learningPath && learningPathButton) {
    learningPath.classList.add("is-collapsed");

    learningPathButton.setAttribute("role", "button");
    learningPathButton.setAttribute("tabindex", "0");
    learningPathButton.setAttribute("aria-expanded", "false");

    function toggleLearningPath() {
        const expanded = learningPath.classList.toggle("is-expanded");

        learningPath.classList.toggle("is-collapsed", !expanded);
        learningPathButton.setAttribute("aria-expanded", String(expanded));
    }

    learningPathButton.addEventListener("click", toggleLearningPath);

    learningPathButton.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleLearningPath();
        }
    });
}

const profileImageWrap = document.querySelector(".home-image-wrap");
const profileImage = profileImageWrap?.querySelector("img");

if (profileImageWrap && profileImage) {
    profileImageWrap.addEventListener("mousemove", function (event) {
        const rect = profileImageWrap.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 12;
        const rotateX = (0.5 - y) * 12;

        profileImage.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    profileImageWrap.addEventListener("mouseleave", function () {
        profileImage.style.transform = "";
    });
}


const typingText = document.getElementById("typingText");

if (typingText) {
    const message = "Hello, I'm Nevethaa R S!";
    let index = 0;
    let deleting = false;

    function typeHeading() {
        typingText.textContent = message.substring(0, index);

        let delay = deleting ? 60 : 100;

        if (!deleting) {
            index++;

            if (index > message.length) {
                deleting = true;
                delay = 1500;
            }
        } else {
            index--;

            if (index < 0) {
                index = 0;
                deleting = false;
                delay = 400;
            }
        }

        setTimeout(typeHeading, delay);
    }

    typeHeading();
}

const homeSection = document.querySelector("#home");

if (homeSection) {
    const wave = document.createElement("div");
    wave.className = "cursor-wave";
    wave.setAttribute("aria-hidden", "true");
    homeSection.prepend(wave);

    homeSection.addEventListener("mousemove", function (event) {
        const rect = homeSection.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        wave.style.setProperty("--mouse-x", `${x}%`);
        wave.style.setProperty("--mouse-y", `${y}%`);
    });

    homeSection.addEventListener("mouseleave", function () {
        wave.style.setProperty("--mouse-x", "50%");
        wave.style.setProperty("--mouse-y", "50%");
    });
}

