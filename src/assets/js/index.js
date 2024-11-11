const burgerBtn = document.getElementsByClassName("burger-btn")[0];
const burgerMenu = document.getElementsByClassName("burger-menu")[0];
const burgerMenuOuter = document.getElementsByClassName("burger-menu-outer")[0];

burgerMenuOuter.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  burgerMenuOuter.classList.toggle("active");
});

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  burgerMenuOuter.classList.toggle("active");
});

// Function to handle scrolling when the hash changes
function handleHashChange() {
  // Check if there is a hash in the URL
  if (window.location.hash) {
    // Get the target section based on the hash
    const targetId = window.location.hash.substring(1); // Remove the '#' character
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate the top position of the target element
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;

      // Scroll to the target position plus an additional 20 pixels
      window.scrollTo({
        top: targetPosition - 100, // Adjust for 20px offset
        behavior: "smooth", // Smooth scroll effect
      });
    }
  }
}

// Add an event listener for hash changes
window.addEventListener("hashchange", handleHashChange);

// Optional: Call the function on page load in case there's already a hash
document.addEventListener("DOMContentLoaded", () => {
  handleHashChange();
});
