
let numeroSecreto = GerarAle();
let Tentativas = 1;
function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female');
}
function ExibirMensagem(){
exibirNaTela('h1', 'Agulha no palheiro  ');
exibirNaTela('p', 'Escolha um número de 1 a 100');
}
ExibirMensagem();
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirNaTela ('h1', 'Acertou!');
        let Palavratentativa = Tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = (`Parabéns você acertou, com ${Tentativas} ${Palavratentativa}!`);
        exibirNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { if (chute > numeroSecreto) {
            exibirNaTela('p', 'O número é menor!');
        } else {
            exibirNaTela('p', 'O número é maior!');
        }
        Tentativas++;
        LimparCampo()
        }
    
}

function GerarAle(){
    return parseInt(Math.random()* 100 + 1);
}
function LimparCampo() {
chute = document.querySelector ('input');
chute.value = '';
}

function ReiniciarJogo() {
    numeroSecreto = GerarAle();
    LimparCampo();
    Tentativas = 1;
    ExibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}