// it doesnot include trscks number


// function make_album1(artistName:string, albumTitle:string){
//                  return{artistName, albumTitle}

// }
// let album1 = make_album1('Ali zafar', 'psl song')
// let album2 = make_album1('Atif aslam', 'bolly Wood song')
// let album3 = make_album1('Asim azhar', 'lolly Wood song')

// console.log(album1)
// console.log(album2)
// console.log(album3)

// it includes tracks number:

function make_album2(artistName:string, albumTitle:string, numberOfTracks?: number){
    return{artistName, albumTitle, numberOfTracks}

}
let album4 = make_album2('Ali zafar', 'psl song',30)
let album5 = make_album2('Atif aslam', 'bolly Wood song',50)
let album6 = make_album2('Asim azhar', 'lolly Wood song')

console.log(album4)
console.log(album5)
console.log(album6)