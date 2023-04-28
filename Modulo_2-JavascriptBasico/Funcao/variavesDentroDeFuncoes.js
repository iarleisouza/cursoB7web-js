/* A variavel local tem prioridade sobre a variavel global, ou seja,
entre as duas variaveis a local é utilizada ao invés da global, isso com as 
duas variáveis com o mesmo nome.

*/
let count = 0;

function add() {
    let count = 0;
    count++;
}

add();
add();

console.log(count);