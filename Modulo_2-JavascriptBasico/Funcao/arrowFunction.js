/* função padrão
function somar(x, y) {
    return x + y;
}
console.log(somar(10, 5));
*/

/* 
  const somar = (x, y) => {
    // return x + y;
    let resultado = x + y;
    return resultado;
}
console.log(somar(10, 5));
*/
// tem como simplificar ainda mais

const somar = (x, y) => x + y;
console.log(somar(10, 5));
// so se for uma linha pode usar dessa forma
// Se for usar mais de uma linha de codigo na função é necessário usar
// {} 
// const somar = (x, y) => {
   // codigo;
   // codigo;
// }
console.log(somar(10, 5));

function sobrenome(sob) {
  return "iarlei " + sob;
}

const sobrenome = sob => 'iarlei ' + sob;

const sobrenome = (sob) => 'iarlei ' + sobrenome;

const sobrenome = (sob) => {
  return 'iarlei ' + sob;
}

const sobrenome = (sob) => {
  let nomecompleto = 'iarlei ' + sob;
  return nomecompleto;

}
console.log(sobrenome('Souza'))