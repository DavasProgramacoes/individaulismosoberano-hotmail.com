const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você encontra Fausto silva em uma cafeteria, o que você faz?",
        alternativas: [
            {
                texto: "Diz oi",
                afirmacao: "Fausto Retribui a atitude lhe dizendo um oi acalorado, você se enche de tesão e se pergunta se achou o homen da sua vida."
            },
            {
                texto: "Lasca um beijão de Lingua",
                afirmacao: "Fausto Silva Parece um pouco envergonhado com a situação,mas não encomodado o suficiente para tirar a mão da sua coxa. " ,
            }
        ]
    },
    {
        enunciado: "Fausto Parece reciproco com sua atitude ",
        alternativas: [
            {
                texto: "chamar ele para sair",
                afirmacao: "Fausto aceita na hora, Vocês se encontram ali na cafeteria, Você pediu um ovo cuzido e Fausto pediu o mesmo, conversa vai, conversa vem e Fauto disse 'precisamos apimentar a situação' e Vocês se dirigem ao motel local"
            },
            {
                texto: "levar ele para o motel",
                afirmacao: "Só se for já seu safado, e vocês se dirigem ao motel"
            }
        ]
    },
    {
        enunciado: "após seu encontro inesquecivel Fausto Lhe faz uma pergunta 'e se o Galvão Bueno descobrir?'",
        alternativas: [
            {
                texto: "Convida ele pro trisal",
                afirmacao: "Galvão aparece no motel junto com Willan Bonner e pega vocês no flagra, e você convida eles para um menage
            },
            {
                texto: "ele nunca saberá",
                afirmacao: "Você manteve segredo sobre sua relação com fausto mas Galvão reconheceu o cheiro da calcinha de Fausto pois estava com Willian Bonner no Quarto ao lado"
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: "",
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
