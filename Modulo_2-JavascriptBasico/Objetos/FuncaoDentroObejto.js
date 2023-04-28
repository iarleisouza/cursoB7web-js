let pessoa = {
    nome: 'Iarlei',
    sobrenome: 'Souza',
    idade: 45,
    // Dessa forma usa o this.
  /*  nomecompleto: function () {
     //   return this.nome + ' ' + this.sobrenome;
     return `${this.nome} ${this.sobrenome}`;
    
    }
    */
   // dessa forma não se usa o this.
     nomecompleto: () => {
        return 'bla bla bla';
     }
}

console.log(pesoa.nomecompleto());