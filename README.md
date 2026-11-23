**Nome da Aplicação / Dashboard Web:** Multimédia Dashboard (Multimédia Quiz)

**Disciplina:** Oficina de Multimédia - 12.º Ano

**Ano Letivo:** 2026/2027

**Autor:** Guilhermo Leandro

**Turma:** A3

**Link da Aplicação Web:** https://guilhermoleandro.github.io/Projeto_multimedia_2026/

## 1. Visão Geral do Projeto

**Descrição:** O Multimédia Dashboard é uma aplicação educativa para testar conhecimentos e explorar conceitos de imagem, áudio, vídeo e tecnologias Web. Inclui um questionário interativo, um glossário pesquisável e uma calculadora de resolução de imagem.

**Proposta Escolhida:** Proposta 1.

## 2. Estrutura do Código e Funcionalidades Integradas

O projeto reúne os conteúdos e funcionalidades num dashboard Web. O questionário contém 12 perguntas de escolha múltipla, com correção e resultado final; a Wiki permite pesquisar conceitos e filtrar por categoria; e a calculadora determina píxeis, megapíxeis e proporção de uma imagem.

As funcionalidades foram desenvolvidas para este projeto com apoio da IA, não sendo uma adaptação direta de exercícios das fichas. A aplicação usa HTML, CSS e JavaScript no navegador e inclui uma API Python/Flask opcional para fornecer as perguntas, os conceitos e os cálculos.

## 3. Registo de Utilização da IA

Foi utilizado o Copilot como apoio à implementação, depuração e melhoria visual do projeto.

Prompt:
Quero que desenvolvas de raiz uma aplicação Web chamada Multimédia Dashboard, no âmbito da disciplina de Oficina de Multimédia do 12.º ano. A aplicação deve funcionar como um dashboard educativo, permitindo aos utilizadores testar conhecimentos e explorar conceitos relacionados com imagem, áudio, vídeo, animação e tecnologias digitais.

A aplicação deve ter um design moderno e profissional, com um tema escuro, inspirado em dashboards tecnológicos. Utiliza cores como azul, roxo e laranja para distinguir as diferentes funcionalidades. A interface deve ser intuitiva, com cartões de cantos arredondados, bordas discretas, sombras suaves e pequenas animações. Deve também ser totalmente responsiva, adaptando-se a computadores, tablets e telemóveis.

Na parte superior da página, cria uma barra de navegação com o nome "Multimédia Dashboard", um ícone com a letra M e uma indicação de que se trata de um projeto escolar. Abaixo, adiciona uma secção de apresentação com o título "Explora o mundo da Multimédia.", uma breve descrição da plataforma e a identificação da disciplina e do ano escolar.

A área principal deve estar organizada em três widgets. O primeiro deve chamar-se "Multimédia Quiz" e consistir num questionário interativo com exatamente 12 perguntas de escolha múltipla sobre multimédia, imagem digital, formatos de imagem, áudio, vídeo, animação e tecnologias Web. Cada pergunta deve apresentar quatro opções de resposta, sendo apenas uma correta. O questionário deve apresentar uma introdução com o número de perguntas, opções e respostas certas, um botão para começar e, depois, apresentar uma pergunta de cada vez. Deve impedir que o utilizador selecione mais do que uma resposta por pergunta, destacar a resposta correta a verde e a resposta errada a vermelho e apresentar uma explicação após cada resposta. Inclui uma barra de progresso, um indicador da pergunta atual e um botão para avançar. No final, apresenta a pontuação, o número de respostas certas e erradas, a percentagem de sucesso e uma mensagem de avaliação consoante o resultado. Deve também existir uma opção para repetir o questionário.

O segundo widget deve chamar-se "Multimédia Wiki" e funcionar como um glossário interativo de conceitos relacionados com multimédia. Organiza os conceitos nas categorias Imagem, Áudio, Vídeo e Web. Inclui termos como Píxel, RGB, PNG, JPEG, Imagem vetorial, MP3, WAV, Codec, FPS, Streaming, HTML, CSS e JavaScript. Cada conceito deve aparecer num cartão com o respetivo nome, categoria e definição. Adiciona uma barra de pesquisa em tempo real, botões para filtrar os conceitos por categoria e uma opção "Todos" para apresentar todos os resultados. Os cartões devem permitir expandir e recolher as definições. A pesquisa deve ignorar diferenças entre letras maiúsculas, minúsculas e acentos, de modo que pesquisar "pixel" também encontre "Píxel". Apresenta ainda o número de conceitos encontrados. Dá especial atenção ao aspeto visual desta secção, utilizando cartões organizados em grelha, categorias destacadas e animações discretas.

O terceiro widget deve chamar-se "Pixel Calculator" e funcionar como uma calculadora de resolução de imagem digital. Deve permitir introduzir a largura e a altura de uma imagem em píxeis e calcular automaticamente a resolução, o número total de píxeis, os megapíxeis e a proporção da imagem. Por exemplo, para uma imagem de 1920 × 1080 píxeis, deve apresentar 2 073 600 píxeis, 2,07 MP e uma proporção de 16:9. Inclui também uma representação visual da proporção da imagem através de um retângulo que se adapte às dimensões introduzidas. A calculadora deve aceitar apenas números inteiros entre 1 e 100000 e apresentar mensagens de erro claras quando os valores forem inválidos.

Organiza o projeto em três ficheiros: index.html, responsável pela estrutura da página; style.css, responsável pelo design, cores, animações e responsividade; e script.js, responsável pela lógica e interatividade dos três widgets. Utiliza HTML5, CSS3 e JavaScript, sem recorrer a frameworks desnecessários.

Garante que a aplicação funciona diretamente ao abrir o ficheiro index.html num navegador, sem necessitar de servidor ou instalação de dependências. Todos os botões devem funcionar corretamente, não devem existir erros na consola e a interface deve manter uma aparência consistente em todas as secções. Cria os três ficheiros completos, com código organizado e funcional, deixando a aplicação pronta a utilizar e adequada à apresentação de um projeto escolar de Multimédia do 12.º ano.

## 4. Estrutura de Ficheiros do Repositório

- `index.html` – Página principal do Dashboard.
- `app.py` – Aplicação Flask e API Python opcional.
- `style.css` – Estilos e layout responsivo.
- `script.js` – Interatividade do questionário, da Wiki e da calculadora.
- `requirements.txt` – Dependências Python.
- `test_app.py` – Testes da API.
- `README.md` – Relatório do projeto.
- `Assets` – Não existe uma pasta de assets neste projeto.

## 5. Reflexão Crítica e Aprendizagem

O que correu melhor foi reunir várias ferramentas de aprendizagem numa única página e tornar os widgets interativos. A maior dificuldade foi assegurar que a aplicação funcionava com e sem o servidor Python e corrigir a pesquisa por palavras com acentos. A IA ajudou-me a investigar erros e experimentar melhorias, mas foi necessário validar as alterações com testes e no navegador.
