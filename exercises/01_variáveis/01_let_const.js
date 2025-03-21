// Exemplo de arquivo de exercício: exercises/01_variáveis/01_let_const.js

// 💡 EXERCÍCIO: Variáveis com let e const
// 
// Neste exercício, vamos aprender sobre declaração de variáveis em JavaScript moderno.
// O JavaScript ES6+ introduziu 'let' e 'const' como alternativas ao 'var'.
//
// TAREFAS:
// 1. Corrija a variável 'nome' para que ela possa ser reatribuída
// 2. Corrija a constante 'PI' para que não possa ser alterada
// 3. Corrija o valor de 'linguagem' para que o teste passe
//
// 📚 DICA: 'let' permite reatribuição, 'const' não.

let nome = "Maria"; // Esta linha tem um problema

const PI = 3.14159; // Esta linha tem um problema

var linguagem = "JavaScript"; // Esta linha tem um problema

// Não modifique o código abaixo!
function verificarVariaveis() {
  // Tenta reatribuir 'nome'
  nome = "João";

  // Verificamos se linguagem tem o valor correto
  return linguagem === "JavaScript";

}

module.exports = {
  nome,
  PI,
  linguagem,
  verificarVariaveis
};