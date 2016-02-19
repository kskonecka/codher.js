// Let's create a basic colors array
var colors = ["Red", "Blue", "Green"];
console.log(colors);

// Let's add a color
colors.push("Yellow");
console.log(colors);

// Let's add many colors
colors.push("Potato");
colors.push("Blue");
colors.push("Purple");
console.log(colors);

// Let's remove a specific value
function removeFromArray(needle, haystack) {
  var index = haystack.indexOf(needle);
  if(index > -1) {
    haystack.splice(index, 1);
  }
}

// Wait, potato is not a color
removeFromArray("Potato", colors);
console.log(colors);
