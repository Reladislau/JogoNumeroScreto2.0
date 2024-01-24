let ListaDeNumerosSorteados = []; 
let numeroAleatorio = GerarNumeroAleatorio();
let tentativas = 1;
let NumeroLimite = 10;


// Função com parâmetros
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Famale", {rate:1.2});
} 

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();



// Função sem parâmetros
function verificarChute(){
    let chute = document.querySelector("input").value
    if(chute == numeroAleatorio){
        exibirTextoNaTela("h1", "Parabéns, você acertou!");
        let palavaTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagem = `você descobriu o numero secreto com ${tentativas} ${palavaTentativa}`;
        exibirTextoNaTela("p", mensagem);
        document.getElementById("reiniciar").removeAttribute("disabled");
        
    } else{
        if(chute < numeroAleatorio){
            exibirTextoNaTela("p", "Você errou, o número é maior");
        } else if (chute > numeroAleatorio){
            exibirTextoNaTela("p", "Você errou, o número é menor");
        }
    }
    
    limparCampo();

    tentativas = tentativas + 1;

}

function reiniciarJogo(){
    tentativas = 0;
    numeroAleatorio = GerarNumeroAleatorio ();
    exibirMensagemInicial();
    limparCampo();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

//Função com retorno
function GerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNaLista = ListaDeNumerosSorteados.length; 

    if (quantidadeDeElementosNaLista === 10){
        ListaDeNumerosSorteados = [];
    }


    if(ListaDeNumerosSorteados.includes(numeroEscolhido)){
        return GerarNumeroAleatorio();
    } else{
        ListaDeNumerosSorteados.push(numeroEscolhido);
        console.log(ListaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

console.log(`O número aleatório é ${numeroAleatorio}`);
verificarChute();

reiniciarJogo();

