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
}
