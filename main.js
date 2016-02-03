var this_is_a_string = "Jorge";
console.log(this_is_a_string);

var this_is_a_number = 34;
console.log(this_is_a_number)

console.log(this_is_a_string + this_is_a_number);

var this_is_an_array = [1, 3, 4, 5];

var this_is_a_boolean = true;

function addNumbers(_x, _y){
	return _x + _y;
}

function mixName(_name, _lastname){
	return _name + ' ' + _lastname;
}

function addToArray(_to_add){
	this_is_an_array.push(_to_add);
}

function removeLastFromArray(){
	this_is_an_array.pop();
}


