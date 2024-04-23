// ******************** Day 13 Challenge ************************
//                      Question 37:
// Large Shirts: Default values in make_shirt().
function make_shirt(size = 'large', message = 'I love Typescript') {
    console.log(`The size of the shirt is ${size} and the text on the shirt is ${message}`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'I want to travel Singapore');
//                      Question 38:
// Cities: Describing cities with a function.
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}
describe_city('Karachi', 'Pakistan');
describe_city('Delhi', 'India');
describe_city('Chicago', 'USA');
export {};
