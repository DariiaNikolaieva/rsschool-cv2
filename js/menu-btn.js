const menu = document.querySelector(".nav_container");
const ham = document.querySelector(".nav__button");

ham.addEventListener("click", toggleMenu);

menu.classList.contains("is-open");

function toggleMenu() {
  if (menu.classList.contains("is-open")) {
    menu.classList.remove("is-open");
    ham.classList.remove("is-open");
  } else {
    menu.classList.add("is-open");
    ham.classList.add("is-open");
  }
}

var menuLinks = document.querySelectorAll(".nav_link");

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", toggleMenu);
});
