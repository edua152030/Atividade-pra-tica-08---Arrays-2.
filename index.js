/*1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares.

const numeros = [2, 7, 14, 3, 8, 10, 11, 16, 5, 6, 4, 9, 13, 12, 1];

for (let i = 0; i < numeros.length; i++) {
    //comparo se o meu indice do array for divisivel por 2 
  if (numeros[i] % 2 == 0) {
    //imprime o indice
    console.log(numeros[i]);
  }
}
*/

/*2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
inteiros e no final mostre a soma de todos os elementos.

let valor = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
let soma = 0;

for (let i = 0; i < valor.length; i++) {
    //soma minha variavel com meu valor do indice i ate chega o tamanho so meu array
    soma += valor[i];
}
//imprimo minha soma
console.log(soma);
*/


/**3. Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos

const numerosPerfeitos = []
let limite = 4
let num = 2

function verificarNumPrimo(num){
  let divisores = 0
  
  for (let i = 0; i <= num; i++) 
   if (num % i === 0) divisores++

   if(divisores ==2){
    numPrimo = true
   return numPrimo
}
}
while(numerosPerfeitos.length < limite){
  if(verificarNumPrimo(num)){
    const perfeito = (2 ** (num -1)) * (2 ** num - 1)
    numerosPerfeitos.push(perfeito)
  }
  num++
}
document.write(`${numerosPerfeitos.join(' ')}`)
*/


/**4. Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
retorne a união dos dois em um novo vetor.


const primeiroVetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const segundoVetor = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function concatVetor(){
  return primeiroVetor + segundoVetor
}

console.log(concatVetor())
*/

/*5. Crie uma função que recebe um vetor de inteiros e um número
inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
se não faz parte.


const vetor = [1, 3, 5, 7]
const num = 3

function verificaVetor(){
  for (let i = 0; i < vetor.length; i++) {
    if(num === vetor[i]){
      return true
    }
    }   
    return false
  }

  console.log(verificaVetor())
*/


/*6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
e que exiba a lista desses nomes na tela. Após exibir essa lista, o
programa deve mostrar também os nomes na ordem inversa em
que o usuário os digitou.


let nomes = []

for (let i = 0; i < 5; i++) {
  let inserirNome = prompt('digite um nome')
  nomes.push(inserirNome)
}

for (const nome of nomes) {
  document.write(nome + ' ')
}

for (let i = nomes.length; i >= 0; i--) {
  document.write(nomes[i] + ' ');
}
*/

