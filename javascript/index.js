const menuBtn = document.querySelector("#menuBtn");
const menuIcon = document.querySelector("#menuIcon");
const mobileMenu = document.querySelector("#mobileMenu");

const scrollToTopSec = document.getElementById("scrollToTop");
const modalBtn = document.getElementById("modalBtn");
const modal = document.querySelector("#modal");
const cancelModal = document.querySelector("#cancelModal");

const modalButton = document.querySelector("#modalButton");
const secModal = document.querySelector("#secModal");
const secCancalModal = document.querySelector("#secCancalModal");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.classList.remove("ri-close-line");
    menuIcon.classList.add("ri-menu-line");
  } else {
    menuIcon.classList.remove("ri-menu-line");
    menuIcon.classList.add("ri-close-line");
  }
});

// menuBtn.addEventListener("click", () => {
//   mobileMenu.classList.toggle("hidden");

//   if (mobileMenu.classList.contains("hidden")) {
//     menuIcon.classList.remove("ri-close-line");
//     menuIcon.classList.add("ri-menu-line");
//   } else {
//     menuIcon.classList.remove("ri-menu-line");
//     menuIcon.classList.add("ri-close-line");
//   }
// });

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

modalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

cancelModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

modalButton.addEventListener("click", () => {
  secModal.classList.remove("hidden");
  secModal.classList.add("flex");
});

secCancalModal.addEventListener("click", () => {
  secModal.classList.add("hidden");
  secModal.classList.remove("flex");
});
