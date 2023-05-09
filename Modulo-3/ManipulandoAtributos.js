function clicou() {
    const input = document.querySelector('input');
     
    console.log(input.getAttribute('placeholder')); //getAttribule pega o atributo

    if (input.hasAttribute('placeholder')){ //hasAttribute verifica se existe o atributo
        console.log('Tem placeholder SIM');
    }else{
        console.log('Não tem placeholder...');
    }
    input.setAttribute('placeholeder', 'Placeholder alterado');
    //setAttribute altera o atributo
}
function clicou() {
    const input = document.querySelector('input');
    const botao = document.querySelector('.botao')
     if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        botao.innerText = 'Mostrar Senha'
     }else{
        input.setAttribute('type', 'text');
        botao.innerText = 'Ocultar Senha';
     }
    
}
