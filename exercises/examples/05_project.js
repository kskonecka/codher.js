var friends = [];

function compute_full_name(first_name, last_name) {
  return String(first_name) + " " + String(last_name);
}

function add_friend(person, array) {
  array.push(person);
}

var Person = function(first_name, last_name, email, age) {
  this.first_name = String(first_name);
  this.last_name = String(last_name);
  this.full_name = compute_full_name(first_name, last_name);
  this.email = String(email);
  this.age = parseInt(age);
}

var frodo = new Person("Frodo", "Baggins", "frodo.baggins@shirenet.com", 33);
var legolas = new Person("Legolas", "uh... the elf?", "legolas@mirkwood.net", 300)

console.log(friends);
add_friend(frodo, friends);
add_friend(legolas, friends);

console.log(friends);
