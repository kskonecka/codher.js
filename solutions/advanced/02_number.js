// Build a small sum function for any number of operands
// Validate that the input contains only numbers
function sum(operator, operands) {
  var result = 0;
  for (var i = 0; i < operands.length; i++) {
    if(typeof(operands[i]) === "number") {
      result += operands[i];
    } else {
      return "Invalid Operation";
    }
  }
  return result;
}


console.log('50 + 100 + 200 + 500 + 1 =', sum("add", [50, 100, 200, 500, 1]));
console.log('1 + 2 + 3 + 4 + 5 =', sum("add", [1, 2, 3, 4, 5]));
console.log('1 + 2 + 3 + 4 + a =', sum("add", [1, 2, 3, 4, "a"]));
