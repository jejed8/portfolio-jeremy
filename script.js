// ----- GSAP ----- //

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!
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
