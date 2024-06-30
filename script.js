const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o seu nível de conhecimento sobre o Desmatamento?",
        alternativas: [
            { texto: "Baixo", afirmacao: "Você sabe apenas o básico sobre o Desmatamento" },
            { texto: "Médio", afirmacao: "Você tem um bom entendimento sobre o Desmatamento." },
            { texto: "Alto", afirmacao: "Você tem um ótimo conhecimento, bem aprofundado sobre o Desmatamento." }
        ]
    },
    {
        enunciado: "Indique um fenômeno geomorfológico aumentado pelo desmatamento.",
        alternativas: [
            { texto: "Sedimentação", afirmacao: "Alternativa incorreta." },
            { texto: "Vulcanismo", afirmacao: "Alternativa incorreta." },
            { texto: "Erosão", afirmacao: "Alternativa correta! Erosão é diretamente aumentada pelo desmatamento." },
            { texto: "Tectonismo", afirmacao: "Alternativa incorreta." }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";
    perguntaAtual.alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por completar o quiz!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta();

