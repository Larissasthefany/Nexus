const hamburger = document.getElementById("hamburger");
const menuMobile = document.getElementById("menuMobile");
const register = document.getElementById("btn-register");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuMobile.classList.toggle("active");
});

register.addEventListener("click", (e) => {
  e.preventDefault();

  const confirmRegistration = confirm("Button don't have functionality yet!");

  if (confirmRegistration) {
    confirm("User clicked Ok");
  } else {
    confirm("User clicked cancel");
  }
});
