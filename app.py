from math import gcd
import unicodedata

from flask import Flask, jsonify, request, send_from_directory


app = Flask(__name__, static_folder=".", template_folder=".")


QUESTIONS = [
    {
        "question": "O que significa o conceito de Multimédia?",
        "options": [
            "Utilização exclusiva de texto digital",
            "Combinação de diferentes tipos de conteúdos digitais",
            "Criação exclusiva de imagens",
            "Utilização apenas de som e vídeo",
        ],
        "answer": 1,
        "explanation": "A Multimédia combina diferentes elementos, como texto, imagem, áudio, vídeo e animação.",
    },
    {
        "question": "Qual destes formatos é normalmente utilizado para imagens com transparência?",
        "options": ["JPEG", "MP3", "PNG", "WAV"],
        "answer": 2,
        "explanation": "O formato PNG suporta transparência através do canal alfa.",
    },
    {
        "question": "O que representa a resolução de uma imagem digital?",
        "options": [
            "A quantidade de píxeis que a compõem",
            "O tamanho do ficheiro em megabytes",
            "A duração da imagem",
            "O número de cores do monitor",
        ],
        "answer": 0,
        "explanation": "A resolução representa a quantidade de píxeis de uma imagem, normalmente indicada pela sua largura e altura.",
    },
    {
        "question": "Qual é a principal característica do formato JPEG?",
        "options": [
            "Suporta exclusivamente animações",
            "É utilizado para ficheiros de áudio",
            "Não permite compressão",
            "Utiliza compressão com perda de informação",
        ],
        "answer": 3,
        "explanation": "O JPEG utiliza compressão com perda de informação, reduzindo o tamanho dos ficheiros de imagem.",
    },
    {
        "question": "Qual destes programas é utilizado para edição de vídeo?",
        "options": ["Adobe Premiere Pro", "Microsoft Excel", "Notepad", "Windows Calculator"],
        "answer": 0,
        "explanation": "O Adobe Premiere Pro é um software de edição e montagem de vídeo.",
    },
    {
        "question": "O que é um píxel?",
        "options": [
            "Um tipo de ficheiro de áudio",
            "A menor unidade de uma imagem digital rasterizada",
            "Um programa de edição",
            "Uma técnica de compressão de vídeo",
        ],
        "answer": 1,
        "explanation": "Um píxel é a menor unidade individual de uma imagem digital rasterizada.",
    },
    {
        "question": "Qual é a função de um codec?",
        "options": [
            "Aumentar o brilho de uma imagem",
            "Criar apresentações de diapositivos",
            "Codificar e descodificar dados multimédia",
            "Alterar a resolução de um monitor",
        ],
        "answer": 2,
        "explanation": "Um codec permite codificar e descodificar conteúdos digitais, como áudio e vídeo.",
    },
    {
        "question": "Qual destes formatos é utilizado para ficheiros de áudio?",
        "options": ["SVG", "MP3", "PNG", "HTML"],
        "answer": 1,
        "explanation": "MP3 é um formato de áudio digital que utiliza compressão com perda.",
    },
    {
        "question": "O que caracteriza uma imagem vetorial?",
        "options": [
            "É constituída exclusivamente por píxeis",
            "Não pode ser redimensionada",
            "Só pode ser utilizada em fotografias",
            "É construída através de formas e equações matemáticas",
        ],
        "answer": 3,
        "explanation": "As imagens vetoriais são definidas através de elementos geométricos e fórmulas matemáticas.",
    },
    {
        "question": "Qual é a principal finalidade da animação digital?",
        "options": [
            "Criar a ilusão de movimento através de imagens sucessivas",
            "Reduzir o tamanho de documentos de texto",
            "Aumentar a resolução de fotografias",
            "Converter ficheiros de áudio em texto",
        ],
        "answer": 0,
        "explanation": "A animação cria a sensação de movimento através da apresentação sequencial de imagens ou estados visuais.",
    },
    {
        "question": "O que significa FPS na produção de vídeo?",
        "options": ["File Processing System", "Final Picture Size", "Frames Per Second", "Format Pixel Standard"],
        "answer": 2,
        "explanation": "FPS significa Frames Per Second, ou seja, o número de fotogramas apresentados por segundo.",
    },
    {
        "question": "Qual é a função principal do HTML numa aplicação web?",
        "options": [
            "Editar ficheiros de áudio",
            "Definir a estrutura e o conteúdo da página",
            "Criar automaticamente animações 3D",
            "Comprimir imagens digitais",
        ],
        "answer": 1,
        "explanation": "HTML é uma linguagem de marcação utilizada para estruturar os elementos e conteúdos de uma página web.",
    },
]


