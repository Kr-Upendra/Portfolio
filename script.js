const menuIcon = document.getElementById("menuicon");
const navbar = document.querySelector(".navbar__in");
const navigation = document.getElementById("navigation");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");

const showNavbar = () => {
  navigation.style.left = "0";
  menuIcon.setAttribute("aria-hidden", "false");
  overlay.style.display = "block";
};

const hideNavbar = () => {
  navigation.style.left = "-100%";
  menuIcon.setAttribute("aria-hidden", "true");
  overlay.style.display = "none";
};

menuIcon.addEventListener("click", () => {
  const menuValue = menuIcon.getAttribute("aria-hidden");
  if (menuValue === "true") {
    showNavbar();
  } else {
    hideNavbar();
  }
});

const hideNavOnOutTouch = () => {
  overlay.addEventListener("click", hideNavbar);
};

hideNavOnOutTouch();

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    navbar.classList.add("on__scroll");
  else navbar.classList.remove("on__scroll");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    "This functionality is not implemented Yet,\nPlease use email instead! Thanks."
  );
});
