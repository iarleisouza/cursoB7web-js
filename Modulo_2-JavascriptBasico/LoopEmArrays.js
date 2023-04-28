/*
let cores = ['Preto', 'Branco', 'Azul', 'Vermelho'];
cores.push('Verde');

for (let n = 0; n < cores.length; n++){
    console.log(core[n]);
}
*/
/*

for (let i in cores) {
    console.log(cores[i]);
}


*/
// se of se refere ao valor

/*
for (let cor of cores) {
    console.log(cor);
}
*/

let cores = [
 { nome: 'preto', qtd: 10},
 {nome: 'azul', qtd: 5},
 {nome: 'vermelho', qtd: 15}
];

for (let cor of cores) {
    console.log(`Nome: ${cor.nome} - ${cor.qtd}`);
}

for (let i in cores) {
    console.log(cores[i].nome);
}
// função toUpperCase() tranforma tudo em maiusculo
for (let i in cores) {
    cores[i].nome = cores[i].nome.toUpperCase();
    console.log(cores);
}