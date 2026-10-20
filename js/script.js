import {aleatorio} from ‘./aleatorio.js’;
import {perguntas} from ‘./perguntas.js;
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn")

let atual = 0;
let perguntaAtual;

let escolhasBoas = 0;
let escolhasRuins = 0;

function mostraPergunta() {

if (atual >= perguntas.length) {
    exibeResultadoFinal();
    return;
}

perguntaAtual = perguntas[atual];

caixaPerguntas.textContent = perguntaAtual.enunciado;

caixaAlternativas.textContent = "";

mostraAlternativas();


}

function mostraAlternativas() {

for (const alternativa of perguntaAtual.alternativas) {

    const botaoAlternativas = document.createElement("button");

    botaoAlternativas.textContent = alternativa.texto;

    botaoAlternativas.addEventListener("click", () => {
        respostaSelecionada(alternativa);
    });

    caixaAlternativas.appendChild(botaoAlternativas);
}


}

function respostaSelecionada(opcaoSelecionada) {

if (opcaoSelecionada.tipo === "boa") {

    escolhasBoas++;

} else {

    escolhasRuins++;
}

atual++;

mostraPergunta();


}

function exibeResultadoFinal() {
caixaPerguntas.textContent = "Fim da jornada!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
caixaResultado.classList.add("mostrar"); botaoJogarNovamente.addEventListener("click", jogaNovamente);
/*
if (escolhasBoas >= 3) {

    textoResultado.textContent =
        "FINAL BOM 🌟\n\n" +
        "Ana fez boas escolhas durante sua jornada. " +
        "A pedra brilhante começa a iluminar o caminho e ela finalmente encontra " +
        "a saída da floresta. Ao chegar em casa, Ana percebe que suas boas escolhas " +
        "foram fundamentais para conseguir voltar em segurança.";

} else {

    textoResultado.textContent =
        "FINAL RUIM 🌑\n\n" +
        "Ana percebe tarde demais que algumas de suas escolhas trouxeram consequências. " +
        "A floresta fica cada vez mais escura e o caminho de volta desaparece. " +
        "Ela terá que encontrar outra maneira de sair da floresta.";
}
*/

}
function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}
mostraPergunta();