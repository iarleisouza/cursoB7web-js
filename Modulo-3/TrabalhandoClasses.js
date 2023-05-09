function clicou(){
    const li = document.querySelector('li');
    const button = document.querySelector('button');

    // button.classList.add('azul');
  //    button.classList.remove('azul');
       
  /*
    if (button.classList.contains('verde')){
        button.classList.remove('verde');
        button.classList.add('azul');
    }else{
        button.classList.add('verde');
        button.classList.remove('azul');
       
          button.classList.toggle('azul'); // remove e adiciona um item

    }

       */

            if (button.classList.contains('azul')){ // verifica 
                button.classList.replace('azul', 'verde'); // substitui
            }else{
                button.classList.replace('verde', 'azul');
            }
            
    
}