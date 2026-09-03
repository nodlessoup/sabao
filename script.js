const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

cconst perguntas = [
    {
        enunciado: "Ana está explorando a floresta quando encontra uma pequena porta em uma árvore. Ao lado dela, existem duas chaves: uma dourada e uma prateada.",
        alternativas: [
          {
            texto:  "Chave dourada: Ana pega a chave e percebe que ela possui um símbolo de sol. Ela demonstra coragem.",
            afirmacao: "afirmação"
          }
          {
            texto: "Chave prateada: Ana escolhe a chave com símbolo de lua. Ela demonstra cautela.",
            afirmacao: "afirmação"
          }
        
            
        ]
    },
    {
        enunciado: "Mais adiante, Ana encontra um viajante perdido. Ele pede ajuda para encontrar o caminho de volta.",
        alternativas: [
              {
            texto: "Ajudá-lo: Ana decide ajudá-lo e os dois conseguem encontrar uma trilha segura. Ela demonstra bondade.",
            afirmacao: "afirmação"
              },
            {
              texto:"Continuar sozinha: Ana agradece, mas prefere seguir seu próprio caminho. Ela demonstra independência.",
              afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ana chega a um rio. Para continuar sua jornada, precisa atravessar uma ponte velha. Algumas tábuas estão quebradas.",
        alternativas: [
          {
            texto:"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            afirmacao: "afirmção"
          }
            {
              texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
              afirmacao: "afirmação"
            }
           
        ]
    },
    
    {
        enunciado: "Já perto do fim da floresta, Ana encontra uma pedra brilhante com uma mensagem: 'Somente quem fez as escolhas certas encontrará o caminho de volta'.Ela precisa decidir o que fazer com a pedra.",
        alternativas: [
          {
            texto:  "Guardar a pedra: Ana acredita que ela poderá ser útil e a guarda consigo. Ela demonstra atenção.",
            afirmacao: "afirmação"
          }
           {
            texto: "Deixá-la para trás: Ana considera a mensagem estranha e decide continuar sem a pedra. Ela demonstra confiança em si mesma.",
            afirmacao: "afirmação"
           }
            
        ]
    },
  ];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
  }
  
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", function(){
    atual++;
    mostraPergunta();
  })
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

mostraPergunta();







































