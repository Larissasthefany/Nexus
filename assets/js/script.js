const inputCheck = document.querySelector(".switch input");

inputCheck.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  if (isDark) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  inputCheck.checked = true;  
} else {
  document.body.classList.remove("dark-mode");
  inputCheck.checked = false;
}
