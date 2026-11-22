let questions = [
    {
        question: "O que significa o conceito de Multimédia?",
        options: [
            "Utilização exclusiva de texto digital",
            "Combinação de diferentes tipos de conteúdos digitais",
            "Criação exclusiva de imagens",
            "Utilização apenas de som e vídeo",
        ],
        answer: 1,
        explanation: "A Multimédia combina diferentes elementos, como texto, imagem, áudio, vídeo e animação.",
    },
    {
        question: "Qual destes formatos é normalmente utilizado para imagens com transparência?",
        options: ["JPEG", "MP3", "PNG", "WAV"],
        answer: 2,
        explanation: "O formato PNG suporta transparência através do canal alfa.",
    },
    {
        question: "O que representa a resolução de uma imagem digital?",
        options: [
            "A quantidade de píxeis que a compõem",
            "O tamanho do ficheiro em megabytes",
            "A duração da imagem",
            "O número de cores do monitor",
        ],
        answer: 0,
        explanation: "A resolução representa a quantidade de píxeis de uma imagem, normalmente indicada pela sua largura e altura.",
    },
    {
        question: "Qual é a principal característica do formato JPEG?",
        options: [
            "Suporta exclusivamente animações",
            "É utilizado para ficheiros de áudio",
            "Não permite compressão",
            "Utiliza compressão com perda de informação",
        ],
        answer: 3,
        explanation: "O JPEG utiliza compressão com perda de informação, reduzindo o tamanho dos ficheiros de imagem.",
    },
    {
        question: "Qual destes programas é utilizado para edição de vídeo?",
        options: ["Adobe Premiere Pro", "Microsoft Excel", "Notepad", "Windows Calculator"],
        answer: 0,
        explanation: "O Adobe Premiere Pro é um software de edição e montagem de vídeo.",
    },
    {
        question: "O que é um píxel?",
        options: [
            "Um tipo de ficheiro de áudio",
            "A menor unidade de uma imagem digital rasterizada",
            "Um programa de edição",
            "Uma técnica de compressão de vídeo",
        ],
        answer: 1,
        explanation: "Um píxel é a menor unidade individual de uma imagem digital rasterizada.",
    },
    {
        question: "Qual é a função de um codec?",
        options: [
            "Aumentar o brilho de uma imagem",
            "Criar apresentações de diapositivos",
            "Codificar e descodificar dados multimédia",
            "Alterar a resolução de um monitor",
        ],
        answer: 2,
        explanation: "Um codec permite codificar e descodificar conteúdos digitais, como áudio e vídeo.",
    },
    {
        question: "Qual destes formatos é utilizado para ficheiros de áudio?",
        options: ["SVG", "MP3", "PNG", "HTML"],
        answer: 1,
        explanation: "MP3 é um formato de áudio digital que utiliza compressão com perda.",
    },
    {
        question: "O que caracteriza uma imagem vetorial?",
        options: [
            "É constituída exclusivamente por píxeis",
            "Não pode ser redimensionada",
            "Só pode ser utilizada em fotografias",
            "É construída através de formas e equações matemáticas",
        ],
        answer: 3,
        explanation: "As imagens vetoriais são definidas através de elementos geométricos e fórmulas matemáticas.",
    },
    {
        question: "Qual é a principal finalidade da animação digital?",
        options: [
            "Criar a ilusão de movimento através de imagens sucessivas",
            "Reduzir o tamanho de documentos de texto",
            "Aumentar a resolução de fotografias",
            "Converter ficheiros de áudio em texto",
        ],
        answer: 0,
        explanation: "A animação cria a sensação de movimento através da apresentação sequencial de imagens ou estados visuais.",
    },
    {
        question: "O que significa FPS na produção de vídeo?",
        options: ["File Processing System", "Final Picture Size", "Frames Per Second", "Format Pixel Standard"],
        answer: 2,
        explanation: "FPS significa Frames Per Second, ou seja, o número de fotogramas apresentados por segundo.",
    },
    {
        question: "Qual é a função principal do HTML numa aplicação web?",
        options: [
            "Editar ficheiros de áudio",
            "Definir a estrutura e o conteúdo da página",
            "Criar automaticamente animações 3D",
            "Comprimir imagens digitais",
        ],
        answer: 1,
        explanation: "HTML é uma linguagem de marcação utilizada para estruturar os elementos e conteúdos de uma página web.",
    },
];

