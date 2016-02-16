// Validate that the user inputs both a first name and last name and that they are strings
var is_valid_name = function(input) {
  // Check if input exists
  if(input.length > 0) {
    return /([a-zA-Z])$/.test(input);
  } else {
    return false;
  }
};

var get_initials = function(first_name, last_name) {
  return first_name.charAt(0).toUpperCase() + "." + last_name.charAt(0).toUpperCase() + ".";
};

console.log("Nice to meet you, what's your name?");
// var first_name = window.prompt('First name');
// var last_name = window.prompt('Last name');
var first_name = "Raúl";
var last_name = "Pineda";

if(is_valid_name(first_name) && is_valid_name(last_name)) {
  console.log("Hi, " + first_name + " " + last_name);
  console.log("Your initials are " + get_initials(first_name, last_name));
} else {
  console.log("Oops, your name is not valid");
}
