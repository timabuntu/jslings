// scripts/hint.js
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

// Polyfill para __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
const exercises = globSync('exercises/**/*.js').sort();

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
  console.log(chalk.cyan(`Consulte a documentação em MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/${category}`));
}

console.log(chalk.green('\nContinue tentando!'));