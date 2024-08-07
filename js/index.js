console.clear();

const bookmarkButton = document.querySelector('[data-js="bookmark-button-1"]');
const bookmarkImage = document.querySelector('[data-js="bookmark-img-1"]');
const answerButton = document.querySelector('[data-js="answer-button-1"]');
const answerText = document.querySelector('[data-js="answer-1"]');

bookmarkButton.addEventListener("click", () => {
  if (bookmarkImage.src.includes("bookmark-black.svg")) {
    bookmarkImage.src = "./img/bookmark-check-black.svg";
  } else {
    bookmarkImage.src = "./img/bookmark-black.svg";
  }
});

answerButton.addEventListener("click", () => {
  if (answerButton.textContent.trim() === "Show Answer") {
    answerButton.classList.remove("button--show-answer");
    answerButton.classList.add("button--hide-answer");
    answerButton.textContent = "Hide Answer";
    answerText.style.display = "flex";
  } else {
    answerButton.classList.remove("button--hide-answer");
    answerButton.classList.add("button--show-answer");
    answerButton.textContent = "Show Answer";
    answerText.style.display = "none";
  }
});
