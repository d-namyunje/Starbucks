const searchButton = document.querySelector(".search_span");
const searchInput = document.querySelector(".input_search");
const testNavbar = document.querySelector(".navbar_sub");

console.log(testNavbar);

searchButton.addEventListener("click", () => {
  const navbarUtil = document.querySelector(".navbar_util");

  if (searchInput.clientWidth < 130) {
    searchInput.style.display = "block";
    let increaseSearchInput = setInterval(() => {
      if (searchInput.clientWidth >= 130) {
        // navbarUtil.style.width = 680 + "px";
        // navbarUtil.style.right = 45 + "px";
        clearInterval(increaseSearchInput);
      }
      searchInput.style.width = searchInput.clientWidth + 1 + "px";
    }, 10);
  }
});
