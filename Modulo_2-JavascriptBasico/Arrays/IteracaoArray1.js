let fruits = ['Banana', 'Laranja', 'Maça', 'Pera'];
/*
let bigFruits = fruits.filter((item) => {
    if(item.length > 4){
        return true;
    }else{
        return false;
    }
})
console.log(bigFruits);
*/
/*
let bigFruits = fruits.filter((item) => {
    return item.length > 4;
});
console.log(bigFruits);
*/
// função filter() = filtrar
let bigFruits = fruits.filter((item) => item.length > 4);
console.log(bigFruits);