function handleSearch() {
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    alert("Bạn đã tìm: " + query);
    // Hoặc điều hướng tới trang tìm kiếm nếu bạn có:
    // window.location.href = "/tim-kiem.html?q=" + encodeURIComponent(query);
  }
}

// Nếu muốn kích hoạt bằng Enter:
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSearch();
    });
  }
});
