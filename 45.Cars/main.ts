interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary other properties
}

function createCar(manufacturer: string, model: string, ...extras: [string, any][]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add extra properties
    for (const [key, value] of extras) {
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional properties
const myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);

console.log(myCar);