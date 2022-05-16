console.clear();

const bookmarkCard = document.querySelector('[data-js="bookmarkme"'); //creating the variable
console.log(bookmarkCard); //output in console - see if the set value was found

function onClickBookmark() {
  //creating the function
  alert("bookmarked");
}

bookmarkCard.addEventListener("click", onClickBookmark); //using the created function "onClickBookmark" which will send an alert with "bookmarked" when the set variable has been clicked
