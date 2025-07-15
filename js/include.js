document.addEventListener("DOMContentLoaded", function () {
  includeHTML("/components/header.html", "header-placeholder");
  includeHTML("/components/footer.html", "footer-placeholder");
});

function includeHTML(file, elementId) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("Không tải được " + file);
      return response.text();
    })
    .then(html => {
      const container = document.getElementById(elementId);
      container.innerHTML = html;

      // Force reflow (đảm bảo sticky hoạt động nếu render trễ)
      container.style.display = "none";
      container.offsetHeight; // Gây reflow
      container.style.display = "block";
    })
    .catch(error => {
      console.error("Lỗi khi nhúng:", error);
    });
}
