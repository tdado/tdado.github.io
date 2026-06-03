document.addEventListener("DOMContentLoaded", () => {
  let dark = localStorage.getItem("theme") === "dark";

  const icon = document.getElementById("theme-icon");

  if (dark) {
    document.body.classList.add("dark");
    icon.textContent = "☀️";
  }

  document.getElementById("theme-toggle").addEventListener("click", () => {
    dark = !dark;

    document.body.classList.toggle("dark", dark);
    icon.textContent = dark ? "☀️" : "🌙";

    localStorage.setItem("theme", dark ? "dark" : "light");
  });
});