function includeHTML() {
  const z = document.querySelectorAll('[w3-include-html]');
  z.forEach(elm => {
    const file = elm.getAttribute("w3-include-html");
    if (file) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          elm.innerHTML = data;
          elm.removeAttribute("w3-include-html");
          includeHTML();
        });
    }
  });
}
