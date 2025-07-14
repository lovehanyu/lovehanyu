// include.js
document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll('[w3-include-html]');
  includes.forEach(el => {
    const file = el.getAttribute("w3-include-html");
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Không thể tải ${file}`);
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
      })
      .catch(err => {
        el.innerHTML = `<p style="color:red;">Lỗi tải: ${file}</p>`;
        console.error(err);
      });
  });
});
