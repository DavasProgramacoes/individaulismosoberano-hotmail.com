const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
let pontos = 0;
const perguntas = [
    {
        enunciado: "Eu vou...",
        alternativas: [
            {
                texto: "Dirigir depois de beber",
                afirmacao: "Eu vou dirigir de pois de beber ",
                ponto: 2
            },
            {
                texto: "When the light is running low",
                afirmacao: "When the light is running low",
                ponto: 1
            }
        ]
    },
    {
        enunciado: "Um viadinho ali...",
        alternativas: [
            {
                texto: "And the shadows start to grow",
                afirmacao: "And the shadows start to grow",
                ponto: 1
            },
            {
                texto: "Só sabe correr.",
                afirmacao: "Um veadinho ali, só sabe correr.",
                ponto: 2
            }
        ]
    },
    {
        enunciado: "Se multar...",
        alternativas: [
            {
                texto: "Não vou me importar",
                afirmacao: "Se multar, não vou me importar.",
                ponto: 2
            },
            {
                texto: "And the places that you know",
                afirmacao: "And the places that you know",
                ponto: 1
            }
        ]
    },
    {
        enunciado: "Vou atropela...",
        alternativas: [
            {
                texto: "Seem like fantasy",
                afirmacao: "Seem like fantasy",
                ponto: 1
            },
            {
                texto: "aaaaaaaaaaar.",
                afirmacao: "Vou atropelaraaaaaaaaaaar.",
                ponto: 2
            }
        ]
    },
    {
        enunciado: "O meu tanque tá..",
        alternativas: [
            {
                texto: "Lotado mermão",
                afirmacao: "O meu tanque tá lotado mermão.",
                ponto: 2
            },
            {
                texto: "There's a light inside your soul",
                afirmacao: "There's a light inside your soul",
                ponto: 1
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
    historiaFinal += opcaoSelecionada.afirmacao +"\n";
    pontos += opcaoSelecionada.ponto || 0; // se não tiver pontuação, soma 0
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua historia é: ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    videoFinal();
}
function videoFinal(){
    if(pontos == 10){
        limpaCorpo();
        document.body.innerHTML = `  
        <video autoplay muted loop
        style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: 9999;
        border: none;">
    <source src="videoplayback.mp4" type="video/mp4"></video>`;}

    if(pontos == 5){
        limpaCorpo();
        document.body.innerHTML = `  
        <video autoplay muted loop
        style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: 9999;
        border: none;">
    <source src="videoplayback (1).mp4" type="video/mp4">
  </video>
`;}
    if (pontos != 10 && pontos != 5){
        limpaCorpo();
        document.body.innerHTML = `  
        <video autoplay muted loop
        style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: 9999;
        border: none;">
    <source src="videoplayback (2).mp4" type="video/mp4">
  </video>
`;}
}
function limpaCorpo(){
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
    document.body.style.backgroundColor = 'black';
}

mostraPergunta();
