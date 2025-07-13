// 🔍 Xử lý tìm kiếm khi nhấn Enter hoặc click icon
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  function performSearch() {
    const keyword = searchInput.value.trim().toLowerCase();
    if (!keyword) return;

    // ✅ Mô phỏng tìm kiếm bằng cách cuộn đến các section chứa từ khóa
    const allSections = document.querySelectorAll("section, div, a, h2, h3, p, span");
    let found = false;

    allSections.forEach((el) => {
      if (el.innerText && el.innerText.toLowerCase().includes(keyword)) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.backgroundColor = "#ffffcc"; // Highlight nhẹ
        setTimeout(() => (el.style.backgroundColor = ""), 1500); // Xoá highlight sau 1.5s
        found = true;
        return;
      }
    });

    if (!found) alert("Không tìm thấy nội dung liên quan!");
  }

  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") performSearch();
  });

  searchBtn.addEventListener("click", performSearch);
});
