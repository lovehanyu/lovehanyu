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
      document.getElementById(elementId).innerHTML = html;
    })
    .catch(error => {
      console.error("Lỗi khi nhúng:", error);
    });
  // Sau khi nhúng xong, gọi force repaint:
.then(html => {
  const container = document.getElementById(elementId);
  container.innerHTML = html;

  // Bắt browser render lại
  container.style.display = "none";
  container.offsetHeight; // force reflow
  container.style.display = "block";
})
}
