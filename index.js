// phew… not a lot going on here. Please add some code!
const toggleButtonBookmark = document.querySelector(
  '[data-js="toggle-button"]'
);
toggleButtonBookmark.addEventListener("click", () => {
  toggleButtonBookmark.classList.toggle("bookmark--active");
});

const showAnswerOnButton = document.querySelector(
  '[data-js="show-me-Answer-button"]'
);
const answer = document.querySelector('[data-js="show-answer"]');

showAnswerOnButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer");
  answer.classList.toggle("hidden");

  if (answer.classList.contains("hidden")) {
    showAnswerOnButton.textContent = "Hide Answer";
  } else {
    showAnswerOnButton.textContent = "Show Answer";
  }
});

/*toggleButtonBookmark.addEventListener( , () =>{})*/
