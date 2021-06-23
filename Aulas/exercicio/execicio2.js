/*
1 - Crie um objeto de endereço no qual deve conter as propriedades "país, estado, cidade, bairro, rua, número" depois construir uma variável que vai armazenar uma string “Texto” contendo a seguinte informação: “O Homero mora em ‘aqui as informações de endereço contidas no objeto criado'''. Ex: Fulano mora no Brasil, em Feira de Santana - BA, no Centro, rua Fulano número  1220.

2 - Crie uma função que receba um valor e retorne se ele é par ou ímpar. 

3 - Crie um array cujo valor dele seja habilidades Ex: ‘Fogo, Água, Natureza’, e crie uma função que receba como parâmetro uma habilidade e então verifique se no array existe esta habilidade passada para a função retornando um boolean. OBS: As habilidades voce nomeia de acordo com o que você imaginou para essa questão não precisa ser as mesmas do exemplo.

4 - Crie uma função que receba como parâmetro uma quantidade de anos de estudo e de acordo com esse parâmetro a função deve retornar se ele é Noob, Iniciante, Intermediário, Avançado ou mestre.

5 - Crie um array com dois objetos que contenha as seguintes propriedades “nome e habilidades” a propriedade habilidade do objeto será um array de habilidades, então percorra o cada posição do array e exiba a seguinte informação: “O Usuário fulano possui as seguintes habilidades: Terra, Fogo, Ar”. OBS: as habilidades não precisam ser as mesmas do exemplo da questão use sua imaginação. 
*/

console.log('1 Questão')

const adress = {
  pais: 'Brasil',
  estado: 'Bahia',
  cidade: 'Feira de Santana',
  bairro: 'Rua Nova',
  rua: 'Mantiqueira',
  numero: '435'
}

// 1 Questão
const fromAdress = `O Homero mora no ${adress.pais}, no estado da ${adress.estado}, na cidade de ${adress.cidade}, na ${adress.bairro}, na rua ${adress.rua}, no Nº${adress.numero}.`


console.log(fromAdress)
console.log('-----------------------------------')
// 2 Questão

console.log('2 Questão')

function parOuImpar(n) {
  return n % 2 === 0 ? 'Par' : 'Impar'
}
console.log(parOuImpar(15))
console.log('-----------------------------------')

// 3 Questão

console.log('3 Questão')

const skills = ['front-end', 'back-end', 'full-stack', 'devops']

function temOuNao(skill) {
  return skills.includes(skill)
}

console.log(temOuNao('front-end'))
console.log('-----------------------------------')

// 4 Questão

function timeForStudy(n) {
  if(n <= 1) {
    return 'Noob'
  }
  else if(n <= 3) {
    return 'Iniciante'
  }
  else if(n <= 7){
    return 'Intermediário'
  }
  else if(n <= 12) {
    return 'Avançado'
  }
  else {
    return 'Expert'
  }
}

console.log('4 Questão')

console.log(timeForStudy(4))

console.log('-----------------------------------')

// Questão 5

console.log('5 Questão')

const arr = [
  {
    nome: 'João',
    habilidades: [
      'design',
      'devops',
      'dev'
    ]
  },
  {
    nome: 'Marcos',
    habilidades: [
      'fullstack',
      'front-end',
      'back-end'
    ]
  }
]

arr.forEach(candidato => {
  console.log(`O Usuário ${candidato.nome} possui as seguintes habilidades: ${candidato.habilidades.join(', ')}.`)
})
