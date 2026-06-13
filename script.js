const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  header.classList.toggle("is-open", !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    header.classList.remove("is-open");
  });
});

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
