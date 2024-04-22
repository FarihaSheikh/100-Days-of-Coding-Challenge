// ******************** Day 8 Challenge ************************
//                      Question 25:
//Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable 
//called alien_color.
// Version that executes if block
let alien_color = "green";
if (alien_color === "green") {
    console.log("The player just earned 5 points");
}
// Version that fails
let alien_color1 = "yellow";
if (alien_color1 === "green") {
}
//                      Question 26:
// Alien Colors #2: Choose a color for an alien, then write an if-else chain.
let alien_color2 = "red";
if (alien_color2 === "green") {
    console.log("The player just earned 5 points for shooting the alien");
}
else {
    console.log("The player just earned 10 points");
}
export {};
