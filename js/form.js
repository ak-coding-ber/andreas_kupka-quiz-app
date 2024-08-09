const formNewCard = document.querySelector('[data-js="form-new-card"]');

console.log(formNewCard);

formNewCard.addEventListener("submit", (e) => {
  e.preventDefault();
  // receiving entered data from the form used to create new Cards
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log("Submit Button was clicked.");
  console.log("data", data);
  e.target.reset();
});
