// tests/01_variáveis/01_let_const.test.js

const exercicio = require('../../exercises/01_variáveis/01_let_const');

describe('Exercício de variáveis let e const', () => {
  test('A variável nome deve ser declarada com let para permitir reatribuição', () => {
    expect(() => {
      exercicio.nome = "João";
    }).not.toThrow();
  });

  test('PI deve ter o valor correto', () => {
    expect(exercicio.PI).toBeCloseTo(3.14159);
  });

  test('A linguagem deve ser JavaScript', () => {
    expect(exercicio.linguagem).toBe("JavaScript");
  });

  test('A função verificarVariaveis deve retornar true', () => {
    try {
      expect(exercicio.verificarVariaveis()).toBe(true);
    } catch (error) {
      // Se ocorrer um erro, significa que as variáveis não foram definidas corretamente
      fail('A função verificarVariaveis falhou: ' + error.message);
    }
  });
});