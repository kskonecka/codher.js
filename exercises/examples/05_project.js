var friends = [];

var compute_full_name = function(first_name, last_name) {
  return String(first_name) + " " + String(last_name);
};

var add_friend = function() {
  var first_name = prompt("First name: ");
  var last_name = prompt("Last name: ");
  var age = prompt("Age: ");
  var email = prompt("Email: ");
  friends.push(new Person(first_name, last_name, email, age));
  console.log(friends);
};

var Person = function(first_name, last_name, email, age) {
  this.first_name = String(first_name);
  this.last_name = String(last_name);
  this.full_name = compute_full_name(first_name, last_name);
  this.email = String(email);
  this.age = parseInt(age);
};
