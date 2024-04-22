// ******************** Day 8 Challenge ************************
//                      Question 22:
//Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
let fruits = ["apple", "banana", "orange", "mango"];
// Intentional error
console.log(fruits[4]);
// Correcting the error
console.log(fruits);
//                      Question 23:
// Conditional Tests: Write a series of conditional tests. Predict the results of each test.
let car = 'BMW';
// Test 1
console.log("Is car == 'BMW'? I predict True.");
console.log(car == 'BMW');
// Test 2
console.log("Is car === 'BMW'? I predict True.");
console.log(car === 'BMW');
// Test 3
console.log("Is car != 'Mercedes'? I predict True.");
console.log(car != 'Mercedes');
// Test 4
console.log("Is car !== 'subaru'? I predict True.");
console.log(car !== 'subaru');
// Test 5
console.log("Is car != 'Corolla'? I predict True.");
console.log(car != 'Corola');
// Test 6
console.log("Is car === 'Bike'? I predict False.");
console.log(car === 'Bike');
// Test 7
console.log("Is car != 'BMW'? I predict False.");
console.log(car != 'BMW');
// Test 8
console.log("Is car !== 'BMW'? I predict False.");
console.log(car !== 'BMW');
// Test 9
console.log("Is car.toLowerCase() == 'bus'? I predict False.");
console.log(car.toLowerCase() == 'bus');
// Test 10
console.log("Is car === 'Train'? I predict False.");
console.log(car === 'Train');
//                      Question 24:
// More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons
//Equality Test
console.log("Samsung" === "Samsung");
// Inequality Test
console.log("Samsung" != "Samsung");
//Numerical Tests involving equality and inequality,greater than and less than , greater than or less than or equal to,
let number = 30;
console.log(number == 30);
console.log(number != 30);
console.log(number > 50);
console.log(number < 20);
console.log(number >= 15);
console.log(number <= 20);
// Using && and || operators
console.log(number > 10 && number < 40);
console.log(number > 15 || number < 35);
// Test whether an item is in an array
let myList = ['Rozina', 'Shagufta', 2, 8, 9];
let myName = "Fariha";
console.log(Array.isArray(myList));
console.log(Array.isArray(myName));
export {};
