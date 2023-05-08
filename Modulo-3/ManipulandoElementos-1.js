function clicou(){
    const teste = document.querySelector("#teste");
    console.log(teste);
    console.log(teste.children); // verifica os filhos da div teste
    console.log(teste.children[0].children); // mostra o conteudo array

const ul = teste.querySelector('ul');
ul.innerHTML = 'teste2';
}

