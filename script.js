const menuIcon = document.getElementById("menuicon");
const navbar = document.querySelector(".navbar__in");
const navigation = document.getElementById("navigation");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const topBtn = document.querySelector(".goto__top");
const showProjectBox = document.querySelector(".showProject");
const zoomBtns = document.querySelectorAll(".el__plus");
const projectCloseBtn = document.querySelector(".showproject__closebtn");
const projectCards = document.querySelectorAll(".project__card");
const showProjectImage = document.querySelector(".project__image--img");
const showProjectTitle = document.querySelector(
  ".project__image--titlebox-title"
);

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

window.onscroll = function () {
  showReachTopButton();
};

topBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const getImageUrlAndProjectTitle = (projectCards) => {
  const imageTag = projectCards.querySelector(".el__projectimage");
  const titleTag = projectCards.querySelector(".el__projecttitle");
  const imageUrl = imageTag.getAttribute("src");
  const projectTitle = titleTag.textContent;
  return { projectTitle, imageUrl };
};

const showProject = () => {
  for (let i = 0; i < zoomBtns.length; i++) {
    zoomBtns[i].addEventListener("click", () => {
      const project = getImageUrlAndProjectTitle(projectCards[i]);
      showProjectBox.style.display = "flex";
      showProjectImage.setAttribute("src", `${project.imageUrl}`);
      showProjectTitle.textContent = project.projectTitle;
    });
  }
};

const hideProject = () => {
  projectCloseBtn.addEventListener("click", () => {
    showProjectBox.style.display = "none";
  });
};

showProject();
hideProject();
