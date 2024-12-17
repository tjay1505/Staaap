const scrollContainer = document.querySelector(".scroll-container");
const sections = document.querySelectorAll(".section");
const navButtons = document.querySelectorAll(".nav-bar button");
let currentSection = 0;
let isScrolling = false;

// Handle scrolling
scrollContainer.addEventListener(
  "wheel",
  (event) => {
    if (isScrolling) return;
    let wheelSpeed = event.deltaY;
    console.log(wheelSpeed);
    console.log(event);

    if (event.deltaY > 0) {
      wheelSpeed = 1;
    }

    event.preventDefault();
    isScrolling = true;

    if (wheelSpeed > 0) {
      currentSection = Math.min(currentSection + 1, sections.length - 1);
    } else {
      currentSection = Math.max(currentSection - 1, 0);
    }

    scrollToSection(currentSection);
  },
  {}
);

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const sectionIndex = parseInt(button.getAttribute("data-section"));
    currentSection = sectionIndex;
    scrollToSection(currentSection);
  });
});

function scrollToSection(sectionIndex) {
  const targetScrollPosition = sectionIndex * window.innerWidth;
  scrollContainer.scrollTo({
    left: targetScrollPosition,
    behavior: "smooth",
  });

  setTimeout(() => {
    isScrolling = false;
  }, 600);
}

scrollContainer.addEventListener("scroll", () => {
  const targetScrollPosition = currentSection * window.innerWidth;

  if (Math.abs(scrollContainer.scrollLeft - targetScrollPosition) > 1) {
    scrollContainer.scrollTo({
      left: targetScrollPosition,
      behavior: "smooth",
    });
  }
});

const vid = document.getElementById("section-2-vid");

