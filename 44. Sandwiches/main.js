function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Sandwich is ready!\n");
}
// Call the function with different numbers of arguments
makeSandwich('Turkey', 'Lettuce', 'Tomato', 'Mayo');
makeSandwich('Ham', 'Cheese');
makeSandwich('Peanut Butter', 'Jelly');