const wikiTerms = [
    { term: "Píxel", category: "Imagem", definition: "Menor unidade de uma imagem digital rasterizada. Cada píxel pode guardar informação de cor e, em alguns formatos, transparência." },
    { term: "RGB", category: "Imagem", definition: "Modelo de cores aditivo baseado nas componentes Vermelho, Verde e Azul." },
    { term: "PNG", category: "Imagem", definition: "Formato de imagem que suporta compressão sem perda e transparência através do canal alfa." },
    { term: "JPEG", category: "Imagem", definition: "Formato de imagem com compressão com perda, adequado sobretudo para fotografias." },
    { term: "Imagem vetorial", category: "Imagem", definition: "Imagem construída com formas e equações matemáticas, permitindo redimensionamento sem perda de qualidade." },
    { term: "MP3", category: "Áudio", definition: "Formato de áudio digital com compressão com perda." },
    { term: "WAV", category: "Áudio", definition: "Formato de áudio geralmente usado com pouca ou nenhuma compressão." },
    { term: "Codec", category: "Áudio", definition: "Sistema que codifica e descodifica dados digitais de áudio ou vídeo para armazenamento ou transmissão." },
    { term: "FPS", category: "Vídeo", definition: "Frames Per Second: número de fotogramas apresentados por segundo." },
    { term: "Codec de vídeo", category: "Vídeo", definition: "Algoritmo usado para comprimir e descomprimir sequências de vídeo." },
    { term: "Streaming", category: "Vídeo", definition: "Transmissão contínua de áudio ou vídeo que permite reprodução enquanto os dados são recebidos." },
    { term: "HTML", category: "Web", definition: "Linguagem de marcação usada para estruturar o conteúdo e os elementos de uma página web." },
    { term: "CSS", category: "Web", definition: "Linguagem usada para definir o aspeto visual e o layout de documentos web." },
    { term: "JavaScript", category: "Web", definition: "Linguagem de programação usada para adicionar comportamento interativo a páginas web." },
];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;

const quizIntro = document.getElementById("quiz-intro");
const quizContent = document.getElementById("quiz-content");
const quizResults = document.getElementById("quiz-results");
const startButton = document.getElementById("start-quiz");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-quiz");
const questionText = document.getElementById("question-text");
const questionNumber = document.getElementById("question-number");
const questionCounter = document.getElementById("question-counter");
const optionsContainer = document.getElementById("options");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const feedback = document.getElementById("feedback");

async function loadQuestions() {
    try {
        const response = await fetch("/api/questions");
        if (response.ok) {
            const serverQuestions = await response.json();
            if (Array.isArray(serverQuestions) && serverQuestions.length) {
                questions = serverQuestions;
            }
        }
    } catch {
        // The bundled questions keep the page usable without a Python server.
    }

    document.querySelector(".widget-tag").textContent = `${questions.length} perguntas`;
    document.querySelector(".quiz-info strong").textContent = questions.length;
}

startButton.addEventListener("click", () => {
    if (!questions.length) return;
    quizIntro.classList.add("hidden");
    quizContent.classList.remove("hidden");
    quizResults.classList.add("hidden");
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    answered = false;
    loadQuestion();
});

