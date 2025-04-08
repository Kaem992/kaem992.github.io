const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

let lastScrollTop = 0;
const navMenu = document.querySelector(".navbar .nav-menu");

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

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navMenu.classList.add("hide");
  } else {
    // Scrolling up
    navMenu.classList.remove("hide");
  }


  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // prevent negative
});
