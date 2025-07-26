document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.getElementById('main-content');

  async function loadPage(path) {
    const res = await fetch(path);
    const html = await res.text();
    mainContent.innerHTML = html;
    window.history.pushState({}, '', path);
    window.scrollTo(0, 0); // Cuộn lên đầu
  }

  // Xử lý click vào các link nội bộ
  document.body.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (target && target.getAttribute('href')?.startsWith('/khoahoc')) {
      e.preventDefault();
      loadPage(target.getAttribute('href'));
    }
  });

  // Khi người dùng bấm back/forward
  window.addEventListener('popstate', () => {
    loadPage(location.pathname);
  });

  // Load trang hiện tại nếu không phải index.html
  if (location.pathname !== '/' && location.pathname !== '/index.html') {
    loadPage(location.pathname);
  }
});
