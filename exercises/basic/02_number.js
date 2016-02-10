// Build a small calculator function
// BONUS: Learn how to round/up down decimals
var calculate = function(operator, x, y) {
  switch (operator) {
    case "add":
      return x + y;
    case "subtract":
      return x - y;
    case "multiply":
      return x * y;
    case "divide":
      return x / y;
    case "percentage":
      return String((x / y) * 100) + "%";
  }
};


console.log('x + y =', calculate("add", 50, 100));
console.log('x - y =', calculate("subtract", 50, 100));
console.log('x * y =', calculate("multiply", 50, 100));
console.log('x / y =', calculate("divide", 50, 100));
console.log('x / y =', calculate("percentage", 50, 100));
