// Q14
var guest_list = ["usama", "sufiyan", "hamza", "arsalan"];
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear` + guest_list[i] + `\n\nYou are invited for a dinner tomorrow. \n\nThank you.`);
// }
// Q15
var not_coming = "hamza";
var new_guest = "sami";
guest_list[0] = new_guest;
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear` + guest_list[i] + `\n\nYou are invited for a dinner tomorrow. \n\nThank you.\n\n`);
// }
// console.log(` Mr ${not_coming}, is not coming for dinner tomrrow.`);
// Q16
guest_list.unshift("Ghazanfar");
guest_list.splice(guest_list.length / 2, 2, "Ali");
guest_list.push("Imran Khan");
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear` + guest_list[i] + `\n\nYou are invited for a dinner tomorrow. cls\n\nThank you.\n\n`);
// }
// console.log(`We have found a bigger dinner table so we invited more guests`)
// Q17
console.log("\n\nUnfortunately we are out of space, so have space for two guest only.\n\n");
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("Sorry, Dear ".concat(removed_guest, ", You are not invited for a dinner"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear" + guest_list[i] + "\n\nYou all are still invited for a dinner tomorrow. cls\n\nThank you.\n\n");
}
guest_list.splice(0., 2);
console.log(guest_list);
