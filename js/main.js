// js/main.js

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("main-menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});
