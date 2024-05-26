interface item {
    name: string
    price: number
}

const vagetable: item ={
    name: 'onion',
    price: 100

}
const fruit: item ={
    name: 'apple',
    price: 200
    
}

console.log(`vagetable name: ${vagetable.name}, vegetable price: ${vagetable.price}`)
console.log(`fruit name: ${fruit.name}, fruit price: ${fruit.price}`)