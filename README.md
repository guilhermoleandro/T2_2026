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

1. **Prompt para conversão Web/HTML:** “Make the project work on the index.html”.
2. **Prompt para ampliação e construção de funcionalidades:** “Make it so the code comes from python and complete the missing widgets”.
3. **Dificuldades e erros corrigidos com a IA:** Foi necessário fazer os widgets funcionarem tanto com a API Python como ao abrir o `index.html` sem servidor. Também foi corrigida a pesquisa da Wiki: “pixel” não encontrava “Píxel” porque a comparação era sensível a acentos.
4. **Otimização de Layout:** Foi pedido “Faz com que a Multimédia Wiki fique com bom aspeto”. A Wiki passou a apresentar conceitos em cartões, categorias destacadas, definições expansíveis e uma disposição adaptável a ecrãs pequenos.

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
