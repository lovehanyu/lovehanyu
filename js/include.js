document.addEventListener("DOMContentLoaded", async function () {
  await includeHTML("/components/header.html", "header-placeholder");
  await includeHTML("/components/footer.html", "footer-placeholder");

  // Nạp lại CSS cho header (rất quan trọng)
  injectCSS("css/header.css");
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

function injectCSS(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href + "?v=" + new Date().getTime(); // chống cache
  document.head.appendChild(link);
}
