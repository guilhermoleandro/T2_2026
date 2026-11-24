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

1. Prompt para conversão Web/HTML:
   ``
   Converte o projeto numa aplicação Web utilizando HTML5, CSS3 e JavaScript, mantendo as funcionalidades existentes. Organiza o código em ficheiros separados, garantindo uma estrutura simples, organizada e responsiva. Cria uma interface moderna para o Multimédia Dashboard, com acesso às secções Quiz, Wiki e Pixel Calculator, garantindo que funciona corretamente no navegador.
   ``
3. Prompt para ampliação e construção de funcionalidades:
``
   Desenvolve e melhora as funcionalidades do Multimédia Dashboard, incluindo um Quiz com 12 perguntas e pontuação final, uma Wiki com pesquisa e filtros por categorias e uma Pixel Calculator que calcula píxeis, megapíxeis e proporções. Garante que os botões, pesquisas, filtros e cálculos funcionam corretamente e que todas as funcionalidades estão integradas.
``
4. Otimização de Layout: O que sugeriste à IA para alterar no design - cores,
margens, fontes, botões?:
``
   Melhora o design do Multimédia Dashboard, mantendo um tema escuro com apontamentos de azul, roxo e laranja. Ajusta as margens, os espaçamentos, as fontes e os cartões para tornar a interface mais organizada. Melhora os botões com cantos arredondados e efeitos hover, garantindo uma apresentação moderna, consistente e adaptável a diferentes tamanhos de ecrã.
``

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
