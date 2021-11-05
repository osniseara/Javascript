// importância de saber o tipo de dado
//boleanos

//conversão implícita

const numero = 456;
const numeroString = "456";

console.log (numero == numeroString);

console.log(numero + numeroString);

// conversão explícita
// Number() quando queremos transformar uma stringa em um numero
// String() quando queremos transformar um numero em uma String

console.log(numero + Number(numeroString));