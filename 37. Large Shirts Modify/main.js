var size = ['medium', 'large'];
var defaultMessage = 'I love typescript';
var mediumShirt = ("Size of shirt is : ".concat(size[0], ", ").concat(defaultMessage));
var largeShirt = ("Size of shirt is : ".concat(size[1], ", ").concat(defaultMessage));
var smallShirt = ("Size of shirt is : small and I love painting");
var extraLarge = ("Size of shirt is : extraLarge and I love hiking");
function make_tshirt() {
    var simpleFunction = (mediumShirt);
    console.log(simpleFunction);
    return simpleFunction;
}
var response = make_tshirt();
console.log(response);
