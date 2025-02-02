const navbar = document.querySelector(".navbar");
const halfPageHeight = window.innerHeight * 0.5;

window.addEventListener("scroll", function () {
  if (window.scrollY > halfPageHeight) {
    navbar.classList.add("fixed-nav", "active");
  } else {
    navbar.classList.remove("active");
  }
});
