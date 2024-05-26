var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the function to make the magicians great
function makeGreat(magicians) {
    var greatMagicians = magicians.map(function (name) { return "Great ".concat(name); });
    return greatMagicians;
}
// Define the function to show magicians
function showMagicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Original array of magicians' names
var magicians = ["Harry", "Hermione", "Ron"];
// Make a copy of the original array
var originalMagicians = __spreadArray([], magicians, true);
// Call makeGreat with a copy of the array
var greatMagicians = makeGreat(__spreadArray([], magicians, true));
// Show original magicians
console.log("Original Magicians:");
showMagicians(originalMagicians);
// Show great magicians
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
