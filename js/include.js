// include.js
document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll('[w3-include-html]');
  includes.forEach(el => {
    const file = el.getAttribute("w3-include-html");
    fetch(file)
      .then(response => response.text())
      .then(data => {
        el.innerHTML = data;
      });
  });
});
