const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  //Toogle Mobile Menu Visibility
  document.body.classList.toggle("show-mobile-menu");
});

//Close Menu When Cilcked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Close menu when nav link is clicked
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => menuOpenButton.click());
});

var swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25, // Fix typo (should be camelCase)

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    // Small screens
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // Tablets
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Desktop
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
