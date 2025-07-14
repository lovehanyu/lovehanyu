// Hiệu ứng cuộn: Thêm class 'sticky' vào header khi cuộn xuống
window.addEventListener("scroll", function () {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
