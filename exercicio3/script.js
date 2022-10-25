/* a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e 
retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão). */

const funcSoma = (num1, num2) => {
     const soma = num1 + num2;
    /* console.log(`${num1} + ${num2} = ${soma}`) */
    return `${num1} + ${num2} = ${soma}`

}

const funcSub = (num1, num2) => {
    const sub = num1 - num2;
    //console.log(`${num1} - ${num2} = ${sub}`);
    return `${num1} - ${num2} = ${sub}`;

}

const funcMult = (num1, num2) => {
    const mult = num1 * num2;
    //console.log(`${num1} * ${num2} = ${mult}`);
    return `${num1} * ${num2} = ${mult}`;
}

const funcDiv = (num1, num2) => {
    const div = num1 / num2 ;
    //console.log(`${num1} / ${num2} = ${div}`);
    return `${num1} / ${num2} = ${div}`;
}

// b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

const firstNum = 2;
const secondNum = 4;

//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

funcSoma (firstNum, secondNum);
funcSub (firstNum, secondNum);
funcMult (firstNum, secondNum);
funcDiv (firstNum, secondNum);

/* d) Por fim, crie variáveis para receber o retorno de cada uma das funções e 
imprima o resultado das operações no console. */

const opeSoma = console.log(funcSoma(firstNum, secondNum));
const opeSub = console.log(funcSub(firstNum, secondNum));
const opemult = console.log(funcSoma(firstNum, secondNum));
const opeDiv = console.log(funcDiv(firstNum, secondNum));