function loadQuestion() {
    selectedAnswer = null;
    answered = false;
    const q = questions[currentQuestion];

    questionText.textContent = q.question;
    questionNumber.textContent = `PERGUNTA ${String(currentQuestion + 1).padStart(2, "0")}`;
    questionCounter.textContent = `Pergunta ${currentQuestion + 1} / ${questions.length}`;

    const progress = (currentQuestion / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;

    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    feedback.className = "feedback";
    nextButton.disabled = true;
    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "Ver resultados →"
            : "Próxima pergunta →";

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const label = document.createElement("span");
        label.textContent = option;
        button.appendChild(letter);
        button.appendChild(label);
        button.addEventListener("click", () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(index) {
    if (answered) return;
    selectedAnswer = index;
    answered = true;

    const q = questions[currentQuestion];
    const optionButtons = optionsContainer.querySelectorAll(".option");

    optionButtons.forEach((button, i) => {
        button.disabled = true;
        if (i === q.answer) button.classList.add("correct");
        if (i === selectedAnswer && selectedAnswer !== q.answer) button.classList.add("wrong");
        if (i === selectedAnswer) button.classList.add("selected");
    });

    if (selectedAnswer === q.answer) {
        score++;
        feedback.textContent = `✓ Resposta correta! ${q.explanation}`;
        feedback.classList.add("correct-text");
    } else {
        feedback.textContent = `✕ Resposta incorreta. ${q.explanation}`;
        feedback.classList.add("wrong-text");
    }
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    if (!answered) return;
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    quizContent.classList.add("hidden");
    quizResults.classList.remove("hidden");
    progressFill.style.width = "100%";
    progressText.textContent = "100%";

    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById("final-score").textContent = score;
    document.getElementById("correct-count").textContent = score;
    document.getElementById("wrong-count").textContent = questions.length - score;
    document.getElementById("percentage").textContent = `${percentage}%`;

    let title;
    let description;
    let icon;
    if (percentage >= 90) {
        title = "Excelente trabalho!";
        description = "Demonstraste um excelente domínio dos conceitos de Multimédia. Continua assim!";
        icon = "🏆";
    } else if (percentage >= 70) {
        title = "Muito bom!";
        description = "Tens bons conhecimentos de Multimédia. Estás no bom caminho!";
        icon = "🌟";
    } else if (percentage >= 50) {
        title = "Bom esforço!";
        description = "Já tens algumas bases, mas ainda podes melhorar os teus conhecimentos.";
        icon = "📚";
    } else {
        title = "Continua a aprender!";
        description = "Não desistas! Aproveita para rever os conteúdos e tenta novamente.";
        icon = "💡";
    }

    document.getElementById("result-title").textContent = title;
    document.getElementById("result-description").textContent = description;
    document.getElementById("result-icon").textContent = icon;
}

restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    answered = false;
    quizResults.classList.add("hidden");
    quizIntro.classList.remove("hidden");
    quizContent.classList.add("hidden");
    progressFill.style.width = "0%";
    progressText.textContent = "0%";
});

// Wiki
const wikiSearch = document.getElementById("wiki-search");
const wikiList = document.getElementById("wiki-list");
const wikiCount = document.getElementById("wiki-count");
const categoryButtons = document.querySelectorAll(".category-button");
let selectedCategory = "Todos";
let wikiSearchTimer;

async function loadWiki() {
    const params = new URLSearchParams({
        category: selectedCategory,
        q: wikiSearch.value.trim(),
    });
    try {
        const response = await fetch(`/api/wiki?${params}`);
        if (response.ok) {
            const serverTerms = await response.json();
            if (Array.isArray(serverTerms)) {
                renderWiki(serverTerms);
                return;
            }
        }
    } catch {
        // Fall back to the bundled glossary when the Python API is unavailable.
    }

    const query = normalizeWikiText(wikiSearch.value.trim());
    const terms = wikiTerms.filter((item) => {
        const matchesCategory =
            selectedCategory === "Todos" || item.category === selectedCategory;
        const matchesQuery =
            !query ||
            normalizeWikiText(item.term).includes(query) ||
            normalizeWikiText(item.definition).includes(query);
        return matchesCategory && matchesQuery;
    });
    renderWiki(terms);
}

function normalizeWikiText(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase();
}

function renderWiki(terms) {
    wikiList.innerHTML = "";
    terms.forEach((item) => {
        const card = document.createElement("div");
        card.className = "wiki-item";

        const button = document.createElement("button");
        button.className = "wiki-term";
        button.type = "button";
        button.setAttribute("aria-expanded", "false");

        const term = document.createElement("span");
        term.className = "wiki-term-name";
        term.textContent = item.term;

        const category = document.createElement("span");
        category.className = "wiki-term-category";
        category.textContent = item.category;

        const chevron = document.createElement("span");
        chevron.className = "wiki-term-chevron";
        chevron.setAttribute("aria-hidden", "true");
        chevron.textContent = "⌄";

        button.appendChild(term);
        button.appendChild(category);
        button.appendChild(chevron);
        button.addEventListener("click", () => {
            const isOpen = card.classList.toggle("open");
            button.setAttribute("aria-expanded", String(isOpen));
        });

        const definition = document.createElement("div");
        definition.className = "wiki-definition";

        const categoryLabel = document.createElement("span");
        categoryLabel.className = "wiki-category-label";
        categoryLabel.textContent = item.category;

        const definitionText = document.createElement("p");
        definitionText.className = "wiki-definition-text";
        definitionText.textContent = item.definition;
        definition.appendChild(categoryLabel);
        definition.appendChild(definitionText);

        card.appendChild(button);
        card.appendChild(definition);
        wikiList.appendChild(card);
    });
    wikiCount.textContent =
        terms.length === 1 ? "1 conceito encontrado" : `${terms.length} conceitos encontrados`;
}

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        categoryButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        selectedCategory = button.dataset.category;
        loadWiki();
    });
});

