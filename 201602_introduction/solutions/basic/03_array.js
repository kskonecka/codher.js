// Remove all entries from an array
function spliceAll(needle, haystack) {
  var index = haystack.indexOf(needle);
  while (index != -1) {
    haystack.splice(index, 1);
    index = haystack.indexOf(needle);
  }
}

var books = [
  "Philosopher's Stone",
  "Chamber of Secrets",
  "Twilight",
  "Prisoner of Azkaban",
  "Goblet of Fire",
  "Twilight",
  "Order of the Phoenix",
  "Half-Blood Prince",
  "Deathly Hallows"
];

console.log(books);
spliceAll("Twilight", books);
console.log(books);
