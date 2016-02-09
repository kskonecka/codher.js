var Person = function(first_name, last_name, email, age) {
  this.first_name = String(first_name);
  this.last_name = String(last_name);
  this.email = String(email);
  this.age = parseInt(age);
}

var a_person = new Person("John", "Watson", "jw@holmes.co.uk", 42);
var another_person = new Person("Sherlock", "Holmes", "sherlock.holmes@hotmail.com", 40);

console.log(a_person);
console.log(another_person);
