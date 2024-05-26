let size: string[] =['medium', 'large']

let defaultMessage = 'I love typescript'
let mediumShirt = (`Size of shirt is : ${size[0]}, ${defaultMessage}`)
let largeShirt = (`Size of shirt is : ${size[1]}, ${defaultMessage}`)
let smallShirt = (`Size of shirt is : small and I love painting`)
let extraLarge = (`Size of shirt is : extraLarge and I love hiking`)

function make_tshirt(){
    let simpleFunction = (mediumShirt)
    console.log(simpleFunction)
    return simpleFunction
}

let response = make_tshirt()
console.log(response)