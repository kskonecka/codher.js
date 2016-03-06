// Check if DOM is Ready
function domReady(callback) {
  return document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
}

// Application Variables
var menu_items = [
  {label: "Home", url: "http://www.codher.com"},
  {label: "Facebook", url: "http://www.facebook.com/codher"},
  {label: "Github", url: "https://github.com/codher"},
  {label: "Linkedin", url: "https://www.linkedin.com/company/codher"}
];

var friends = [];

// Application Functions
function addFriend(target) {
  if(target) {
    var generate_id = function(_target) {
      return parseInt(_target.length + 1, 10);
    };

    var first_name = prompt("First name: ");
    var last_name = prompt("Last name: ");
    var email = prompt("Email: ");
    var id = generate_id(target);
    target.push(new Person(id, first_name, last_name, email));
  } else {
    console.log('Please specify a target collection');
  }
}

function Person(id, first_name, last_name, email) {
  var person = this;
  person.id = id;
  person.first_name = String(first_name);
  person.last_name = String(last_name);
  person.email = String(email);

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

document.querySelector('.menu-toggle').addEventListener('click', function() {
  var menu = document.querySelector(this.dataset.target);
  var content = document.querySelector('#main-content');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    content.classList.add('push');
  } else {
    menu.classList.add('hidden');
    content.classList.remove('push');
  }
});


var main_menu = document.querySelector('#main-menu .menu-container');
menu_items.forEach(function(el, index) {
  var item = document.createElement('li');
  item.innerHTML = "<a href='" + el.url +"' target='_blank'>" + el.label + "</a>";
  main_menu.appendChild(item);
});
