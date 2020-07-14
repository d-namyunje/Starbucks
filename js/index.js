const searchButton = document.querySelector(".search_span");
const searchInput = document.querySelector(".input_search");

searchButton.addEventListener("click", () => {
  const navbarUtil = document.querySelector(".navbar_util");

  if (searchInput.clientWidth < 130) {
    let increaseSearchInput = setInterval(() => {
      if (searchInput.clientWidth >= 130) {
        clearInterval(increaseSearchInput);
      }
      searchInput.style.width = searchInput.clientWidth + 1 + "px";
    }, 15);

    navbarUtil.style.width = 680 + "px";
    navbarUtil.style.right = 45 + "px";
  }
});
