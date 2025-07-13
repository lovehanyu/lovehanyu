// include.js

function includeHTML(id, url) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Cannot fetch ${url}`);
      return res.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => {
      console.error('Include error:', err);
    });
}

// Gọi hàm để nhúng
includeHTML("header-include", "header.html");
includeHTML("footer-include", "footer.html");
