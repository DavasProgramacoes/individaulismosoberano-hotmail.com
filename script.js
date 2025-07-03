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
                afirmacao: "Fausto calorosamente diz oi,"
            },
            {
                texto: "",
                afirmacao: "" ,
            }
        ]
    },
    {
        enunciado: "então você diz:",
        alternativas: [
            {
                texto: "como você está belo hoje",
                afirmacao: "ele aceita seu elogio e diz 'muito obrigado Senpai UwU' você também está otimo, "
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Então Fausto disse: aceitas tomar uma xicara de ovo?",
        alternativas: [
            {
                texto: "com todo Prazer",
                afirmacao: "então ele o convida gentilmente para tomar uma xicara de ovo, ",
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "enquanto estão na cafeteria ele solta a seguinte frase : 'você é tão bonito que quase faz meu coração parar(literalmente)'",
        alternativas: [
            {
                texto: "me sinto igualmente",
                afirmacao: "e enquanto conversam, você começa a se sentir diferente, com se estivesse queimando por dentro,"
            },
            {
                texto: "",
                afirmacao: "",
            }
        ]
    },
    {
        enunciado: "'gostaria de ter te conhecido antes gostaria de ir à algum lugar em especial ?'",
        alternativas: [
            {
                texto: "eu adoraria",
                afirmacao: "logo depois Fausto Silva te leva passear no projac da globo, "
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "enquanto passeavam ele diz: 'parece que você tá pegando fogo bixo'",
        alternativas: [
            {
                texto: "'chama bombeiro lá'que tô pegando fogo ",
                afirmacao: "e enquanto passeavam Fausto diz que 'parece que você tá pegando fogo bixo' e fico ainda mais apaixonado pelos seus jargões profundos e sentimentais,"
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "então ele diz: 'sei que não parece o melhor momento mas....eu tenho um ex.....'",
        alternativas: [
            {
                texto: "Não importa desde que fiquemos juntos <3",
                afirmacao: "então você descobre que o Fausto possui um ex mas não dá muita importancia afinal ele é o grande amor da sua vida,"
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
      {
        enunciado: "ele é meio possessivo mas você deve conhce-lo a esse ponto...",
        alternativas: [
            {
                texto: "quem era o seu antigo amor?",
                afirmacao: "mas mesmo assim você questiona que era o antigo amor da vida de Fausto,"
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
      {
        enunciado: "Galvâo Bueno....ele me traiu com o Willian Bonner e tudo esteve acabado desde então",
        alternativas: [
            {
                texto: "Ele não te merecia, você é melhor que isso",
                afirmacao: "e então descobre que o antigo amor da vida de Fausto era Galvão Bueno e de sua traição com Willian Bonner e diz a Fausto que ele não merecia tanto sofrimento,"
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
     {
        enunciado: "'Fico feliz por me apoiar mas... já está anoitecendo, você quer ir à algum lugar para passar esta linda noite?'",
        alternativas: [
            {
                texto: "aonde você quiser",
                afirmacao: "Fausto aceita seu apoio e o convida para passar a noite em um lugar especial,"
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
     {
        enunciado: "vocês se dirigem ao motel e fausto diz:'este é o melhor motel da cidade com direito a pole dance,strip tease e folhinha verde'",
        alternativas: [
            {
                texto: "Vamos entrando",
                afirmacao: "ao chegar ao local você descobre ser um dos melhores e mais caros moteis da cidade,"
            },
            {
                texto: "",
                afirmacao: ""
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
