console.clear();
// Page-Variablen
const homePage = document.querySelector('[data-js="indexpage"]');
const bookmarksPage = document.querySelector('[data-js="bookmarksPage"]');
const createCardPage = document.querySelector('[data-js="createCardPage"');
const profilePage = document.querySelector('[data-js="profilePage"');

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
