// function hoisting
console.log(`*** function hoisting ***`);

let bob = "Bob";
sayHello(bob);

function sayHello(name) {
  console.log(`Hello ${name}`);
}

// function scope

// function sayHelloToBob(name) {
//   let name = "Bob";
// }
//console.log(`Hello ${name}`);


// callback function
console.log(`\n*** callback function ***`);

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}

function calc(num1, num2, callback) {
  let total = callback(num1, num2);
  console.log(total);
}

calc(4, 5, add);
calc(4, 5, subtract);
calc(4, 5, multiply);
calc(4, 5, divide);

// arrow function
console.log(`\n*** arrow function ***`);

calc(5, 4, (num1,num2) => num1 + num2);
calc(5, 4, (num1,num2) => num1 - num2);
calc(5, 4, (num1,num2) => num1 * num2);
calc(5, 4, (num1,num2) => num1 / num2);
