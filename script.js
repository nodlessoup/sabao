const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
enunciado: "Ana está explorando a floresta quando encontra uma pequena porta em uma árvore. Ao lado dela, existem duas chaves: uma dourada e uma prateada.",
alternativas: [
{
texto: "Pegar a chave dourada: Ana pega a chave com símbolo de sol e decide seguir em frente.",
tipo: "boa"
},
{
texto: "Pegar a chave prateada: Ana escolhe a chave com símbolo de lua e decide seguir em frente.",
tipo: "ruim"
}
]
},

{
    enunciado: "Mais adiante, Ana encontra um viajante perdido. Ele pede ajuda para encontrar o caminho de volta.",
    alternativas: [
        {
            texto: "Ajudá-lo: Ana decide ajudá-lo e os dois conseguem encontrar uma trilha segura.",
            tipo: "boa"
        },
        {
            texto: "Continuar sozinha: Ana agradece, mas prefere seguir seu próprio caminho.",
            tipo: "ruim"
        }
    ]
},

{
    enunciado: "Ana chega a um rio. Para continuar sua jornada, precisa atravessar uma ponte velha com algumas tábuas quebradas.",
    alternativas: [
        {
            texto: "Atravessar devagar: Ana testa cada tábua antes de pisar para garantir uma travessia segura.",
            tipo: "boa"
        },
        {
            texto: "Atravessar correndo: Ana decide correr pela ponte para chegar ao outro lado rapidamente.",
            tipo: "ruim"
        }
    ]
},

{
    enunciado: "Já perto do fim da floresta, Ana encontra uma pedra brilhante com uma mensagem: 'Somente quem fez as escolhas certas encontrará o caminho de volta'. Ela precisa decidir o que fazer.",
    alternativas: [
        {
            texto: "Guardar a pedra: Ana acredita que ela poderá ser útil e a guarda consigo.",
            tipo: "boa"
        },
        {
            texto: "Deixá-la para trás: Ana considera a mensagem estranha e decide continuar sem a pedra.",
            tipo: "ruim"
        }
    ]
}


];

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

caixaAlternativas.textContent = "";

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


}

mostraPergunta();