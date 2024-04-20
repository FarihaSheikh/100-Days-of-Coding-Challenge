// ******************** Day 4 Challenge ****************************
//                       Question 10: 
//  Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs
//  are straightforward at this point, just add your name and the current date at the top of each program file. Then,
//   write one sentence describing what the program does.
// Program created by: Fariha Fatima
// Current Date: 20-4-2024
//This program will print Hello World.
console.log("Hello World");
//                       Question 11:
// Names: Store the names of a few of your friends in an array called names. Print each person’s name by 
// accessing each element in the list, one at a time.
let names = ['Rozina', 'Mahnoor', 'Shagufta', 'Rabiya', 'Ifrah'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//                       Question 12:
//  Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them.
//  The message should be the same for each person, but personalized with their name.
let names1 = ['Rozina', 'Mahnoor', 'Shagufta', 'Rabiya', 'Ifrah'];
let message = "Would you like to learn some Typescript today?";
for (let i = 0; i < names1.length; i++) {
    console.log(`Hello ${names1[i]}, ${message}`);
}
export {};
