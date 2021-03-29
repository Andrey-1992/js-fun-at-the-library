function createTitle(title) {
  return "The " + title;
};

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character
};

function saveReview(newReviews, reviews) {
  if (reviews.includes(newReviews)) {
    return reviews;
  } else {
    return reviews.push(newReviews);
  }
};

function calculatePageCount(bookPageCount) {
  return bookPageCount.length * 20;
};

function writeBook(title, bookCharacter, genre) {
    book = {
    title: title,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
  return book;
};

function editBook(book){
  return book.pageCount * .75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}

// function createTitle(title, title1, title2, title3) {
//   var bookTitle = "Casa de los espititus";
//   var bookIdea = title;
//   // var sushiTitle = "Dancing Sushi";
//   // var dragonTitle = "Dragon in the Summer";
//   // var ghostTitle = "Teenage Ghoul";
//   console.log(bookTitle);
//   return "The " + title;
//   // return "The " + title1;
//   // return "The " + title2;
//   // return "The " + title3;
// }

// saveReview
// for (var i = 0; i < reviews.length; i++) {
// if (!reviews.includes(newReview)) {
//   reviews.push(newReview);
// }
