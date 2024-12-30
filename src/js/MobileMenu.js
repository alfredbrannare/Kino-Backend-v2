export function toggleMobileMenu() {
  // Ensure the DOM is fully loaded before running the script
  document.addEventListener('DOMContentLoaded', () => {
    // Select the hamburger button and the menu items
    const hamburger = document.querySelector('.hamburger'); // Use the class .hamburger
    const menu = document.querySelector('.hamburger__items');

    // Check if the elements exist before adding event listeners
    if (hamburger && menu) {
      hamburger.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide the menu
        menu.classList.toggle('active');
        
        // Toggle the 'open' class to animate the hamburger icon
        hamburger.classList.toggle('open');
      });
    }
  });
}