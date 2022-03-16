const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const minhaPrimeiraContanteString = 'Minha primeira constante' ;
console.log(minhaPrimeiraContanteString);

let leituraDeCampo;
readline.question('Por favor, digite alguma coisa:', input => {
    leituraDeCampo = input;
    console.log(`O usuário digitou ${leituraDeCampo}`);
});
