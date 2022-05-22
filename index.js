console.clear();
// Page-Variablen
const homePage = document.querySelector('[data-js="indexpage"]');
const bookmarksPage = document.querySelector('[data-js="bookmarksPage"]');
const createCardPage = document.querySelector('[data-js="createCardPage"');
const profilePage = document.querySelector('[data-js="profilePage"');

// Show answers of individual cards-------------------------------------
// targets the container of the hidden answer and the showAnswer Button
const cardAnswerContainer = document.querySelectorAll('.card__show__container');

// takes the container of cardanswer and button, followed by a queryselector for button and text in just that 1 container and add a eventListener to the button inside of that container that toggles the text in that container
cardAnswerContainer.forEach(container => {
  const showButton = container.querySelector('.card__button');
  const showText = container.querySelector('.card__showanswertext');
  showButton.addEventListener('click', () => {
    showText.classList.toggle('hideanswer');
  });
});
//----------------------------------------------------------------------

// Navigation-Buttons-Variablen
const homePageButton = document.querySelector('[data-js="navigation__home"]');
const bookmarksButton = document.querySelector(
  '[data-js="navigation__bookmarks"]'
);
const createCardButton = document.querySelector(
  '[data-js="navigation__createcard"]'
);
const profileButton = document.querySelector('[data-js="navigation__profile"]');

// Get all BookmarkCardButtons
const bookmarkCardButtons = document.querySelectorAll('[data-js="bookmarkme"');

bookmarkCardButtons.forEach(bookmarkButton => {
  bookmarkButton.addEventListener('click', () => {
    bookmarkButton.classList.toggle('card__bookmark--active');
  });
});

// All bookmarked Card remove bookmark

const bookmarkedCard = document.querySelectorAll('[data-js="removeBookmark"');

bookmarkedCard.forEach(bookmarkedButton => {
  bookmarkedButton.addEventListener('click', () => {
    bookmarkedButton.classList.toggle('card__bookmarked');
  });
});

// EventListeners Navigation hidepage
homePageButton.addEventListener('click', () => {
  bookmarksPage.classList.add('hidepage');
  createCardPage.classList.add('hidepage');
  profilePage.classList.add('hidepage');
  homePage.classList.remove('hidepage');
});

bookmarksButton.addEventListener('click', () => {
  bookmarksPage.classList.remove('hidepage');
  createCardPage.classList.add('hidepage');
  profilePage.classList.add('hidepage');
  homePage.classList.add('hidepage');
});

createCardButton.addEventListener('click', () => {
  bookmarksPage.classList.add('hidepage');
  createCardPage.classList.remove('hidepage');
  profilePage.classList.add('hidepage');
  homePage.classList.add('hidepage');
});

profileButton.addEventListener('click', () => {
  bookmarksPage.classList.add('hidepage');
  createCardPage.classList.add('hidepage');
  profilePage.classList.remove('hidepage');
  homePage.classList.add('hidepage');
});

// EventListeners Navigation Button active

homePageButton.addEventListener('click', () => {
  homePageButton.classList.add('navigation__button--active');
  bookmarksButton.classList.remove('navigation__button--active');
  createCardButton.classList.remove('navigation__button--active');
  profileButton.classList.remove('navigation__button--active');
});

bookmarksButton.addEventListener('click', () => {
  homePageButton.classList.remove('navigation__button--active');
  bookmarksButton.classList.add('navigation__button--active');
  createCardButton.classList.remove('navigation__button--active');
  profileButton.classList.remove('navigation__button--active');
});
createCardButton.addEventListener('click', () => {
  homePageButton.classList.remove('navigation__button--active');
  bookmarksButton.classList.remove('navigation__button--active');
  createCardButton.classList.add('navigation__button--active');
  profileButton.classList.remove('navigation__button--active');
});
profileButton.addEventListener('click', () => {
  homePageButton.classList.remove('navigation__button--active');
  bookmarksButton.classList.remove('navigation__button--active');
  createCardButton.classList.remove('navigation__button--active');
  profileButton.classList.add('navigation__button--active');
});

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
