function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Sandwich is ready!\n");
}

// Call the function with different numbers of arguments
makeSandwich('Turkey', 'Lettuce', 'Tomato', 'Mayo');
makeSandwich('Ham', 'Cheese');
makeSandwich('Peanut Butter', 'Jelly');