let fruits = ['watermelon', 'apple', 'orange', 'strawberry', 'pineapple']; // melancia, maçã, laranja, morango, abacaxi

fruits.sort() // colocando em ordem alfabética.
console.log(fruits)
remove = fruits.pop() // removendo o último item.

console.log(fruits.indexOf('apple'))
let index = fruits.indexOf('apple') // indicando qual índice está. 
console.log(fruits)
fruits.splice(index, 1) // posso colocar onde eu quiser dentro de uma cópia da matriz.

console.log(fruits)

fruits.forEach(fruit => {
    if (fruit === 'orange') console.log('I dont like apple')
    console.log(`I like ${fruit}`)
  })
  