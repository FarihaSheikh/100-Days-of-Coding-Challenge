//              *************Day 1 **************
                //    Question 1:
 // Install Node.js, TypeScript and VS Code on your computer/Laptop.

                     //  Question 2: 
 /*Personal Message: Store a person’s name in a variable and print a message to them,like “Hello Eric, would you like to learn some TypeScript today?”*/

 let personName = "Fariha";
 console.log(`Hello ${personName}, would you like to learn some TypeScript today?`);

                  //    Question 3: 
 // Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase

 let personName1 :string = "Fariha Fatima";
 let LowerCase:string = personName.toLowerCase();
let upperCase:string = personName.toUpperCase();
let titleCase:string = personName.split(' ').map(word=> word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase())
.join(' ');

console.log(LowerCase);
console.log(upperCase);
console.log(titleCase);






