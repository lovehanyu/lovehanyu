function includeHTML() {
  const elements = document.querySelectorAll("[w3-include-html]");
  elements.forEach((el) => {
    const file = el.getAttribute("w3-include-html");
    if (file) {
      fetch(file)
        .then((res) => {
          if (res.ok) return res.text();
          else throw new Error("Không thể tải " + file);
        })
        .then((data) => {
          el.innerHTML = data;
          el.removeAttribute("w3-include-html");
          includeHTML(); // Gọi lại nếu có nhúng lồng nhau
        })
        .catch((err) => {
          el.innerHTML = "Lỗi khi tải file: " + err.message;
        });
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav .menu");

  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  }
});
