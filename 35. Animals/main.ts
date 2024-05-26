let animalPet: string[] = [`Lion` ,`Horse`, 'Dog']

console.log('Animals Names :\n')
for (let i=0; i<animalPet.length; i++){
    console.log(`${animalPet[i]}`)
}
console.log('Statements')
for(let i=0; i<animalPet.length; i++){
    console.log(`\nA ${animalPet[i].toLocaleLowerCase()} would make a great pet`)
}

console.log('\nAny of these animals would make a great pet')

