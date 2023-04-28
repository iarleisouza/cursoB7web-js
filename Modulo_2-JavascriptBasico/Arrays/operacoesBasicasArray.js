let ingredientes = [
    'leite',
    'ovo',
    'acucar',
    'farinha',
    'canela'
];

// função shift() remove o primeiro item do meu array
ingredientes.shift();
//função pop() remove o ultimo item do array
ingredientes.pop();
// adiconar um novo item no array com a função push()
ingredientes.push('chocolate');
//função length() faz contagem dos itens do array
console.log(`Total de ingredientes: ${ingredientes.length}`);