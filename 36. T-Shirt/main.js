var sizeofShirt = ['small', 'medium', 'large'];
var shirt1 = 'This shirt is for casual wearing';
var shirt2 = 'This shirt is for formal wearing';
var shirt3 = 'This shirt is for party wearing';
function make_tshirt() {
    var simpleFunction = "This is a ".concat(sizeofShirt[0], " shirt, and ").concat(shirt1);
    console.log(simpleFunction);
    return simpleFunction;
}
var response = make_tshirt();
console.log(response);
