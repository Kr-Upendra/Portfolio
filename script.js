const menuIcon = document.getElementById("menuicon");
const navbar = document.querySelector(".navbar__in");
const navigation = document.getElementById("navigation");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const topBtn = document.querySelector(".goto__top");

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

const showReachTopButton = () => {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
    topBtn.style.display = "block";
  else topBtn.style.display = "none";
};

// const reachTop = () => {

// };

window.onscroll = function () {
  showReachTopButton();
};

topBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
