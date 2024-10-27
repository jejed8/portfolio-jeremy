// ----- GSAP ----- //

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!

  const scrollContent = document.querySelector('.projects-content');
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
          anticipatePin: 1
      }
  });
});

const container = document.querySelector(".horizontal-scroll-container");

window.addEventListener("wheel", (event) => {
  // Prevent default vertical scroll behavior
  event.preventDefault();

  // Scroll horizontally based on the vertical scroll amount
  container.scrollBy({
    left: event.deltaY, // Use deltaY to scroll horizontally
    behavior: "smooth",
  });
});
