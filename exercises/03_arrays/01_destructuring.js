// 💡 EXERCÍCIO: Desestruturação de Arrays
// 
// A desestruturação permite extrair valores de arrays e objetos em variáveis
// separadas de forma concisa.
//
// TAREFAS:
// 1. Use desestruturação para extrair o primeiro e segundo elementos do array 'cores'
// 2. Use desestruturação com rest operator para separar o primeiro elemento dos demais
// 3. Use desestruturação em parâmetros de função para extrair dados do array passado
//
// �� DICA: Desestruturação usa a sintaxe: const [a, b] = array;
// O rest operator usa três pontos: const [primeiro, ...resto] = array;

// Extraia a primeira e segunda cor em variáveis chamadas 'primeiraCor' e 'segundaCor'
const cores = ['azul', 'vermelho', 'verde', 'amarelo'];
const primeiraCor = cores[0];
const segundaCor = cores[1];

// Separe o primeiro número e coloque os demais em um array 'outrosNumeros'
const numeros = [10, 20, 30, 40, 50];
const primeiroNumero = numeros[0];
const outrosNumeros = numeros.slice(1);

// Conserte esta função para usar desestruturação de parâmetros
function primeirosElementos(array) {
  const primeiro = array[0];
  const segundo = array[1];
  return `Os dois primeiros elementos são: ${primeiro} e ${segundo}`;
}

export { primeiraCor, segundaCor, primeiroNumero, outrosNumeros, primeirosElementos };
