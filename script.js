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
                texto: "Ficar em casa",
                afirmacao: "Quis saber como usar IA no seu dia a dia.",
                ponto: 1
            }
        ]
    },
    {
        enunciado: "Um viadinho ali...",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis.",
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
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                ponto: 1
            }
        ]
    },
    {
        enunciado: "Vou atropela...",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes.",
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
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final.",
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
    videoFinal();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua historia é: ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    videoFinal();
}
function videoFinal(){
    if (pontos == 10){
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
    <source src="videoplayback.mp4" type="video/mp4">
  </video>
`;
    }
}
function limpaCorpo(){
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
    document.body.style.backgroundColor = 'black';
}
function copoDe5cm(){
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.left = '0';
    document.body.style.width = '100vw';
    document.body.style.height = '100vh';
    document.body.style.objectFit = 'cover';
    document.body.style.zIndex = '9999';
    document.body.style.border = 'none';
}
mostraPergunta();
