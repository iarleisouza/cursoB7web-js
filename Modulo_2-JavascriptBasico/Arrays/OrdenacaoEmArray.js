/*
let fruits = [ 'Maca', 'Uva', 'Laranja', 'Banana'];

fruits.sort(); // função para ordenar
fruits.reverse(); // função pára reverter

console.log(fruits);

*/

let cars = [
    { brand: 'Fiat, year: 2022'},
    { brand: 'BMW, year: 2018'},
    { brand: 'Ferrari, year: 2020'},
]
/*
cars.sort((a, b) => {
    if (a.year > b.year) {
        return 1;
    }else if (a.year < b.year) {
        return -1;
    }else{
        return 0;
    }
});
*/
/*
cars.sort((a, b) => {
    return a.year -b.year;
})
*/
cars.sort((a, b) => navigator.year - a.year);
console.log(cars);