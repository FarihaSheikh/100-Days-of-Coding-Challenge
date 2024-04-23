// ******************** Day 10 Challenge ************************
//                      Question 28:
// Stages of Life: Determine a person’s life stage with an if-else chain.
let personAge = 18;
if (personAge < 2) {
    console.log("The person is a baby.");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("The person is a toddler.");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("The person is a kid.");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("The person is a teenager.");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("The person is a adult.");
}
else if (personAge >= 65) {
    console.log("The person is an elder.");
}
//                      Question 29:
// Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
let favourite_fruits = ["Mango", "Orange", "Pomegranate"];
if (favourite_fruits.includes("Mango")) {
    console.log("Mango is one of my favourite fruits.");
}
else if (favourite_fruits.includes("Orange")) {
    console.log("Orange is one of my favourite fruits.");
}
//                      Question 30:
// Question 30: Hello Admin: Greet users differently, especially 'admin'.
let userNames = ['admin', 'Fariha', 'Ibrahim', 'Rozina', 'Shagufta'];
for (let users of userNames) {
    if (users == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${users}, thank you for logging in again.`);
    }
}
export {};
