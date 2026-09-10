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
            texto: "Chave dourada: Ana pega a chave e percebe que ela possui um símbolo de sol. Ela demonstra coragem.",
            afirmacao: "demonstrou coragem"
          }, // Vírgula adicionada
          {
            texto: "Chave prateada: Ana escolhe a chave com símbolo de lua. Ela demonstra cautela.",
            afirmacao: "demonstrou cautela"
          }
        ]
    },
    {
        enunciado: "Mais adiante, Ana encontra um viajante perdido. Ele pede ajuda para encontrar o caminho de volta.",
        alternativas: [
          {
            texto: "Ajudá-lo: Ana decide ajudá-lo e os dois conseguem encontrar uma trilha segura. Ela demonstra bondade.",
            afirmacao: "demonstrou bondade"
          },
          {
            texto: "Continuar sozinha: Ana agradece, mas prefere seguir seu próprio caminho. Ela demonstra independência.",
            afirmacao: "demonstrou independência"
          }
        ]
    },
    {
        enunciado: "Ana chega a um rio. Para continuar sua jornada, precisa atravessar uma ponte velha com algumas tábuas quebradas.",
        alternativas: [
          {
            texto: "Atravessar devagar: Testa cada tábua antes de pisar para garantir a travessia com segurança.",
            afirmacao: "foi prudente"
          }, // Vírgula adicionada e texto ajustado ao tema
          {
            texto: "Procurar outro caminho: Prefere caminhar pela margem até achar um lugar mais seguro.",
            afirmacao: "evitou riscos desnecessários"
          }
        ]
    },
    {
        enunciado: "Já perto do fim da floresta, Ana encontra uma pedra brilhante com uma mensagem: 'Somente quem fez as escolhas certas encontrará o caminho de volta'. Ela precisa decidir o que fazer.",
        alternativas: [
          {
            texto: "Guardar a pedra: Ana acredita que ela poderá ser útil e a guarda consigo. Ela demonstra atenção.",
            afirmacao: "demonstrou atenção"
          },
          {
            texto: "Deixá-la para trás: Ana considera a mensagem estranha e decide continuar sem a pedra. Ela demonstra confiança.",
            afirmacao: "demonstrou confiança em si mesma"
          }
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    // Verifica se ainda existem perguntas no array
    if (atual >= perguntas.length) {
        exibeResultadoFinal();
        return;
    }
    
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; // Limpa os botões da pergunta anterior
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function() {
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function exibeResultadoFinal() {
    caixaPerguntas.textContent = "Fim da jornada!";
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "Ana completou a travessia da floresta com base nas suas decisões.";
}

mostraPergunta();