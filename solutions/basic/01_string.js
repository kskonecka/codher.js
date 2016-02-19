// Make a function that returns the initials of a name
function getInitials(first_name, last_name) {
  return first_name.charAt(0).toUpperCase() + "." + last_name.charAt(0).toUpperCase() + ".";
}

console.log(getInitials("Raúl", "Pineda"));
