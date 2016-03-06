// Validate that the user inputs both a first name and last name and that they are strings
function isValidName(input) {
  // Check if input exists
  if(input.length > 0) {
    return /([a-zA-Z])$/.test(input);
  } else {
    return false;
  }
}

function getInitials(first_name, last_name) {
  return first_name.charAt(0).toUpperCase() + "." + last_name.charAt(0).toUpperCase() + ".";
}

console.log("Nice to meet you, what's your name?");
// var first_name = window.prompt('First name');
// var last_name = window.prompt('Last name');
var first_name = "Raúl";
var last_name = "Pineda";

if(isValidName(first_name) && isValidName(last_name)) {
  console.log("Hi, " + first_name + " " + last_name);
  console.log("Your initials are " + getInitials(first_name, last_name));
} else {
  console.log("Oops, your name is not valid");
}
