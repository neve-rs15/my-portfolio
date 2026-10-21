
console.log("Welcome to Nevethaa's Portfolio!");

const sections = document.querySelectorAll(
  "body > section"
);

const navLinks = document.querySelectorAll(
  '.navbar a[href^="#"]'
);

function showSection(sectionId) {
  const target = document.getElementById(sectionId);

  if (!target || !target.matches("body > section")) {
    return;
  }

  sections.forEach((section) => {
    section.hidden = section !== target;
  });

  window.scrollTo(0, 0);
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const sectionId = link.getAttribute("href").substring(1);

    if (document.getElementById(sectionId)?.matches("body > section")) {
      event.preventDefault();
      showSection(sectionId);
      history.replaceState(null, "", "#" + sectionId);
    }
  });
});

const initialSection = window.location.hash.substring(1);
showSection(initialSection || "home");
