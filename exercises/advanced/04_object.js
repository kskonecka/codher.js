// Add "Harry Potter and the " to the beginning of all book titles
var prepend = function(prepend, original) {
  if(prepend.length > 0) {
    return prepend + " " + original;
  }
};

var books = [
  "Philosopher's Stone",
  "Chamber of Secrets",
  "Prisoner of Azkaban",
  "Goblet of Fire",
  "Order of the Phoenix",
  "Half-Blood Prince",
  "Deathly Hallows"
];

var updated_books = [];

books.forEach(function(book) {
  updated_books.push(prepend("Harry Potter and the", book));
});

console.log(books);
console.log(updated_books);
