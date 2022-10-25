/* Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, 
dentro da função, faça a soma das duas entradas e imprima o resultado. 
Invoque a função e imprima no console o resultado. */

const questA = (num1, num2) => {
    const soma = num1 + num2;
    console.log(`A soma de ${num1} + ${num2} = ${soma}`);
}

questA(2,3);

/* b) Uma função que recebe 2 números e 
imprime um booleano que informa se o primeiro número é maior ou igual ao segundo. */

const questB = (num1, num2) => {
    const maiorIgual= num1 >= num2;
    console.log(`Primeiro numero: ${num1}, segundo numero: ${num2}`);
    console.log(`O primeiro numero e maior ou igual ao segundo ? ${maiorIgual} `); 
    
}

questB(2,5);

/* c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não. */

const questC = (num1) => {
    const verif = num1 % 2 ;
    const par = verif < 1 ;
    console.log (`O numero informado (${num1}) e par ? ${par}`);
}
questC (4);

/* d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS. */

const questD = (num1) => {
    const inss = 0.10
    const desc = num1 * inss
    console.log(`Seu salario (R$${num1}) com desconto = R$${desc}`);
    
}

questD(1250);