fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    document
      .getElementById("header-container")
      .appendChild(doc.body.firstChild);
  });

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    document
      .getElementById("footer-container")
      .appendChild(doc.body.firstChild);
    document.getElementById("anio-footer").innerHTML = new Date().getFullYear();
  });
