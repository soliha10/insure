const elBtn = document.querySelector(".js-btn");
elBtn.addEventListener("click", () => {
  elBtn.closest(".site-header").classList.toggle("open-menu");
  elBtn.closest("body").classList.toggle("unscroll");
})