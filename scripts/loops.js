// for loop
console.log(`\n*** for loop ***`);

let numbers = [1, 3, 7, 4, 2, 9]; // 26;
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// for in loop
console.log(`\n*** for-in loop ***`);

sum = 0;
for (let i in numbers) {
  sum += numbers[i];
}

console.log(sum);

// for of loop
console.log(`\n*** for-of loop ***`);

sum = 0;
for (let i of numbers) {
  sum += i;
}

console.log(sum);

// for in loop on object
console.log(`\n*** for-in loop on object ***`);

sum = 0;
nums = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};

for (num in nums) {
  sum += nums[num];
}

console.log(sum);

// for of loop on object is not possible

// for (num of nums) {
//     sum += nums;
// }

// foreach loop on array
console.log(`\n*** foreach loop on array ***`);

sum = 0;
numbers.forEach((num) => {
  sum += num;
});

console.log(sum);

// foreach loop on object is not possible

// nums.forEach(num => {
//     sum += num;
// });
