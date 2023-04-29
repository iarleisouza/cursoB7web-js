let fruits = ['Banana', 'Laranja', 'Maça', 'Pera'];
// função some() = algum
let ok = fruits.some((value) => {
    return value.length > 3;
});

if (ok) {
    console.log('Algum item é maior que 3');
}else {
    console.log('Nenhum item é maior que 3');
}