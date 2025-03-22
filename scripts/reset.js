import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

// Obter o caminho do diretório atual em ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Arquivo para rastrear o progresso
const PROGRESS_FILE = path.join(__dirname, '..', '.progress.json');

// Reseta o progresso
fs.writeJSONSync(PROGRESS_FILE, { currentExercise: 0, completed: [] });

console.log(chalk.green('✅ Progresso resetado com sucesso!'));
console.log(chalk.blue('Execute npm start para começar do primeiro exercício.'));
