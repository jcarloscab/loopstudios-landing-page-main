// variables
const logo = document.getElementById("logo");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const mainMenu = document.getElementById("main-menu");

// listeners
openMenu.addEventListener("click", () => {
  mainMenu.classList.add("main-menu--open");
  logo.classList.add("logo--fixed");
  openMenu.classList.add("open-menu--hidden");
});

closeMenu.addEventListener("click", () => {
  mainMenu.classList.remove("main-menu--open");
  logo.classList.remove("logo--fixed");
  openMenu.classList.remove("open-menu--hidden");
  scrollTo(0, 0);
});
