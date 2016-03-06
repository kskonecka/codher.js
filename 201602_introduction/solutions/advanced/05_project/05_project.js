var friends = [];

function addFriend(target) {
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
    console.log('Please specify a target collection');
  }
}

function Person(id, first_name, last_name, email, age) {
  var person = this;
  person.id = id;
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

function refreshList(friends) {
  var target = document.getElementById('friends_list');
  target.innerHTML = '';
  friends.forEach(function(friend) {
    var item = document.createElement('li');
    item.innerHTML = friend.full_name + " (" + friend.email + ")";
    target.appendChild(item);
  });
}

function addNewFriend() {
  addFriend(friends);
  refreshList(friends);
}
