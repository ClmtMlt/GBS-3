document.addEventListener("turbo:load", () => {
  const toggler = document.getElementById("mobileNavbarToggler");
  const menu = document.getElementById("mobileNavbarMenu");
  const navbar = document.querySelector(".navbar-custom");

  // Hamburger mobile
  if (toggler && menu) {
    toggler.addEventListener("click", () => {
      menu.classList.toggle("d-block");
    });
  }

  // Navbar shadow au scroll
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Scroll smooth pour les ancres
  const links = document.querySelectorAll(".scroll-link");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      if (this.hash !== "") {
        e.preventDefault();
        const targetId = this.hash.substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          const navbarHeight = navbar.offsetHeight;
          window.scrollTo({
            top: target.offsetTop - navbarHeight - 10,
            behavior: "smooth"
          });
        }
        history.pushState(null, null, this.hash);
      }
    });
  });
});
