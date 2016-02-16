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
var remove_from_array = function(needle, haystack) {
  var index = haystack.indexOf(needle);
  if(index > -1) {
    haystack.splice(index, 1);
  }
};

// Wait, potato is not a color
remove_from_array("Potato", colors);
console.log(colors);
