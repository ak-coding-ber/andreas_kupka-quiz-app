console.clear();

console.log("JS is working");

const button = document.querySelector('[data-js="bookmark-button-1"]');
const bookmarkImage = document.querySelector('[data-js="bookmark-img-1"]');

button.addEventListener("click", () => {
  if (bookmarkImage.src.includes("bookmark-black.svg")) {
    bookmarkImage.src = "./img/bookmark-check-black.svg";
  } else {
    bookmarkImage.src = "./img/bookmark-black.svg";
  }
});
