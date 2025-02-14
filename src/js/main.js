import "bootstrap/dist/js/bootstrap.bundle.min.js";

// opening card link in new window

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    const url = this.getAttribute("data-url");
    if (url) {
      window.open(url, "_blank");
    }
  });
});
