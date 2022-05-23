export function bookmark() {
  // Get all BookmarkCardButtons
  const bookmarkCardButtons = document.querySelectorAll(
    '[data-js="bookmarkme"'
  );

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
}
