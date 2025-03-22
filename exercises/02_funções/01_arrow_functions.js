// 💡 EXERCÍCIO: Arrow Functions
// 
// Arrow functions são uma forma mais concisa de escrever funções em JavaScript moderno.
// Elas possuem sintaxe mais limpa e não possuem o próprio 'this'.
//
// TAREFAS:
// 1. Converta a função 'dobrar' para uma arrow function
// 2. Converta a função 'filtrarPares' para utilizar arrow function implícita (sem return)
// 3. Corrija a função 'somarArray' para processar corretamente o array usando arrow function
//
// 📚 DICA: Arrow functions com um único parâmetro não precisam de parênteses
// Arrow functions com uma única expressão não precisam de chaves nem return

// Converta para arrow function
function dobrar(numero) {
  return numero * 2;
}

// Converta para arrow function com return implícito
function filtrarPares(numeros) {
  return numeros.filter(function(n) {
    return n % 2 === 0;
  });
}

// Corrija esta função para somar todos os números do array usando arrow function
const somarArray = function(array) {
  // Use arrow function no reduce
  return array.reduce(function(acc, atual) {
    return acc + atual
  }, 0);
};

export { dobrar, filtrarPares, somarArray };