wikiSearch.addEventListener("input", () => {
    clearTimeout(wikiSearchTimer);
    wikiSearchTimer = setTimeout(loadWiki, 200);
});

// Pixel calculator
const widthInput = document.getElementById("image-width");
const heightInput = document.getElementById("image-height");
const calculateButton = document.getElementById("calculate-button");
const calculatorError = document.getElementById("calculator-error");

async function calculateImage() {
    calculatorError.textContent = "";
    calculatorError.classList.remove("wrong-text");

    const width = Number(widthInput.value);
    const height = Number(heightInput.value);
    if (
        !Number.isInteger(width) ||
        !Number.isInteger(height) ||
        width < 1 ||
        height < 1 ||
        width > 100000 ||
        height > 100000
    ) {
        calculatorError.textContent =
            "A largura e a altura devem ser números inteiros entre 1 e 100000.";
        calculatorError.classList.add("wrong-text");
        return;
    }

    let result;
    try {
        const response = await fetch("/api/calculate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ width, height }),
        });
        if (response.ok) {
            result = await response.json();
        }
    } catch {
        // Use the same calculation in the browser for standalone index.html.
    }

    if (!result) {
        let a = width;
        let b = height;
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        const totalPixels = width * height;
        result = {
            resolution: `${width} × ${height}`,
            total_pixels: totalPixels,
            megapixels: Math.round((totalPixels / 1000000) * 100) / 100,
            ratio: `${width / a}:${height / a}`,
        };
    }

    document.getElementById("resolution-result").textContent = result.resolution;
    document.getElementById("pixel-result").textContent =
        result.total_pixels.toLocaleString("pt-PT");
    document.getElementById("megapixel-result").textContent =
        `${result.megapixels.toFixed(2).replace(".", ",")} MP`;
    document.getElementById("ratio-result").textContent = result.ratio;

    const [ratioWidth, ratioHeight] = result.ratio.split(":").map(Number);
    const shape = document.getElementById("ratio-shape");
    const previewSize = 85;
    if (ratioWidth >= ratioHeight) {
        shape.style.width = `${previewSize}px`;
        shape.style.height = `${previewSize * (ratioHeight / ratioWidth)}px`;
    } else {
        shape.style.height = `${previewSize}px`;
        shape.style.width = `${previewSize * (ratioWidth / ratioHeight)}px`;
    }
}

calculateButton.addEventListener("click", calculateImage);
widthInput.addEventListener("change", calculateImage);
heightInput.addEventListener("change", calculateImage);

loadQuestions();
loadWiki();
