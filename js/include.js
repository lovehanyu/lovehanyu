document.addEventListener("DOMContentLoaded", () => {
  const includeHeader = async () => {
    try {
      const response = await fetch("components/_header.html");
      if (!response.ok) throw new Error("Không thể tải header");

      const html = await response.text();
      document.getElementById("header-include").innerHTML = html;
    } catch (err) {
      console.error("Lỗi khi nhúng header:", err);
    }
  };

  includeHeader();
});
