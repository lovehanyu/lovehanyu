document.addEventListener("DOMContentLoaded", () => {
  const includeHeader = async () => {
    try {
      const response = await fetch("components/_header.html");
      if (!response.ok) throw new Error("Không thể tải header");

      const html = await response.text();
      document.getElementById("header-include").innerHTML = html;

      // Sau khi header được nhúng xong, gắn sự kiện scroll
      const nav = document.querySelector(".header-bot");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      });
    } catch (err) {
      console.error("Lỗi khi nhúng header:", err);
    }
  };

  includeHeader();
});
