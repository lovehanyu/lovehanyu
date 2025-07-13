document.addEventListener("DOMContentLoaded", function () {
  fetch("components/_header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;
    });

  fetch("components/_footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
