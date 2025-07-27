async function loadPage(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error('Không thể tải trang');
    const html = await res.text();
    document.getElementById('main-content').innerHTML = html;

    window.history.pushState({}, '', path);
    window.scrollTo(0, 0);
  } catch (err) {
    document.getElementById('main-content').innerHTML = '<h2>Trang không tồn tại</h2>';
  }
}

document.body.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (
    link &&
    link.getAttribute('href')?.startsWith('/') &&
    !link.getAttribute('href').includes('.') // bỏ qua .pdf, .jpg, .mp3...
  ) {
    e.preventDefault();
    loadPage(link.getAttribute('href'));
  }
});

window.addEventListener('popstate', () => {
  loadPage(location.pathname);
});

if (location.pathname !== '/' && location.pathname !== '/index.html') {
  loadPage(location.pathname);
}

