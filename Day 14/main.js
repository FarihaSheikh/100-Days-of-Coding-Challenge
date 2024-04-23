// ******************** Day 14 Challenge ************************
//                      Question 40:
// Album: Create objects for music albums.
function make_album(artist, title, tracks) {
    const albums = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        albums.tracks = tracks;
    }
    return albums;
}
const album1 = (make_album("Ali Zafar", "Jhoom"));
console.log(album1);
const album2 = (make_album("Atif Aslam", "Jal"));
console.log(album2);
const album3 = (make_album("Junaid Jamshed", "Vital Signs", 12));
console.log(album3);
//                      Question 41:
// Magicians: Display magician names from an array.
let magician = ['Faizan', 'Ahmad', 'Saim', 'Salman'];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
//                      Question 42:
// Great Magicians: Add "the Great" to magician names.
let magician1 = ['faizan', 'ahmad', 'saim', 'salman'];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'the Great ' + magicianArray[i];
    }
}
function show_magicians1(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
export {};
