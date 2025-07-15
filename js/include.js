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
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error("Lỗi:", error);
    });
}
