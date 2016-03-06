function Person(first_name, last_name, email, age) {
  var person = this;
  
  person.first_name = String(first_name);
  person.last_name = String(last_name);
  person.email = String(email);
  person.age = parseInt(age, 10);

  Object.defineProperty(person, "full_name", {
    get: function() {
        return person.first_name + " " + person.last_name;
    }
  });
}

var a_person = new Person("John", "Watson", "jw@holmes.co.uk", 42);
var another_person = new Person("Sherlock", "Holmes", "sherlock.holmes@hotmail.com", 40);

console.log(a_person);
console.log(a_person.full_name);
console.log('');
console.log(another_person);
console.log(another_person.full_name);
