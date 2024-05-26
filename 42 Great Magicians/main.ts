function showMagicians(magicians: string[]): void {
    // Print the names of magicians in the list
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): void {
    // Add the phrase 'the Great' to each magician's name
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

let magicians: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];

console.log("Original list of magicians:");
showMagicians(magicians);

makeGreat(magicians);

console.log("\nModified list of magicians:");
showMagicians(magicians);