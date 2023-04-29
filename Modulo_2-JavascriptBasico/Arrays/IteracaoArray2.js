let fruits = ['Banana', 'Laranja', 'Maça', 'Pera'];
// função every() = todos
let ok = fruits.every((value) => {
    return value.length > 3;
});

if (ok) {
    console.log('Todos são maior que 3');
}else {
    console.log('Não são todos maior que 3');
}