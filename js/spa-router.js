document.addEventListener("DOMContentLoaded", function () {
  const contentArea = document.getElementById("page-content");

  // Kích hoạt toàn bộ liên kết nội bộ
  function setupInternalLinks() {
    document.querySelectorAll("a").forEach(link => {
      const href = link.getAttribute("href");
      if (href && !href.startsWith("http") && !href.startsWith("#") && !link.dataset.static) {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          loadPage(href);
          window.history.pushState(null, "", href);
        });
      }
    });
  }

  // Tải nội dung vào <main>
  function loadPage(url) {
    fetch(url)
      .then(res => res.text())
      .then(html => {
        const temp = document.createElement("div");
        temp.innerHTML = html;
        const newMain = temp.querySelector("main");
        if (newMain) {
          contentArea.innerHTML = newMain.innerHTML;
          setupInternalLinks(); // Kích hoạt lại link bên trong nội dung mới
          window.scrollTo(0, 0);
        } else {
          contentArea.innerHTML = "<p>Lỗi: Không tìm thấy nội dung chính.</p>";
        }
      })
      .catch(err => {
        contentArea.innerHTML = "<p>Lỗi tải trang.</p>";
      });
  }

  // Khi bấm nút quay lại
  window.addEventListener("popstate", () => loadPage(location.pathname));

  setupInternalLinks(); // Kích hoạt lần đầu
});