WIKI_TERMS = [
    {"term": "Píxel", "category": "Imagem", "definition": "Menor unidade de uma imagem digital rasterizada. Cada píxel pode guardar informação de cor e, em alguns formatos, transparência."},
    {"term": "RGB", "category": "Imagem", "definition": "Modelo de cores aditivo baseado nas componentes Vermelho, Verde e Azul."},
    {"term": "PNG", "category": "Imagem", "definition": "Formato de imagem que suporta compressão sem perda e transparência através do canal alfa."},
    {"term": "JPEG", "category": "Imagem", "definition": "Formato de imagem com compressão com perda, adequado sobretudo para fotografias."},
    {"term": "Imagem vetorial", "category": "Imagem", "definition": "Imagem construída com formas e equações matemáticas, permitindo redimensionamento sem perda de qualidade."},
    {"term": "MP3", "category": "Áudio", "definition": "Formato de áudio digital com compressão com perda."},
    {"term": "WAV", "category": "Áudio", "definition": "Formato de áudio geralmente usado com pouca ou nenhuma compressão."},
    {"term": "Codec", "category": "Áudio", "definition": "Sistema que codifica e descodifica dados digitais de áudio ou vídeo para armazenamento ou transmissão."},
    {"term": "FPS", "category": "Vídeo", "definition": "Frames Per Second: número de fotogramas apresentados por segundo."},
    {"term": "Codec de vídeo", "category": "Vídeo", "definition": "Algoritmo usado para comprimir e descomprimir sequências de vídeo."},
    {"term": "Streaming", "category": "Vídeo", "definition": "Transmissão contínua de áudio ou vídeo que permite reprodução enquanto os dados são recebidos."},
    {"term": "HTML", "category": "Web", "definition": "Linguagem de marcação usada para estruturar o conteúdo e os elementos de uma página web."},
    {"term": "CSS", "category": "Web", "definition": "Linguagem usada para definir o aspeto visual e o layout de documentos web."},
    {"term": "JavaScript", "category": "Web", "definition": "Linguagem de programação usada para adicionar comportamento interativo a páginas web."},
]


def normalize_search_text(value: str) -> str:
    normalized = unicodedata.normalize("NFD", value.casefold())
    return "".join(
        character
        for character in normalized
        if unicodedata.category(character) != "Mn"
    )


@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


@app.route("/api/questions")
def get_questions():
    return jsonify(QUESTIONS)


@app.route("/api/wiki")
def get_wiki():
    category = request.args.get("category", "Todos")
    query = normalize_search_text(request.args.get("q", "").strip())

    terms = WIKI_TERMS
    if category != "Todos":
        terms = [item for item in terms if item["category"] == category]
    if query:
        terms = [
            item for item in terms
            if query in normalize_search_text(item["term"])
            or query in normalize_search_text(item["definition"])
        ]

    return jsonify(terms)


@app.route("/api/calculate", methods=["POST"])
def calculate():
    data = request.get_json(silent=True) or {}

    try:
        width = int(data.get("width"))
        height = int(data.get("height"))
    except (TypeError, ValueError):
        return jsonify({"error": "Introduz valores numéricos válidos."}), 400

    if width < 1 or height < 1 or width > 100000 or height > 100000:
        return jsonify({"error": "A largura e a altura devem estar entre 1 e 100000 píxeis."}), 400

    divisor = gcd(width, height)
    total_pixels = width * height

    return jsonify({
        "resolution": f"{width} × {height}",
        "total_pixels": total_pixels,
        "megapixels": round(total_pixels / 1_000_000, 2),
        "ratio": f"{width // divisor}:{height // divisor}",
    })


if __name__ == "__main__":
    app.run(debug=True)
