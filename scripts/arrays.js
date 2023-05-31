// array manipulation: push 
numbers = [1, 3, 7, 4, 2, 9];


console.log(`\n*** array manipulation: push ***`);

numbers.push(500);
console.log(numbers);

// array manipulation: pop 
console.log(`\n*** array manipulation: pop ***`);

var num = 0;
num = numbers.pop();
console.log(numbers);
console.log(`num: ${num}`);

// array manipulation: unshift 
console.log(`\n*** array manipulation: unshift ***`);

numbers.unshift(500);
console.log(numbers);

// array manipulation: shift 
console.log(`\n*** array manipulation: shift ***`);

num = 0;
num = numbers.shift();
console.log(numbers);
console.log(`num: ${num}`);

// array manipulation: splice 
console.log(`\n*** array manipulation: splice ***`);

var spliced = [];
spliced = numbers.splice(2,2);
console.log(numbers);
console.log(`spliced: ${spliced}`);

// array manipulation: slice 
console.log(`\n*** array manipulation: slice ***`);

var sliced = [];
sliced = numbers.slice(2,4);
console.log(numbers);
console.log(`sliced: ${sliced}`);

// array manipulation: filter
console.log(`\n*** array manipulation: filter ***`);

numbers = [1,2,3,4,5,6];
let numbers2 = numbers.filter((num) => { 
    return num % 2 != 0;
});

console.log(`numbers: ${numbers}`);
console.log(`numbers2: ${numbers2}`);

// array manipulation: map
console.log(`\n*** array manipulation: map ***`);

let poweredNumbers = numbers.map((num) => { 
    return num * num;
});

console.log(`numbers: ${numbers}`);
console.log(`powered numbers: ${poweredNumbers}`);

// array manipulation: reduce
console.log(`\n*** array manipulation: reduce ***`);

sum = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0)

console.log(`numbers: ${numbers}`);
console.log(`sum: ${sum}`);

// array manipulation: sort
console.log(`\n*** array manipulation: sort ***`);

numbers = [60,5,43,2,1906,11,5]
console.log(`numbers: ${numbers}`);

numbers.sort((num1, num2) => {
    return num1 - num2;
});
console.log(`numbers: ${numbers}`);

let names = ["joe", "bob", "zoro"];
console.log(`names: ${names}`);

names.sort();
console.log(`names: ${names}`);