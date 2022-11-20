const el = el => document.querySelector(el);
const elClass = e => el(e).classList;
/*
       * ===============
       * Hamburger button
       * ===============
       */
const hamburgerBtn = document.getElementById("hamburger");
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hamburger-active");
  document.querySelector(".navbar-menu").classList.toggle("hidden");
});

/*
* ===============
* Navbar scroll
* ===============
*/
window.onscroll = () => {
  window.pageYOffset > el("#hero").offsetTop
    ? elClass("#header").add("navbar-fixed")
    : elClass("#header").remove("navbar-fixed");
};
