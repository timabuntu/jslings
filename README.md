# JSlings: Aprenda JavaScript Moderno pela Prática

JSlings é um sistema de exercícios práticos para aprender JavaScript moderno através de pequenos desafios. Inspirado no modelo do Rustlings, este curso oferece uma série de exercícios progressivos, todos acompanhados por testes automatizados que o ajudarão a verificar seu progresso.

## O que você vai aprender

- Sintaxe moderna de JavaScript (ES6+)
- Funções e arrow functions
- Arrays e métodos de array
- Objetos e manipulação de objetos
- Desestruturação e operadores spread/rest
- Promises e async/await
- Módulos ES
- Classes e orientação a objetos
- Manipulação do DOM
- APIs modernas do navegador

## Pré-requisitos

- Node.js (versão 18.0.0 ou superior)
- npm (geralmente vem com o Node.js)
- Um editor de código (recomendamos VSCode)

## Guia de Instalação

1. Clone o repositório:

```bash
git clone (aguardando...)
cd jslings
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o verificador para começar:

```bash
npm start
```

## Como Funciona

1. O script inicial mostrará o primeiro exercício que você precisa resolver.
2. Abra o arquivo indicado no seu editor de código.
3. Leia os comentários no arquivo para entender o que precisa ser feito.
4. Modifique o código para fazer o exercício passar no teste.
5. Execute `npm test` para verificar se sua solução está correta.
6. Quando passar, execute `npm start` novamente para avançar para o próximo exercício.

## Estrutura dos Exercícios

Os exercícios estão organizados em categorias e dificuldade crescente:

```
exercises/
├── 01_variáveis/
│   ├── 01_let_const.js
│   ├── 02_escopo.js
│   └── ...
├── 02_funções/
│   ├── 01_declarações.js
│   ├── 02_arrow_functions.js
│   └── ...
└── ...
```

Cada arquivo de exercício contém:
- Instruções do que deve ser feito
- Código parcial ou com erros para você corrigir
- Exemplos de uso quando relevante

## Comandos Disponíveis

- `npm start`: Inicia o verificador e mostra o próximo exercício a resolver
- `npm test`: Executa os testes para o exercício atual
- `npm run test:all`: Executa todos os testes para verificar progresso geral
- `npm run hint`: Mostra uma dica para o exercício atual
- `npm run watch`: Modo de observação que executa o teste automaticamente quando você salva o arquivo

## Acompanhando seu Progresso

O sistema mantém registro do seu progresso em um arquivo `.progress.json`. Você pode reiniciar seu progresso a qualquer momento com:

```bash
npm run reset
```

## Obtendo Ajuda

Se você ficar preso em um exercício:

1. Use o comando `npm run hint` para obter uma dica
2. Verifique a documentação recomendada para aquele tópico (listada no arquivo)
3. Consulte o diretório `solutions/` apenas como último recurso

## Recursos Adicionais

- [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Excelente referência para JavaScript
- [JavaScript.info](https://javascript.info/) - Tutorial moderno de JavaScript
- [Can I use](https://caniuse.com/) - Verificar compatibilidade de recursos