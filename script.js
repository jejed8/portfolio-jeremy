// ----- GSAP ----- //

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!

  const scrollContent = document.querySelector(".projects-content");
  const totalWidth = scrollContent.scrollWidth - window.innerWidth; // Total scrollable width

  gsap.to(scrollContent, {
    x: -totalWidth, // Scroll to the end of the content
    ease: "none",
    scrollTrigger: {
      trigger: ".projects",
      start: "top top", // Start when the top of the section is at the top of the viewport
      end: () => "+=" + totalWidth, // End when the total scrollable width is reached
      pin: true, // Pin the section during the scroll
      scrub: 1, // Smooth scrubbing
      anticipatePin: 1,
    },
  });
});

// ----- Smooth scroll ----- //

document.querySelectorAll(".nav-list-item a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      if (targetId === "projects") {
        // Use GSAP's scrollIntoView for the projects section to avoid conflicts
        ScrollTrigger.scrollIntoView(targetElement, {
          offsetY: 120, // Adjust this offset if needed to align with your navbar
          behavior: "smooth",
        });
      } else {
        // For other sections, use standard scroll behavior
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});
