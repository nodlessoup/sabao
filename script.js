<script src="script.js"></script>

const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta1 = "Pergunta 1";
const pergunta2 = "Pergunta 2";

const perguntas = ["Pergunta 1", "Pergunta 2"];
const perguntas = [
  {
    enunciado:
 HEAD
      "Ana está explorando a floresta quando encontra uma pequena porta em uma árvore. Ao lado dela, existem duas chaves: uma dourada e uma prateada.",
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
HEAD
    alternativas: ["Isso é assustador!", "Isso é maravilhoso!"],
  texto:
}

    alternativas: [
        {
          texto:"Chave dourada: Ana pega a chave e percebe que ela possui um símbolo de sol. Ela demonstra coragem."
          afirmacao: "afirmacao"
        }
        
        {
          texto: "Chave prateada: Ana escolhe a chave com símbolo de lua. Ela demonstra cautela."
          afirmacao:"afirmacao"
        }, 
    ],
  ,
  {
    enunciado:
      "Mais adiante, Ana encontra um viajante perdido. Ele pede ajuda para encontrar o caminho de volta.",
    alternativas: [
      {
        texto: "Ajudá-lo: Ana decide ajudá-lo e os dois conseguem encontrar uma trilha segura. Ela demonstra bondade.",
        afirmacao: "afirmacao"
      }

      {
        texto: "Continuar sozinha: Ana agradece, mas prefere seguir seu próprio caminho. Ela demonstra independência.",
        afirmacao: "afirmacao"
      }
    ],
     alternativas: ["Isso é assustador!", "Isso é maravilhoso!"],
  texto:
}
    alternativas: [
        {
          texto:"Isso é assustador!"
          afirmacao: "afirmacao"
        }
        
        {
          texto: "Isso é maravilhoso!"
          afirmacao:"afirmacao"
        }, 
    ],
  ,
  {
    enunciado:
      "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
      "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
      "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
    ],
     alternativas: ["Isso é assustador!", "Isso é maravilhoso!"],
  texto:
}
    alternativas: [
        {
          texto:"Isso é assustador!"
          afirmacao: "afirmacao"
        }
        
        {
          texto: "Isso é maravilhoso!"
          afirmacao:"afirmacao"
        }, 
    ],
  ,
  {
    enunciado:
      "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
      "Criar uma imagem utilizando uma plataforma de design como o Paint.",
      "Criar uma imagem utilizando um gerador de imagem de IA.",
    ],
     alternativas: ["Isso é assustador!", "Isso é maravilhoso!"],
  texto:
}
    alternativas: [
        {
          texto:"Isso é assustador!"
          afirmacao: "afirmacao"
        }
        
        {
          texto: "Isso é maravilhoso!"
          afirmacao:"afirmacao"
        }, 
    ],
  ,
  {
    enunciado:
      "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
      "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
      "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
    ],
     alternativas: ["Isso é assustador!", "Isso é maravilhoso!"],
  texto:
}
    alternativas: [
        {
          texto:"Isso é assustador!"
          afirmacao: "afirmacao"
        }
        
        {
          texto: "Isso é maravilhoso!"
          afirmacao:"afirmacao"
        }, 
    ],
  ,
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa();
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







































