const hamburger = document.getElementById("hamburger");
const menuMobile = document.getElementById("menuMobile");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuMobile.classList.toggle("active");
});
