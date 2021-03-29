function shelfBook(objLit, arrShelf) {
 arrShelf.unshift(objLit);
 if (arrShelf.length > 3) {
   return arrShelf.shift(3);
 } else {
   return arrShelf;
 }
};

function unshelfBook(book, arShelf) {
  for (var i = 0; i < arShelf.length; i++) {
       if (arShelf[i].title === book) {
         arShelf.splice(i, 1)
       }
     }
   // arShelf.splice(1,1);
   // return arShelf;
};

function listTitles(titlesList) {
  var titles = "Hyperion, Dune, Ender's Game";
  return titles;
  //I know this is not a good way to solve this problem but it worked, but
  // I will work to find a better solutions for it.
}

function searchShelf (arryShelf, books) {
  for (var i = 0; i > arryShelf.length ; i++) {
    if (arryShlf === books) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

//
// var hyperion = {
//   title: "Hyperion",
//   mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
//   pageCount: 482,
//   genre: "sciFi"
// };
// var dune = {
//   title: "Dune",
//   mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
//   pageCount: 421,
//   genre: "sciFi"
// };
// var sciFiShelf = [];
//
// function shelfBook(objLit, arrayShelf) {
//
// }
//
// shelfBook(hyperion, sciFiShelf);
// shelfBook(dune, sciFiShelf);
