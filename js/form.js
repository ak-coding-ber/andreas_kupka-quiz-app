const formNewCard = document.querySelector('[data-js="form-new-card"]');
const questionInput = document.querySelector("[data-js='question-input']");
const answerInput = document.querySelector("[data-js='answer-input']");
const charCountText1 = document.querySelector("[data-js='char-count-1']");
const charCountText2 = document.querySelector("[data-js='char-count-2']");

// number of cards existing - I put 0 for now
let numberCards = 0;

// general function to calculate and update the remaining characters for a text-input field
function updateCharCount(inputSource, outputElement) {
  const inputLength = inputSource.value.length;
  const maxLength = inputSource.maxLength;
  const charsLeft = maxLength - inputLength;
  outputElement.textContent = `${charsLeft} characters left`;
}

formNewCard.addEventListener("submit", (e) => {
  e.preventDefault();
  console.clear();

  // getting entered data from the form used to create new Cards
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const question = data.question;
  const answer = data.answer;
  const tag = `#${data.tag}`; //adding a hashtag in front of the entered

  //update Number of cards counter
  numberCards++;

  //creating a newCard container
  const newCard = document.createElement("section");
  newCard.classList.add("card");

  //creating all elements of a new card as per instructions via create element
  const bookmarkButton = document.createElement("button");
  bookmarkButton.setAttribute("type", "toggle");
  bookmarkButton.setAttribute("data-js", "bookmark-button-1");

  const bookmarkImage = document.createElement("img");
  bookmarkImage.classList.add("bookmark", "bookmark--save");
  bookmarkImage.setAttribute("src", "./img/bookmark-black.svg");
  bookmarkImage.setAttribute("alt", "button save as bookmark unchecked");
  bookmarkImage.setAttribute("data-js", "bookmark-img-1");

  bookmarkButton.append(bookmarkImage);

  const cardHeading = document.createElement("h3");
  cardHeading.textContent = `Question ${numberCards}`;

  const questionText = document.createElement("p");
  questionText.classList.add("question");
  questionText.textContent = `${question}`;

  const showHideButton = document.createElement("button");
  showHideButton.classList.add("button", "button--hide-answer");
  showHideButton.textContent = "Hide Answer";
  showHideButton.setAttribute("data-js", "answer-button-1");

  const answerText = document.createElement("p");
  answerText.classList.add("answer");
  answerText.setAttribute("data-js", "answer-1");
  answerText.innerHTML = `Answer: <strong>${answer}</strong>`;

  const cardTag = document.createElement("ul");
  cardTag.classList.add("tags");
  cardTag.innerHTML = `<li>${tag}</li>`;

  newCard.append(
    bookmarkButton,
    cardHeading,
    questionText,
    showHideButton,
    answerText,
    cardTag
  );

  // alternative and in my opinion shorter way shorter - makes sense in this context

  // newCard.innerHTML += `
  //   <button type="toggle" data-js="bookmark-button-1">
  //     <img
  //       class="bookmark bookmark--save"
  //       src="./img/bookmark-black.svg"
  //       alt="button save as bookmark unchecked"
  //       data-js="bookmark-img-1"
  //     />
  //   </button>
  //   <h3>New Question ${numberCards}</h3>
  //   <p class="question">${question}</p>
  //   <button class="button button--hide-answer" data-js="answer-button-1">
  //     Hide Answer
  //   </button>
  //   <p class="answer" data-js="answer-1">
  //     Answer: <strong>${answer}</strong>
  //   </p>
  //   <ul class="tags">
  //     <li>${tag}</li>
  //   </ul>`;

  //append new card to the main section
  document.querySelector("main").append(newCard);

  //reset form to initial state - clear all fields
  e.target.reset();
  // count for characters left need to be initialized again as well
  charCountText1.textContent = `150 characters left`;
  charCountText2.textContent = `150 characters left`;

  // create an array of user answers and return it as function output
});

// update chars left count in case there is an input change in the question or answer input boxes
questionInput.addEventListener("input", () => {
  updateCharCount(questionInput, charCountText1);
});

answerInput.addEventListener("input", () => {
  updateCharCount(answerInput, charCountText2);
});
