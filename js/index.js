const searchButton = document.querySelector(".search_span");
const searchInput = document.querySelector(".input_search");
const testNavbar = document.querySelector(".navbar_sub");
const navbarNav01 = document.querySelector(".navbar_nav01");
const navbarSub = document.querySelector(".navbar_nav_sub_wrap");
const navbarSubInner = document.querySelector(".navbar_nav_sub_inner");

searchButton.addEventListener("click", () => {
  if (searchInput.clientWidth < 130) {
    searchInput.style.display = "block";
    let increaseSearchInput = setInterval(() => {
      if (searchInput.clientWidth >= 130) {
        clearInterval(increaseSearchInput);
      }
      searchInput.style.width = searchInput.clientWidth + 1 + "px";
    }, 10);
  }
});

navbarNav01.addEventListener("mouseover", () => {
  const navbarSub01 = document.querySelector("#navbar_sub01");

  navbarSub01.style.display = "block";
});

navbarSub.addEventListener("mouseleave", () => {
  navbarSubInner.style.display = "none";
});
