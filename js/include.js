function includeHTML(callback) {
  const elements = document.querySelectorAll("[w3-include-html]");
  let total = elements.length;

  if (total === 0) {
    if (typeof callback === "function") callback();
    return;
  }

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
          total--;
          if (total === 0 && typeof callback === "function") callback();
        })
        .catch((err) => {
          el.innerHTML = "Lỗi khi tải file: " + err.message;
          total--;
          if (total === 0 && typeof callback === "function") callback();
        });
    } else {
      total--;
      if (total === 0 && typeof callback === "function") callback();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  includeHTML(function () {
    // ✅ Gắn sự kiện toggle menu sau khi đã nhúng xong
    const toggleBtn = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav .menu");

    if (toggleBtn && menu) {
      toggleBtn.addEventListener("click", function () {
        menu.classList.toggle("show");
      });
    }
  });
});
