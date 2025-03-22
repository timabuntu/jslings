// 💡 EXERCÍCIO: Template Strings
// 
// JavaScript moderno permite strings mais flexíveis com a sintaxe de template strings,
// usando crases (`) ao invés de aspas simples ou duplas.
//
// TAREFAS:
// 1. Corrija a função 'saudacao' para usar template strings e incluir o nome
// 2. Corrija a função 'infoUsuario' para incluir todas as propriedades do objeto
// 3. Use template strings multilinhas para formatar a descrição do curso
//
// 📚 DICA: Template strings usam crases (`) e permitem interpolação com ${expressão}

// Função que deve retornar uma saudação personalizada
function saudacao(nome) {
  return "Olá " + nome + "!"; // Modifique para usar template string
}

// Função que deve formatar informações do usuário
function infoUsuario(usuario) {
  return "Nome: " + usuario.nome + ", Idade: " + usuario.idade; // Use template string para incluir todas as propriedades
}

// Descrição do curso que deve ser formatada em múltiplas linhas
const descricaoCurso = "JSlings\nAprenda JavaScript\nPela Prática"; // Use template string multilinha

export { saudacao, infoUsuario, descricaoCurso };
