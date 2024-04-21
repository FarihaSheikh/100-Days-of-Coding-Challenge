// ******************** Day 5 Challenge ************************

//                      Question 13:
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that
// stores several examples. Use your list to print a series of statements about these items, such as “I would like to
//  own a Honda motorcycle.”

let  myFavTransportation: string[] = ["Honda motorcycle", "Toyota car", "BMW car", "Mercedes car"];

for(let i = 0; i < myFavTransportation.length; i++){

    console.log(`I would like to own a ${myFavTransportation[i]}`);

}

//                      Question 14:
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
//includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person,
// inviting them to dinner.

let guestList: string[]= ["Rozina", "Mahnoor", "Shagufta"];

for(let i=0; i<guestList.length; i++){

    console.log(`Dear ${guestList[i]}, I would like to invite you to dinner.`);
}

//                      Question 15:
// Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of 
// invitations with a replacement guest.

let guestList1: string[]= ["Rozina", "Mahnoor", "Shagufta"];
let person_not_coming:string = guestList1[1];

let newGuest: string = "Rabiya";
guestList1[1] = newGuest

for(let i=0; i< guestList1.length; i++){
    console.log(`Dear ${guestList1[i]},\n\nI am grateful to invite you to the dinner party.\n\n`);
} 

console.log(`${person_not_coming} is not coming to the dinner party`);
