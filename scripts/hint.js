import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { glob } from 'glob';


// Obter o caminho do diretório atual em ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Arquivo para rastrear o progresso
const PROGRESS_FILE = path.join(__dirname, '..', '.progress.json');

// Verifica se o arquivo de progresso existe
if (!fs.existsSync(PROGRESS_FILE)) {
  console.log(chalk.red('Arquivo de progresso não encontrado. Execute npm start primeiro.'));
  process.exit(1);
}

// Lê o progresso atual
const progress = fs.readJSONSync(PROGRESS_FILE);

// Obtém todos os exercícios na ordem correta
const exercises = glob.sync('exercises/**/*.js').sort();

// Obtém o exercício atual
const currentExercise = exercises[progress.currentExercise];

if (!currentExercise) {
  console.log(chalk.red('Não foi possível determinar o exercício atual.'));
  process.exit(1);
}

console.log(chalk.blue.bold(`Dica para: ${chalk.yellow(currentExercise)}`));

// Mapa de dicas para cada exercício
const hints = {
  'exercises/01_variáveis/01_let_const.js':
    `Dica para variáveis let e const:
  - Use 'let' para variáveis que precisam ser reatribuídas
  - Use 'const' para valores que não devem mudar
  - No JavaScript moderno, evitamos usar 'var'
  - Lembre-se que a linguagem que estamos estudando é "JavaScript"`,

  'exercises/01_variáveis/02_template_strings.js':
    `Dica para template strings:
  - Use crases (\`) para criar template strings
  - Para incluir variáveis ou expressões, use \${ variável }
- Template strings preservam quebras de linha
  - Você pode escrever strings multilinhas diretamente sem \\n`,

  'exercises/02_funções/01_arrow_functions.js':
    `Dica para arrow functions:
- Sintaxe básica: (parametros) => { corpo }
- Para um único parâmetro, os parênteses são opcionais: param => { corpo }
- Para retorno direto, as chaves são opcionais: (a, b) => a + b
  - Arrow functions não têm seu próprio 'this'
    - Em métodos de array como map / filter / reduce, arrow functions são ideais`,

  'exercises/02_funções/02_default_params.js':
    `Dica para parâmetros padrão:
- Defina valores padrão na declaração: function foo(a = 1, b = 2) { }
- Os valores padrão são usados quando o argumento é undefined
  - Você pode usar expressões: function(x = getDefault()) { }
- Parâmetros posteriores podem usar anteriores: function(a = 1, b = a + 1) { } `,

  'exercises/03_arrays/01_destructuring.js':
    `Dica para desestruturação de arrays:
- Sintaxe básica: const [a, b] = array;
- Para pular elementos: const [a, , c] = array;
- Para pegar o resto: const [primeiro, ...resto] = array;
- Valores padrão: const [a = 'padrão', b] = array;
- Funciona em parâmetros: function foo([primeiro, segundo]) { } `,

  // Adicione mais dicas para outros exercícios aqui
};

// Mostra a dica para o exercício atual
if (hints[currentExercise]) {
  console.log(chalk.cyan(hints[currentExercise]));
} else {
  console.log(chalk.yellow('Sem dica específica para este exercício.'));

  // Fornece dica genérica baseada no nome do exercício
  const category = currentExercise.split('/')[1].split('_')[1];
  console.log(chalk.cyan(`Este exercício trata sobre ${category}.`));
  console.log(chalk.cyan(`Consulte a documentação em MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/$\{category\}`));
}

console.log(chalk.green('\nContinue tentando!'));
