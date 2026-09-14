const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const scrollToTopSec = document.getElementById("scrollToTop");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    scrollToTopSec.classList.remove("hidden");
  } else {
    scrollToTopSec.classList.add("hidden");
  }
});

scrollToTopSec.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
