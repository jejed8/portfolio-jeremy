// ----- Cursor ----- //

document.addEventListener("mousemove", (e) => {
  const cursor = document.getElementById("custom-cursor");
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Function to handle cursor visibility based on window size
function handleCursorVisibility() {
  const cursor = document.getElementById("custom-cursor");

  if (window.innerWidth <= 768) {
    // Adjust the breakpoint as needed
    // Remove the mousemove event listener
    document.removeEventListener("mousemove", updateCursor);
    cursor.style.display = "none"; // Hide the custom cursor
  } else {
    // Add the mousemove event listener
    document.addEventListener("mousemove", updateCursor);
    cursor.style.display = "block"; // Show the custom cursor
  }
}

// Function to update cursor position
function updateCursor(e) {
  const cursor = document.getElementById("custom-cursor");
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
}

// Add the event listener for resizing
window.addEventListener("resize", handleCursorVisibility);

// Initial call to set cursor visibility
handleCursorVisibility();

document.querySelectorAll(".contact-container a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const cursor = document.getElementById("custom-cursor");
    cursor.classList.add("hover");
  });

  link.addEventListener("mouseleave", () => {
    const cursor = document.getElementById("custom-cursor");
    cursor.classList.remove("hover");
  });
});

document.querySelectorAll(".item a, .bloc-1 a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const cursor = document.getElementById("custom-cursor");
    cursor.classList.add("item-hover");
  });

  link.addEventListener("mouseleave", () => {
    const cursor = document.getElementById("custom-cursor");
    cursor.classList.remove("item-hover");
  });
});

// ---- PROJECT PAGE CUSTOM CURSOR ---- //

document.querySelectorAll('.preprod a').forEach((link) => {
  link.addEventListener('mouseenter', () => {
    const cursor = document.getElementById('custom-cursor');
    cursor.classList.add('item-hover'); // Use 'item-hover' or another class if you want a specific cursor change
  });

  link.addEventListener('mouseleave', () => {
    const cursor = document.getElementById('custom-cursor');
    cursor.classList.remove('item-hover');
  });
});


// ----- Navbar Toggle ----- //
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("show");
});

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

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the .poster-info section to slide over the .hero section
  gsap.to(".poster-info", {
    y: -200, // Adjust this value as needed for the sliding distance
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".poster-info",
      start: "top top", // Animation starts when .hero reaches the top of the viewport
      end: "bottom top", // Animation ends when .hero leaves the viewport at the top
      scrub: true, // Smooth scroll-based animation
      duration: 3,
      y: '-200%',
    },
  });

  gsap.to(".hero", {
    y: 200,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
      duration: 3,
    }
  })
});

// ----- Navbar Toggle ----- //

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

// ----- Copy email ----- //

const email = "jejeduverseau@gmail.com";

function copyEmail() {
  navigator.clipboard
    .writeText(email)
    .then(() => {
      //alert("Email copied to clipboard: " + email);
    })
    .catch((err) => {
      console.error("Could not copy email: ", err);
    });
}

function openMail() {
  window.location.href = "mailto:" + email;
}
