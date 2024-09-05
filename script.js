const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "Qual o seu nível de conhecimento sobre o Desmatamento?",
alternativas: [
{
texto: "Baixo",

afirmacao: "Você sabe apenas o básico sobre o Desmatamento"
},
{
texto: "Médio",

afirmacao: "Você tem um bom entendimento sobre o Desmatamento. "
},
{
texto: "Alto",

afirmacao: "Você tem um ótimo conhecimento, bem aprofundado sobre o Desmatamento"
}
]
},
{
enunciado: "1 -Indique um fenômeno geomorfológico que é diretamente aumentado pelo desmatamento.",

alternativas: 
{
texto: "a) Sedimentação",

afirmacao: " 1- a) Alternativa incorreta." 
},

texto: "b) Vulcanismo",

afirmacao: "Alternativa incorreta."
},
{
texto: "c) Erosão",
afirmacao: "Alternativa coreta!"
"Erosão é o fenômeno geomorfológico diretamente aumentado pelo desmatamento. do desmatamento remove a cobertura vegetal que protege o solo, tornando-o mais vulnerável à ação da chuva e o vento, o que intensifica os processos erosivos."
},
{
texto: "d) Tectonismo.",
afirmacao: "Alternativa incorreta. "
}
]
}
{
enunciado: "2 - Assinale a alternativa que NÃO apresenta uma causa do desmatamento."
alternativas: ["3-b)Alternativa incorreta."
{
texto: "a) Exploração de madeira."
afirmacao: "Alternativa incorreta. "
},
{
texto: "b) Produção de carvão.",

afirmacao: "2- b)Alternativa incorreta"

},
{
texto: "c) Expansão da urbanização.",
afirmacao: "Alternativa incorreta. "
},
{
texto: "d) Conservação dos rios."
afirmacao: "Alternativa correta!Conservação dos rios não apresenta uma causa do desmatamento."
}
]
}
{
enunciado: "3 - Qual impacto provocado pelo desmatamento está fortemente ligado à fauna e à flora de uma região?"
alternativas: [
{
texto: "a) Diminuição da biodiversidade.",
afirmacao: "Alternativa correta!"
"Diminuição da biodiversidade é um impacto provocado pelo desmatamento que está fortemente ligado à fauna e à flora de uma região. A destruição de habitats naturais leva à perda de espécies vegetais e animais, reduzindo a diversidade biológica."
},
{
texto: "b) Elevação do nível dos oceanos."
 "3-b)Alternativa incorreta."

},
{
texto: "c) Contaminação do nível freático.",
afirmacao: "Alternativa incorreta."

},

{
texto: "d) Expansão das nuvens de poeira.",
afirmacao: "Alternativa incorreta."
}
]
}
  

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
botaoAlternativas.addEventListener("click", () =>
respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
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
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
caixaPerguntas.textContent = "Obrigado por completar o quiz!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
    caixaPerguntas.textContent = "Obrigado por completar o quiz!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta();
