var friends = [];

function Person(first_name, last_name, email, age) {
  var person = this;

  person.first_name = String(first_name);
  person.last_name = String(last_name);
  person.email = String(email);
  person.age = parseInt(age);

  Object.defineProperty(person, "full_name", {
    get: function() {
        return person.first_name + " " + person.last_name;
    }
  });
}

function addFriend() {
  var first_name = prompt("First name: ");
  var last_name = prompt("Last name: ");
  var age = prompt("Age: ");
  var email = prompt("Email: ");
  friends.push(new Person(first_name, last_name, email, age));
}
