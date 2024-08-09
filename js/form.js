const formNewCard = document.querySelector('[data-js="form-new-card"]');
// number of cards existing - I put 0 for now
let numberCards = 0;

console.log(formNewCard);

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

  //creating a new cardElement and add it to the main section of form.html
  newCard = document.createElement("section");

  newCard.classList.add("card");

  newCard.innerHTML += `
    <button type="toggle" data-js="bookmark-button-1">
      <img
        class="bookmark bookmark--save"
        src="./img/bookmark-black.svg"
        alt="button save as bookmark unchecked"
        data-js="bookmark-img-1"
      />
    </button>
    <h3>New Question ${numberCards}</h3>
    <p class="question">${question}</p>
    <button class="button button--hide-answer" data-js="answer-button-1">
      Hide Answer
    </button>
    <p class="answer" data-js="answer-1">
      Answer: <strong>${answer}</strong>
    </p>
    <ul class="tags">
      <li>${tag}</li>
    </ul>`;

  //append new card to the main section
  document.querySelector("main").append(newCard);

  //reset form to initial state - clear all fields
  e.target.reset();

  // create an array of user answers and return it as function output
});
