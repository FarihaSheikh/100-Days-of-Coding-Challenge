// ******************** Day 12 Challenge ************************

//                      Question 34:
// Pizzas: Share your favorite pizzas and express your love for them.

let pizzas:string[]= ["Chicken Tikka", "Fajita", "Afghani"]

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});

console.log("I really love to eat pizza!");

//                      Question 35:
// Animals: Highlight animals with a common trait.

let animals:string[]= ["Dog", "Cat", "Rabbit"]

for(let animal of animals){
    console.log(animal);
}

for(let animal of animals){
    console.log(` A ${animal} is a mammmal. `)
}

console.log("\n All of these animals are great pets.");

//                      Question 36:

// T-Shirt: Create a function for customizing t-shirts.

function make_shirt(size:string, message:string){
    console.log(`The size of the shirt is ${size} and the message is ${message}.`);
}

make_shirt('small' , '"I like Pizza"')
make_shirt('medium' , '"I love to travel Paris"');
