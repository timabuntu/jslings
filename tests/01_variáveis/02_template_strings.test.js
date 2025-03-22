import { saudacao, infoUsuario, descricaoCurso } from '../../exercises/01_variáveis/02_template_strings.js';

describe('Exercício de template strings', () => {
  test('A função saudacao deve usar template strings', () => {
    const resultado = saudacao('Maria');
    expect(resultado).toBe('Olá Maria!');
    // Verifica se a função realmente usa template strings (checando o código)
    const fnStr = saudacao.toString();
    expect(fnStr).toContain('`');
    expect(fnStr).toContain('${');
  });

  test('A função infoUsuario deve incluir todas as propriedades usando template strings', () => {
    const usuario = { nome: 'João', idade: 25, cidade: 'São Paulo', profissão: 'Desenvolvedor' };
    const resultado = infoUsuario(usuario);
    expect(resultado).toContain('Nome: João');
    expect(resultado).toContain('Idade: 25');
    expect(resultado).toContain('Cidade: São Paulo');
    expect(resultado).toContain('Profissão: Desenvolvedor');
    // Verifica se a função usa template strings
    const fnStr = infoUsuario.toString();
    expect(fnStr).toContain('`');
    expect(fnStr).toContain('${');
  });

  test('A descrição do curso deve usar template strings multilinhas', () => {
    expect(descricaoCurso).toContain('JSlings');
    expect(descricaoCurso).toContain('Aprenda JavaScript');
    expect(descricaoCurso).toContain('Pela Prática');
    // Confirma que há quebras de linha genuínas
    expect(descricaoCurso.split('\n').length).toBeGreaterThan(1);
    // Confirma que não é uma simples string com \n
    expect(descricaoCurso).not.toEqual("JSlings\nAprenda JavaScript\nPela Prática");
  });
});
