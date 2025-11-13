document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".scroll-link");
  const navbar = document.querySelector(".custom-navbar");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      if (this.hash !== "") {
        e.preventDefault();
        const targetId = this.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navbarHeight = navbar.offsetHeight;
          window.scrollTo({
            top: targetElement.offsetTop - navbarHeight - 10,
            behavior: "smooth"
          });
        }
        history.pushState(null, null, this.hash);
      }
    });
  });

  window.addEventListener("scroll", function() {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const dropdowns = document.querySelectorAll('.nav-item.dropdown');
  dropdowns.forEach(drop => {
    drop.addEventListener('show.bs.dropdown', function() {
      const menu = drop.querySelector('.dropdown-menu');
      menu.classList.add('show-slide'); // ajoute slide animation

      const items = menu.querySelectorAll('.dropdown-item');
      items.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateX(20px)';
        setTimeout(() => {
          item.style.transition = 'all 0.3s ease';
          item.style.opacity = 1;
          item.style.transform = 'translateX(0)';
        }, index * 50);
      });
    });
  });
});
