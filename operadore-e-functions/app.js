const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const validarNumero = (num) => {
    try {
        return Number.parseFloat(num)
    }catch{
        console.log('O número informado não é válido')
    }
}

const validarOperador = (operador) => {
    switch(operador) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
        default: {
            console.log('Operador informado não é válido');
            return null;
    }
}

readLine.question('Digite o primeiro número: ', (num1) => {
    const numValidado1 = validarNumero(num1);

    if(numValidado1){
        readLine.question('Digite o segundo numero', num2 =>{
            const numValidado2 = validarNumero(num2);

            if(numValidado2){
                readLine.question('Informe o operador: ', (operador) => {
                    const operValidado = validarOperador(operador)
                    if(operValidado);
                        switch(operValidado) {
                            case '+': console.log(``O operador adicionado é a adição ou "+". O resultado dessa operação $[numValidado1] '+' $[numValidado2] é $[numValidado1 + $[numValidado2]] `)
                            
                        }
                }) 
            }
        })
    }
} )