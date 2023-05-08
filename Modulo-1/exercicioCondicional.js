/* substitua o @ pela condicional correta para que o resultado seja TRUE

let x = 10;
let y = 5;
console.log(x @ y); */

// resposta:
let x = 10;
let y = 5;
console.log(x > y); 

// ######################

/* Substitua o @ pela condicional correta para que o resultado seja FALSE

let w = "10";
let z = 10;
console.log(w @ z);*/
//Resposta:
let w = "10";
let z = 10;
console.log(w === z);

// ############################# 

/*
substitua o @ pela condicional correta para que o resultado seja TRUE
let a = 10;
let b = 5;
console.log(x @ y);*/
//Resposta
let a = 10;
let b = 5;
console.log(x !== y)

// ######################

/*
Crie uma condicional pr verificar se o preço da carne está barato ou caro. PS: Até 45 está barato
let preco = 40.3; */
//Resposta:

let preco = 40.3;

if (preco <= 45){
    console.log("Está barato");
}else{
    console.log("Está caro!");
}