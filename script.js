document.addEventListener("DOMContentLoaded", () => {
  const NAME = "Beryl";
  const HERO_NAME = "Roux Beryl";

  // Header logo name
  const headerName = document.querySelector("header .logo a");
  if (headerName) headerName.textContent = NAME;

  // Hero SVG text (animated intro name)
  const heroSvgText = document.querySelector(".hero svg text");
  if (heroSvgText) heroSvgText.textContent = HERO_NAME.toUpperCase();

  // About section name
  const aboutName = document.querySelector(".about .name-role h1");
  if (aboutName) aboutName.textContent = NAME;

  // Footer logo name
  const footerName = document.querySelector("footer .profile .logo a");
  if (footerName) footerName.textContent = NAME;

  // ===== Hamburger / Mobile Navigation =====
  const menuBtn = document.getElementById("menu");
  const mobileNav = document.getElementById("nav-mobile");
  const closeBtn = document.getElementById("close-mobile");
  const mobileLinks = document.querySelectorAll(".mobile-nav .nav-link");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.add("show");
    });
  }

  if (closeBtn && mobileNav) {
    closeBtn.addEventListener("click", () => {
      mobileNav.classList.remove("show");
    });
  }

  // Close mobile nav whenever a menu link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("show");
    });
  });

  // ===== "Show my Work" button -> scroll to Project section =====
  const showWorkBtn = document.getElementById("show-work-btn");
  const projectSection = document.getElementById("project");

  if (showWorkBtn && projectSection) {
    showWorkBtn.addEventListener("click", () => {
      projectSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
