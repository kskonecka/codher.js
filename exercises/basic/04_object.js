var Person = function(first_name, last_name, email, age) {
  var full_name = function(_first_name, _last_name) {
    return _first_name + " " + _last_name;
  };

  var initials = function(_first_name, _last_name) {
    return _first_name.charAt(0).toUpperCase() + "." + _last_name.charAt(0).toUpperCase() + ".";
  };

  this.first_name = String(first_name);
  this.last_name = String(last_name);
  this.full_name = full_name(first_name, last_name);
  this.initials = initials(first_name, last_name);
  this.email = String(email);
  this.age = parseInt(age, 10);
};

var a_person = new Person("John", "Watson", "jw@holmes.co.uk", 42);
var another_person = new Person("Sherlock", "Holmes", "sherlock.holmes@hotmail.com", 40);

console.log(a_person, another_person);
