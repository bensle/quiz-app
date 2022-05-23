// Show answers of individual cards-------------------------------------
// targets the container of the hidden answer and the showAnswer Button
export function showcardanswer() {
  const cardAnswerContainer = document.querySelectorAll(
    '.card__show__container'
  );

  // takes the container of cardanswer and button, followed by a queryselector for button and text in just that 1 container and add a eventListener to the button inside of that container that toggles the text in that container
  cardAnswerContainer.forEach(container => {
    const showButton = container.querySelector('.card__button');
    const showText = container.querySelector('.card__showanswertext');
    showButton.addEventListener('click', () => {
      showText.classList.toggle('hideanswer');
      if (showButton.innerText === 'Show answer') {
        showButton.innerText = 'Hide answer';
      } else if (showButton.innerText === 'Hide answer') {
        showButton.innerText = 'Show answer';
      }
    });
  });
}
//----------------------------------------------------------------------
//---------------------------------------------------------------------
// old function - toggles all answers ---------------------------------
// function showOneText() {
//   showAnswerText.forEach(paragraph => {
//     paragraph.classList.toggle('hideanswer');
//   });
// }

// showAnswerButton.forEach(showAnswer => {
//   showAnswer.addEventListener('click', showOneText);
// });

// old function toggles just the first answer
// showAnswerButton.forEach(showAnswer => {
//   showAnswer.addEventListener('click', () => {
//     showAnswerText.classList.toggle('hideanswer');
//   });
// });

// CardButtons - old - const for old functions that just toggles the first or all answers
// const showAnswerText = document.querySelectorAll('[data-js="showAnswerText"]');
// const showAnswerButton = document.querySelectorAll(
//   '[data-js="card__showButton"]'
// );
//---------------------------------------------------------------------
