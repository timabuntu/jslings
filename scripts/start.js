// scripts/start.js
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

// Polyfill para __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Arquivo para rastrear o progresso
const PROGRESS_FILE = path.join(__dirname, '..', '.progress.json');

// Inicializa o arquivo de progresso se não existir
if (!fs.existsSync(PROGRESS_FILE)) {
  fs.writeJSONSync(PROGRESS_FILE, { currentExercise: 0, completed: [] });
}

// Lê o progresso atual
let progress = fs.readJSONSync(PROGRESS_FILE);

// Obtém todos os exercícios na ordem correta
const exercises = globSync('exercises/**/*.js')
  .sort((a, b) => {
    // Ordenação personalizada para seguir a sequência correta
    const partsA = a.split('/');
    const partsB = b.split('/');

    // Compara o número da pasta primeiro
    const folderA = parseInt(partsA[1].split('_')[0]);
    const folderB = parseInt(partsB[1].split('_')[0]);

    if (folderA !== folderB) return folderA - folderB;

    // Se estiverem na mesma pasta, compara o número do arquivo
    const fileA = parseInt(partsA[2].split('_')[0]);
    const fileB = parseInt(partsB[2].split('_')[0]);

    return fileA - fileB;
  });

// Se todos os exercícios foram completados
if (progress.completed.length === exercises.length) {
  console.log(chalk.green.bold('🎉 Parabéns! Você completou todos os exercícios do JSlings! 🎉'));
  process.exit(0);
}

// Encontra o próximo exercício a ser feito
const nextExercise = exercises.find(ex => !progress.completed.includes(ex));

if (!nextExercise) {
  console.log(chalk.yellow('Algo deu errado ao encontrar o próximo exercício.'));
  process.exit(1);
}

// Exibe informações sobre o próximo exercício
console.log(chalk.blue.bold('📚 JSlings - Aprenda JavaScript pela Prática'));
console.log(chalk.yellow(`\nSeu próximo exercício é: ${chalk.bold(nextExercise)}`));

// Lê o conteúdo do arquivo para mostrar as instruções
const exerciseContent = fs.readFileSync(path.join(__dirname, '..', nextExercise), 'utf8');
const instructions = exerciseContent
  .split('\n')
  .filter(line => line.startsWith('//'))
  .join('\n');

console.log(chalk.cyan('\nInstruções:'));
console.log(instructions);

console.log(chalk.green('\nPara verificar sua solução:'));
console.log(chalk.white('  npm test'));

console.log(chalk.yellow('\nPrecisa de ajuda?'));
console.log(chalk.white('  npm run hint'));

// Salva o exercício atual no arquivo de progresso
progress.currentExercise = exercises.indexOf(nextExercise);
fs.writeJSONSync(PROGRESS_FILE, progress);