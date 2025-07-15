document.addEventListener("DOMContentLoaded", async function () {
  await includeHTML("/components/header.html", "header-placeholder");
  await includeHTML("/components/footer.html", "footer-placeholder");

  // Force reflow sau khi nhúng header (rất quan trọng cho sticky!)
  const header = document.querySelector(".site-header");
  if (header) {
    header.style.display = "none";
    header.offsetHeight; // Force layout
    header.style.display = "block";
  }
});

function includeHTML(file, elementId) {
  return fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("Không tải được " + file);
      return response.text();
    })
    .then(html => {
      const container = document.getElementById(elementId);
      container.innerHTML = html;
    })
    .catch(error => {
      console.error("Lỗi khi nhúng:", error);
    });
}
