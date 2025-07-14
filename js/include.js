function includeHTML(callback) {
  const elements = document.querySelectorAll("[w3-include-html]");
  let total = elements.length;
  if (total === 0) {
    callback(); // Gọi ngay nếu không có file cần nhúng
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
          if (total === 0) callback(); // Gọi callback sau khi tất cả file đã load xong
        })
        .catch((err) => {
          el.innerHTML = "Lỗi khi tải file: " + err.message;
          total--;
          if (total === 0) callback();
        });
    } else {
      total--;
      if (total === 0) callback();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  includeHTML(function () {
    // ✅ Đảm bảo DOM đã nhúng xong mới gắn sự kiện toggle menu
    const toggleBtn = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav .menu");

    if (toggleBtn && menu) {
      toggleBtn.addEventListener("click", function () {
        menu.classList.toggle("show");
      });
    }
  });
});
