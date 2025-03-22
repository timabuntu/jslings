import { nome, PI, linguagem, verificarVariaveis } from '../../exercises/01_variáveis/01_let_const.js';

describe('Exercício de variáveis let e const', () => {
  test('A variável nome deve ser declarada com let para permitir reatribuição', () => {
    expect(() => {
      // Tentamos redefinir o valor para ver se é possível
      Object.defineProperty(globalThis, 'nome', { value: "João" });
    }).not.toThrow();
  });

  test('PI deve ser declarado como uma constante', () => {
    expect(() => {
      // Se é const, isso deve falhar
      Object.defineProperty(globalThis, 'PI', { value: 3.14 });
    }).toThrow();
  });

  test('PI deve ter o valor correto', () => {
    expect(PI).toBeCloseTo(3.14159);
  });

  test('A linguagem deve ser JavaScript', () => {
    expect(linguagem).toBe("JavaScript");
  });

  test('A função verificarVariaveis deve retornar true', () => {
    try {
      expect(verificarVariaveis()).toBe(true);
    } catch (error) {
      // Se ocorrer um erro, significa que as variáveis não foram definidas corretamente
      fail('A função verificarVariaveis falhou: ' + error.message);
    }
  });
});
