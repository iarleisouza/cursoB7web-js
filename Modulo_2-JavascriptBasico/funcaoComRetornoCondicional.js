// obs: 1 função vai ter apenas 1 return.

function maiorDeIdade(idade){
    if (idade >= 18) {
        return true;
    }else{
        return false;
    }
}

let idade = 18;
let vericiacao = maiorDeIdade(idade);

if (verificacao) {
    console.log("É maior de idade");
}else{
    console.log("É menor de idade");
}