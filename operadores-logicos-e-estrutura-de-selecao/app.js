const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


console.log('Este programa é para saber se você tem mais de 18 anos e se ten CNH para poder entrar no Kart');
console.log('Alem das verificações, precisamos checar se você está lista de presença do horário');

readline.question('Qual o ano que você nasceu? ', ano => {
    if(ano > 2004){
        console.log('Você não tem 18 anos');
    }else{
        readline.question('Você tem habiilitação? (Sim/Não) ', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase()) === 'NÃO'){
                console.log('Você não tem habilitação para entrar no Kart');
            }else{
                readline.question('Qual o seu nome? ', nome => {
                    switch(nome){
                        case 'Douglas' : 
                            console.log('Bem vindo ao Kart Douglas');
                            break;
                        case 'Rafael' :
                            console.log('Bem vindo ao Kart, Rafael');
                            break;     
                        default:
                            console.log('Seu nome não foi indentificado na lista');
                    }
                })
            }
        })
    }
})