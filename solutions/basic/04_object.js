// Automatically generate a full name and initials for a person

function Person(first_name, last_name, email, age) {
  var person = this;
  person.first_name = first_name;
  person.last_name = last_name;
  person.email = email;
  person.age = age;

  Object.defineProperty(person, "full_name", {
    get: function() {
        return person.first_name + " " + person.last_name;
    }
  });

  Object.defineProperty(person, "initials", {
    get: function() {
        return person.first_name.charAt(0).toUpperCase() + "." + person.last_name.charAt(0).toUpperCase() + ".";
    }
  });
}

var a_person = new Person("John", "Watson", "jw@holmes.co.uk", 42);
var another_person = new Person("Sherlock", "Holmes", "sherlock.holmes@hotmail.com", 40);

console.log(a_person);
console.log(a_person.full_name);
console.log(a_person.initials);

console.log(another_person);
console.log(another_person.full_name);
console.log(another_person.initials);
