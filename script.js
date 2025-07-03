const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que começa a jogar ULTRAKILL você já consegue o Revolver, no qual é o tiro padrão, e enquato joga você desbloqueia suas variantes. Após conseguir a Marksman, você tem anseio de pegar mais armas?",
        alternativas: [
            {
                texto: "É OBVIO!!!",
                afirmacao: "Desde do começo, você tem um grande anseio por mais e mais."
            },
            {
                texto: "Por mim já é o suficiente.",
                afirmacao: "Você provavelmente é um jogador casual, ou apenas prefere armas simples."
            }
        ]
    },
    {
        enunciado: "Após o início, você descobre alguns segredos no jogo, como Soul Orbs escondidos ou challenges. Quando nota que tem 5 segredos por fase e um desafio, você tenta pegar todos e fazer o desafio?",
        alternativas: [
            {
                texto: "Não me importo com as coisas escondidas ou os challenges, apenas quero tiroteio frenétio!",
                afirmacao: "Provavelmente gosta de FPS em sua essência, ou gosta de exibir sua mira pros outros."
            },
            {
                texto: "Eu vou tentar pegar tudo, ir atrás de qualquer coisa que o jogo pode me oferecer.",
                afirmacao: "Alguém atencioso e que merece muito respeito, extraindo ao maximo o que esse lindo jogo pode oferecer."
            }
        ]
    },
    {
        enunciado: "Conforme você se desenvolve no jogo, você acaba desbloquiando as variantes normais de cada arma, sendo em especifico armas explosivas. Qual sua opinião sobre as armas explosivas?",
        alternativas: [
            {
                texto: "Armas de Explosão são mais empolgantes e legais de usar, fazendo um enorme estrago.",
                afirmacao: "Gosta de destruição e fogo, aniquilando varios inimigos fracos com apenas um tiro, mas sofre para matar alguns bosses."
            },
            {
                texto: "Armas de Explosão são pouco precisas e não deixam ter o foco nescessario para acertar tiro precisos.",
                afirmacao: "Se contenta com o básico e simples, buscando a precisão em tiros acertivos, provavelmente tem problemas em lidar com grandes quantidades de inimigos."
            }
        ]
    },
    {
        enunciado: "Essa é rápida, quando se enfrenta um boss, qual metódo você usa?",
        alternativas: [
            {
                texto: "Busco ficar perto do boss, usando principalmente escopetas e revolvers, focando nos parrys corpo a corpo",
                afirmacao: "Você dominou muitos aspectos do jogo, sabendo a hora de dar parry e como desviar com eficiência de certos ataques."
            },
            {
                texto: "Busco ficar longe do boss, usando Rocket Lauchers e Marksman para dar dano a distância, dando parry em projeteis e fugindo pra longe dele.",
                afirmacao: "Você joga mais calmo, ou provavelmente não dominou tudo no jogo, pelo menos acerta os parrys em projeteis, já é um bom começo, ou avanço :P"
            }
        ]
    },
    {
        enunciado: "Ansioso pra layer 8?",
        alternativas: [
            {
                texto: "SIM!!!",
                afirmacao: "É um grande fã de ULTRAKILL."
            },
            {
                texto: "Não muito.",
                afirmacao: "Porém, acho que precisa ver um pouco mais desse jogo lindo."
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
    caixaPerguntas.textContent = "V1 diz...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
