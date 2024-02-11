//Perguntas geradas por IA. As perguntas e respostas ainda não foram verificadas
const perguntas = [
  {
    pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
    resposta: [
      "var myVar = 1;",
      "variable myVar = 1;",
      "let myVar = 1;"
    ],
    correta: 2
  },
  {
    pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
    resposta: [
      "push()",
      "addToEnd()",
      "append()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
    resposta: [
      "5",
      "32",
      "32 undefined"
    ],
    correta: 1
  },
  {
    pergunta: "Qual destes é um operador de comparação em JavaScript?",
    resposta: [
      "==+",
      "==",
      "<>"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o método usado para imprimir algo no console em JavaScript?",
    resposta: [
      "print()",
      "console.print()",
      "console.log()"
    ],
    correta: 2
  },
  {
    pergunta: "O que o método 'addEventListener' faz em JavaScript?",
    resposta: [
      "Remove um ouvinte de evento",
      "Adiciona um ouvinte de evento",
      "Atualiza um ouvinte de evento"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
    resposta: [
      "function",
      "func",
      "defineFunction"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a forma correta de escrever um comentário de linha única em JavaScript?",
    resposta: [
      "// Este é um comentário",
      "' Este é um comentário",
      "/* Este é um comentário */"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função usada para converter uma string em um número inteiro em JavaScript?",
    resposta: [
      "parseInt()",
      "stringToInt()",
      "toInteger()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador usado para atribuição de valor em JavaScript?",
    resposta: [
      "=",
      "==",
      ":="
    ],
    correta: 0
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

//loop ou laço de repetição
for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.resposta) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    quizItem.querySelector('dl').appendChild(dt)

  }
  //remove "Resposta A" da tela
  quizItem.querySelector('dl dt').remove()

  //coloca o quiz na tela
  quiz.appendChild(quizItem)
}

