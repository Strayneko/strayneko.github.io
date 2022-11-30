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

window.onscroll = () => {
  /*
  * ===============
  * Navbar scroll
  * ===============
  */

  window.pageYOffset > el("#hero").offsetTop
    ? elClass("#header").add("navbar-fixed")
    : elClass("#header").remove("navbar-fixed");

  /*
* ===============
* Scroll spy
* ===============
*/

  if (window.pageYOffset > el("#always-online").offsetTop) {
    el('a[href="#always-online"]').classList.add("active");
    el('a[href="#overview"]').classList.remove("active");
  } else {
    el('a[href="#overview"]').classList.add("active");
    el('a[href="#always-online"]').classList.remove("active");
  }
  if (window.pageYOffset > el("#pricing").offsetTop) {
    el('a[href="#pricing"]').classList.add("active");
    el('a[href="#always-online"]').classList.remove("active");
  } else {
    el('a[href="#pricing"]').classList.remove("active");
  }
  if (window.pageYOffset > el("#feedback").offsetTop) {
    el('a[href="#feedback"]').classList.add("active");
    el('a[href="#pricing"]').classList.remove("active");
  } else {
    el('a[href="#feedback"]').classList.remove("active");
  }
};

/*
* ===============
* Carousel
* ===============
*/
el(".carousel-wrapper").scrollLeft = window.innerWidth / 20;
