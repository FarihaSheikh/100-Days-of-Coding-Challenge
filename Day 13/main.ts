// ******************** Day 13 Challenge ************************

//                      Question 37:
// Large Shirts: Default values in make_shirt().

function make_shirt(size :string= 'large' , message:string = 'I love Typescript'):void{
    console.log(`The size of the shirt is ${size} and the text on the shirt is ${message}`);
}

make_shirt();
make_shirt('medium');
make_shirt('small', 'I want to travel Singapore');


//                      Question 38:
// Cities: Describing cities with a function.

function describe_city(city:string, country:string = 'Pakistan'):void{
    console.log(`${city} is in ${country}`);
}

describe_city('Karachi');
describe_city('Lahore');
describe_city('Chicago', 'USA');

//                      Question 39:
// City Names: Formatting city-country pairs.

function city_country(city:string, country:string):string{
    return `${city}, ${country}`;
}

let country1 = city_country('Karachi', 'Pakistan');
let country2 = city_country('Mumbai', 'India');
let country3 = city_country('Japan', 'Tokyo');

console.log(country1);
console.log(country2);
console.log(country3);

