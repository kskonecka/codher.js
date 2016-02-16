// Add many friends and then figure out which ones are old enough to drink in Denmark.

// Seed Data
var friends = [{
  id: 1,
  first_name: "James",
  last_name: "Bond",
  full_name: "James Bond",
  age: 39,
  email: "[redacted]"
},
{
  id: 2,
  first_name: "Dora",
  last_name: "the Explorer",
  full_name: "Dora the Explorer",
  age: 5,
  email: "dora@explorers.org"
},
{
  id: 3,
  first_name: "Charles",
  last_name: "Brown",
  full_name: "Charles Brown",
  age: 10,
  email: "charliebrown@peanuts.com"
},
{
  id: 4,
  first_name: "Mickey",
  last_name: "Mouse",
  full_name: "Mickey Mouse",
  age: 120,
  email: "mickey@disney.com"
}];

var add_friend = function(target) {
  if(target) {
    var generate_id = function(_target) {
      return parseInt(_target.length + 1, 10);
    };

    var first_name = prompt("First name: ");
    var last_name = prompt("Last name: ");
    var age = prompt("Age: ");
    var email = prompt("Email: ");
    var id = generate_id(target);
    target.push(new Person(id, first_name, last_name, email, age));
  } else {
    console.log('Please specify a target collection')
  }
};

var is_old_enough = function(item) {
  if(item.age > 16) {
    return true;
  } else {
    return false;
  }
};

var Person = function(id, first_name, last_name, email, age) {
  var compute_full_name = function(_first_name, _last_name) {
    return String(_first_name) + " " + String(_last_name);
  };

  this.id = id;
  this.first_name = String(first_name);
  this.last_name = String(last_name);
  this.full_name = compute_full_name(first_name, last_name);
  this.email = String(email);
  this.age = parseInt(age);
};

var grown_ups = friends.filter(is_old_enough);
console.log(grown_ups);
