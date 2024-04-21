// ******************** Day 6 Challenge ************************

//                      Question 16:
// More Guests: You've found a bigger dinner table, so there's room for more guests.

// let guestList:string[]=['Mahnoor','Rozina','Shagufta'];
// console.log("Great News! We have found a bugger dinner table, so we are inviting more guests in party\n\n");

// guestList.unshift("Ifrah");
// guestList.splice(2,0, "Shazia");
// guestList.push("Ayesha");

// for(let i=0;i< guestList.length; i++){
//     console.log(`Dear Miss ${guestList[i]}, We are grateful to invite you to our dinner party`);
// }


//                      Question 17:
// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

// console.log("Sorry we can not arrange big tableUnfortunately! we are inviting only two guests");

// while( guestList.length > 2 ){
// let removeGuest= guestList.pop();
// console.log(`Sorry Miss ${removeGuest}, you are not invited to the dinner`);

// }
// for(let i=0;i< guestList.length; i++){
//     console.log(`Dear Miss ${guestList[i]},You are still invited to the dinner`);
// }
// guestList.splice(0,2);
// console.log(guestList);

//                      Question 18:
// Seeing the World: Think of at least five places you’d like to visit.

// Store the locations in a array. Make sure the array is not in alphabetical order.
let places :string[]=['Singapore', 'Paris', 'Australia', 'Uinited States', 'India', 'Malaysia'];
console.log('Orignal ' + places);

// Print your array in alphabetical order without modifying the actual list.
console.log('Copy ' + [...places].sort());

// print your message in reverse alphabetical order without changing the order of the orignal list.
console.log('Copy ' + [...places].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log('Orignal ' +places);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log('Orignal ' + places.reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('Orignal ' + places.reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Orignal ' + places.sort());

// Sort to change your array so it’s stored in reverse alphabetical order. 
// Print the list to show that its order has changed.
console.log('Orignal ' + places.sort().reverse());
