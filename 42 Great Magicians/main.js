function showMagicians(magicians) {
    // Print the names of magicians in the list
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    // Add the phrase 'the Great' to each magician's name
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
var magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
console.log("Original list of magicians:");
showMagicians(magicians);
makeGreat(magicians);
console.log("\nModified list of magicians:");
showMagicians(magicians);
