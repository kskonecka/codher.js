// Create an adopt function that updates a child's last name to their new parent's

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

function adopt(parent, child) {
  child.last_name = parent.last_name;
}

var a_person = new Person("John", "Watson", "jw@holmes.co.uk", 42);
var another_person = new Person("Sherlock", "Holmes", "sherlock@hotmail.com", 40);

console.log(a_person);
console.log(another_person);
console.log(another_person.full_name);
console.log(another_person.initials);

adopt(a_person, another_person);

console.log("\n\nAfter John adopts Sherlock\n");
console.log(a_person);
console.log(another_person);
console.log(another_person.full_name);
console.log(another_person.initials);
