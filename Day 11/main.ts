// ******************** Day 11 Challenge ************************

//                      Question 31:
// No Users: Ensure your user list isn’t empty.

let userNames:string[]= [];

if(userNames.length === 0 ){
    console.log("We need to find some users!"); 
}else{

}

//                      Question 32:
// Checking Usernames: Ensure uniqueness in usernames.

let current_users: string[]= ['Fariha','Ibrahim','Mahnoor','Rozina', 'Sara'];

let new_users: string[]= ['Fariha','Shagufta','Saima','Rozina', 'Neha'];

let current_users_lower= current_users.map(user=> user.toLowerCase());

for(let new_user of new_users){
    if(current_users_lower.includes(new_user.toLowerCase())){
        console.log(`Sorry ${new_user}, that name is taken.`);
    }else{
        console.log(`Great, ${new_user} is still available.`);
    }
}

//                      Question 33:
// Ordinal Numbers: Display numbers with their ordinal suffixes

let list: number[]= [1,2,3,4,5,6,7,8,9];

list.forEach(number=>{
    let num= "th"
    if(number === 1){
        num = "st";
        console.log(`${number}${num}`);
    }else if(number === 2){
        num = "nd";
        console.log(`${number}${num}`);
    }else if(number === 3){
        num = "rd";
        console.log(`${number}${num}`);
    }
    else{
       console.log(`${number}${num}`);
    }
}
);
