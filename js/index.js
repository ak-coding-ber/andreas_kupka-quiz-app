console.clear();

console.log("JS is working");

const button = document.querySelector('[data-js="bookmark-button"]');
const bookmarkImage = document.querySelector('[data-js="bookmark-img"]');

button.addEventListener("click", () => {
  if (bookmarkImage.src.includes("bookmark-black.svg")) {
    bookmarkImage.src = "./img/bookmark-check-black.svg";
  } else {
    bookmarkImage.src = "./img/bookmark-black.svg";
  }
});
