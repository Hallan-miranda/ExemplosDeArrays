let numbers = [10,5,6,26,58,47,13,0];
// retorna o array com os valores concatenando 1
 let numeroMasiUm = () => numbers.map((valor) => {return valor + 1;} )

 // Filtra  números menor ou maior que...
 let teste = () => numbers.filter((valor) => {return valor <= 25})

 // soma todos os valores e retorna
 let dedo = () =>  numbers.reduce((resultado, valor) => {return resultado / valor})
 
 //Altera os valores selecionado do array
let fill = () => numbers.fill(5,0,numbers.length)

// Faz um teste e retorna se passou ou não
let some = (elemento,index, array) => {return  elemento === 20};

// Faz um teste para saber se todos os elementos de um array são maior que 20
let every = (elemento) => elemento <18;

console.log(numbers.every(every));