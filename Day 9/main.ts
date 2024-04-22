// ******************** Day 9 Challenge ************************

//                      Question 25:
//Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.

// Version that executes if block
let alien_color:string = "green";
if( alien_color === "green"){
    console.log("The player just earned 5 points");
}
    // Version that fails
let alien_color1:string = "yellow";
if( alien_color1 === "green"){
}

//                      Question 26:
// Alien Colors #2: Choose a color for an alien, then write an if-else chain.

let alien_color2:string = "green";
if( alien_color2 === "green"){
    console.log("The player just earned 5 points for shooting the alien");
}else {
    console.log("The player just earned 10 points");
}

//                      Question 27:
// Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

let alien_color3:string = "green";
if( alien_color3 === "green"){
    console.log("The player just earned 5 points for shooting the alien");
}else if (alien_color3 === "yellow"){
    console.log("The player just earned 10 points");
}else if (alien_color3 === "red"){
    console.log("The player just earned 15 points");
}else{
    console.log("The player did not earn any point");
    
}


