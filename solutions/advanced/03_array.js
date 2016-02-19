// Add "Harry Potter and the " to the beginning of all book titles
function prepend(new_text, original) {
  if(new_text.length > 0) {
    return new_text + " " + original;
  }
}

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
