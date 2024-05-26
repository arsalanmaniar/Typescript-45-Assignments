// Define the function to make the magicians great
function makeGreat(magicians: string[]): string[] {
    const greatMagicians = magicians.map(name => `Great ${name}`);
    return greatMagicians;
}

// Define the function to show magicians
function showMagicians(magicians: string[]): void {
    magicians.forEach(name => console.log(name));
}

// Original array of magicians' names
const magicians: string[] = ["Harry", "Hermione", "Ron"];

// Make a copy of the original array
const originalMagicians: string[] = [...magicians];

// Call makeGreat with a copy of the array
const greatMagicians: string[] = makeGreat([...magicians]);

// Show original magicians
console.log("Original Magicians:");
showMagicians(originalMagicians);

// Show great magicians
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
