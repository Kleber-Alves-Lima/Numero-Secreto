let listaDeNumerosSorteados= [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio(); // Variavel recebendo o valor de uma função
let tentativa = 1;

//Criando uma função pra alterar o texto no momento que esta função for chamada / executada

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
        {rate : 1.2});
    }
//Chamando / executando a função
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto!!!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');
}
exibirMensagemInicial();

//Chamando uma função criada no HTML e atruindo valor a ela .
function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavra = tentativa > 1 ? 'tentativas' : 'tentativa';
    let mensagemtentativa = `Parabéns você acertou o número secreto com  ${tentativa} ${palavra}`;

    if (numeroSecreto == chute) {
        document.getElementById('chutar').setAttribute('disabled','disbled');
        exibirTextoNaTela('h1', 'Acertou!!!');
        exibirTextoNaTela('p', mensagemtentativa);
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita o Botão Novo Jogo
        document.onclick.setAttribute('disabled',true);
    } else { 
        if (chute > numeroSecreto) { 
            exibirTextoNaTela('p','O número secreto e menor !');
        }   else {
            exibirTextoNaTela('p','O número secreto é maior');
        }
        limparCampo();
        }
        tentativa++;

}

//Criando uma função de número aleatório e atribuindo o núremo aleatório como valor da função com o comando (return) para que a função toda vez que for chamada ela retorne o valor nro secreto. 
function limparCampo() {
    chute = document.querySelector('input');
    chute.value='';
}

function gerarNumeroAleatorio() {
   let numeroescolhido = parseInt(Math.random() * numeroLimite + 1 );
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if (quantidadeDeElementosNaLista== numeroLimite) {
    listaDeNumerosSorteados=[];
   }
   if (listaDeNumerosSorteados.includes(numeroescolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroescolhido);
    console.log(listaDeNumerosSorteados);
    return numeroescolhido;
   }

    return 
}

function reiniciarJogo() { 
    document.getElementById('chutar').removeAttribute('disabled','true'); // Habilita o Botão Novo Jogo
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa= 1 ;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true); // Desabilita o Botão Novo Jogo
    document.onclick.setAttribute('disabled',false);

}

while (chute != numeroSecreto) {
       chute = prompt('Escolha um Número entre 1 e 10');
    if (chute==numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
                alert(`O número secreto é menor que  ${chute} tente novamente`);
            } else {
                alert(`O número secreto é maior que  ${chute} tente novamente`);
         }
         //tentativas=tentavas+1;
         tentativas++
    }
}

if (tentativas>1){
    alert(`Parabéns você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Parabéns você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
