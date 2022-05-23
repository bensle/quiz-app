//Change H1
export function heading() {
  const heading = document.querySelector('.header');
  const homePageButton = document.querySelector('[data-js="navigation__home"]');
  const bookmarksButton = document.querySelector(
    '[data-js="navigation__bookmarks"]'
  );
  const createCardButton = document.querySelector(
    '[data-js="navigation__createcard"]'
  );
  const profileButton = document.querySelector(
    '[data-js="navigation__profile"]'
  );

  homePageButton.addEventListener('click', () => {
    heading.innerText = 'Quiz-App';
  });
  bookmarksButton.addEventListener('click', () => {
    heading.innerText = 'Bookmarks';
  });
  createCardButton.addEventListener('click', () => {
    heading.innerText = 'Create Card';
  });
  profileButton.addEventListener('click', () => {
    heading.innerText = 'Profile';
  });
}
