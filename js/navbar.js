document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.getElementById("navbarToggler");
    const navbar = document.getElementById("navbar");
  
    navbarToggler.addEventListener("click", function() {
      navbar.classList.toggle("toggled");
    });
  
    document.addEventListener("click", function(event) {
      const isClickInside = navbar.contains(event.target) || navbarToggler.contains(event.target);
      if (!isClickInside) {
        navbar.classList.remove("toggled");
      }
    });
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });