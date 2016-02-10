// Let's create a basic colors array
var colors = ["Red", "Blue", "Green"];
console.log(colors);

// Let's add a color
colors.push("Yellow");
console.log(colors);

// Let's add many colors
colors.push("Magenta");
colors.push("Blue");
colors.push("Purple");
console.log(colors);

// Let's remove a specific value
function remove_from_array(value, array) {
  var index = array.indexOf(value);
  if(index > -1) {
    array.splice(index, 1);
  }
}

remove_from_array("Magenta", colors);
console.log(colors);

// map?
