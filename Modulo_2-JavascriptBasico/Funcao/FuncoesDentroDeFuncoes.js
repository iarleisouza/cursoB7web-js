/*
function square(x) {
    return x * x;
}

console.log(square(2));
*/
/*
function square(x) {
    return x * x;

}

function addSquares(a, b) {
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3));
*/
/*
function square(x) {
    function square(x) {
    return x * x;
}
    
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3));
*/

function addSquares(a, b){
    const square = (x) => {
        return x * x;
    }
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2 , 3));