function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    let newLi = document.createElement("li");
    newLi.innerText = "Item adicionado";
//      ul.appendChild(newLi);
ul.append(newLi); // adicona um item no final.
    ul.prepend(newLi); // qadiciona o item no começo
}