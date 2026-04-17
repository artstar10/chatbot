# Chatbot Simples de Recrutamento para WhatsApp

Este repositório começou como um projeto prático de um chatbot simples para responder automaticamente mensagens no WhatsApp relacionadas a vagas de emprego. A base original foi mantida e ampliada com uma trilha de estudo usando o Google NotebookLM como ferramenta de aprendizagem ativa, curadoria de fontes e organização de conhecimento.

Além desse percurso, o README agora também registra um novo desafio prático voltado a reconhecimento de voz e conversação multi-idiomas com IA: **Conversando por Voz com o ChatGPT Utilizando Whisper (OpenAI) e Python**.

## Visão Geral do Estudo

O objetivo deste projeto foi transformar um projeto técnico já iniciado em um caderno temático de estudos, documentando não apenas o código, mas também o processo de pesquisa, análise de fontes, testes de prompts e consolidação do aprendizado.

Com a inclusão do novo desafio de voz, o repositório passa a representar duas frentes complementares de aprendizagem: automação conversacional por texto e experiências conversacionais por voz com apoio de IA generativa.

Tema escolhido:
**Como criar e evoluir um chatbot de recrutamento para WhatsApp com Node.js**

Desafio complementar:
**Conversando por Voz com o ChatGPT Utilizando Whisper (OpenAI) e Python**

## Novo Desafio de Reconhecimento de Voz

Este desafio amplia o portfólio do projeto ao explorar uma experiência conversacional baseada em voz. A proposta é construir uma solução capaz de gravar áudio, transcrever a fala com o Whisper, enviar o texto para uma IA generativa e devolver a resposta em áudio, criando uma conversa mais natural e acessível.

Ao combinar tecnologias de Speech-to-Text e Text-to-Speech, a solução demonstra como perguntas feitas por voz podem ser compreendidas e respondidas em diferentes idiomas. O Whisper atua na transcrição e tradução, o ChatGPT entra como camada de interpretação e resposta, e o `gTTS` transforma a resposta em voz novamente.

### O Que Este Desafio Explora

- Gravação de áudio com Python e apoio de JavaScript em ambiente interativo.
- Reconhecimento de fala com `Whisper` da OpenAI.
- Integração com a API do `ChatGPT` para geração de respostas.
- Síntese de voz com `gTTS` para transformar texto em áudio.
- Construção de fluxos multi-idiomas para comunicação mais natural.

### Visão Geral dos Passos do Lab

1. Gravação de áudio com Python e uma pitada de JavaScript.
2. Reconhecimento de fala com Whisper (OpenAI).
3. Integração com a API do ChatGPT.
4. Sintetização da resposta como voz com `gTTS`.
5. Testes, conclusão e adaptação da ideia para novas aplicações.

### Objetivos de Aprendizagem Deste Desafio

- Entender como capturar áudio em um fluxo de prototipação com Python.
- Aplicar Speech-to-Text para transformar fala em texto utilizável por uma IA.
- Integrar uma IA generativa para interpretar perguntas e produzir respostas relevantes.
- Converter respostas textuais em áudio para criar experiências mais completas.
- Explorar casos de uso que unem acessibilidade, idiomas e automação inteligente.

### Materiais de Apoio

Artigo recomendado:
**Conversando por Voz com o ChatGPT Utilizando Whisper (OpenAI) e Python**

Links úteis:

- Código-fonte deste desafio no Google Colab: [https://colab.research.google.com/drive/1VRIEQIYlqYT4Lx3Ow9albKfV2Wq--P0x?usp=sharing](https://colab.research.google.com/drive/1VRIEQIYlqYT4Lx3Ow9albKfV2Wq--P0x?usp=sharing)

### Como Este Desafio se Conecta ao Projeto

Mesmo que o código atual do repositório ainda esteja centrado no chatbot textual em Node.js, este novo desafio aponta uma evolução natural para a solução:

- adicionar entrada por voz ao fluxo de atendimento;
- permitir interações mais acessíveis e naturais;
- expandir o chatbot para cenários multi-idiomas;
- integrar reconhecimento de fala e síntese de voz a futuras versões do projeto.

## NotebookLM

Caderno de estudos:
[Abrir notebook](https://notebooklm.google.com/notebook/bcc4bf76-6c1d-4633-b327-ee2c2a5c13ab)

O NotebookLM foi usado para reunir as fontes, testar perguntas, gerar resumos e apoiar a consolidação do miniguia de estudo deste projeto.

## Contexto e Objetivos

O tema foi escolhido porque conecta programação, automação de mensagens e uma aplicação real de atendimento inicial para recrutamento. A ideia foi usar o NotebookLM para estudar conceitos técnicos e práticos que ajudam a evoluir este chatbot simples para uma solução mais organizada e preparada para melhorias futuras.

Objetivos de estudo:

- Entender como um servidor HTTP simples em Node.js pode receber e responder mensagens.
- Estudar como palavras-chave podem ser usadas para criar fluxos iniciais de atendimento.
- Compreender como webhooks e integrações com WhatsApp funcionam em cenários reais.
- Identificar boas práticas para melhorar a experiência do usuário em chatbots.
- Organizar prompts reutilizáveis para futuras revisões e expansões do projeto.

## Curadoria de Fontes

As fontes abaixo foram selecionadas para upload e consulta no NotebookLM por serem abertas e relevantes para o tema estudado:

1. [Node.js HTTP Documentation](https://nodejs.org/api/http.html)
   Documentação oficial sobre criação de servidores HTTP em Node.js, base direta para entender a estrutura do arquivo `index.js`.

2. [Node.js Query String Documentation](https://nodejs.org/api/querystring.html)
   Documentação oficial sobre parsing de dados enviados em requisições, importante para compreender o uso de `parse(body)`.

3. [MDN - String.prototype.includes()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
   Referência sobre o método utilizado para identificar palavras-chave nas mensagens.

4. [Twilio - WhatsApp Business Platform](https://www.twilio.com/docs/whatsapp)
   Material aberto sobre envio e recebimento de mensagens via WhatsApp em cenários de negócio.

5. [Twilio - Quickstart: Send and receive WhatsApp messages](https://www.twilio.com/docs/whatsapp/quickstart)
   Guia introdutório para entender o fluxo de webhook e resposta automática em integrações com WhatsApp.

## Engenharia de Prompts

Durante os estudos no NotebookLM, a estratégia foi usar perguntas progressivas: primeiro para entender a base técnica, depois para comparar possibilidades de melhoria e por fim para consolidar um miniguia de estudo.

### Prompts testados

- "Explique de forma simples como este chatbot em Node.js recebe uma mensagem e devolve uma resposta."
- "Quais conceitos de Node.js aparecem neste projeto e para que serve cada um deles?"
- "Como transformar um chatbot baseado em palavras-chave em um fluxo de atendimento mais organizado?"
- "Quais seriam as limitações de um chatbot simples de recrutamento para WhatsApp?"
- "Com base nas fontes enviadas, crie um resumo estruturado sobre webhooks, palavras-chave e respostas automatizadas."
- "Monte um glossário com os principais termos técnicos envolvidos neste projeto."
- "Gere sugestões de melhorias reais para este chatbot sem perder a simplicidade do código."

### Variações de prompts

- "Explique como se eu fosse iniciante em Node.js."
- "Resuma em tópicos objetivos."
- "Compare a implementação atual com uma versão mais próxima de produção."
- "Aponte riscos, limitações e boas práticas."
- "Transforme a resposta em um miniguia de revisão."

## Cicatrizes e Troubleshooting

Nem sempre as primeiras respostas da IA vieram no nível ideal. Em alguns momentos, as respostas ficaram genéricas demais ou se afastaram do código real do projeto. O principal aprendizado foi que prompts vagos geram respostas vagas.

Dificuldades encontradas:

- Respostas muito amplas quando a pergunta não mencionava o contexto do projeto.
- Explicações pouco práticas quando eu não informava que queria algo aplicado ao chatbot atual.
- Sugestões avançadas demais para um projeto que ainda está em nível inicial.

Como melhorei os resultados:

- Passei a citar explicitamente o contexto: chatbot de recrutamento via WhatsApp em Node.js.
- Pedi respostas em formato de tópicos, resumo e comparação.
- Solicitei que a IA diferenciasse "versão atual" e "possíveis evoluções".
- Usei as fontes como base para reduzir respostas inventadas ou distantes do tema.

## Miniguia de Estudo

### 1. Resumo estruturado do assunto

Um chatbot simples pode ser construído em Node.js com o módulo `http`, recebendo requisições `POST` em um endpoint específico. Nesse projeto, o endpoint `/whatsapp` recebe os dados enviados, extrai a mensagem e verifica a presença de palavras-chave para decidir a resposta.

O fluxo atual funciona assim:

1. O servidor é iniciado com `http.createServer`.
2. Uma requisição `POST` chega ao endpoint `/whatsapp`.
3. O corpo da requisição é lido em partes.
4. Os dados são processados com `querystring.parse`.
5. A mensagem recebida é normalizada com `toLowerCase()`.
6. O chatbot busca palavras-chave como `vaga` e `aplicar`.
7. Uma resposta em texto simples é enviada ao usuário.

Essa abordagem é útil para protótipos porque é fácil de entender, testar e expandir. Ao mesmo tempo, ela tem limitações: depende de palavras exatas, não entende contexto e não possui controle de fluxo mais sofisticado.

### 2. Glossário

- `Node.js`: ambiente de execução JavaScript no lado do servidor.
- `HTTP`: protocolo usado para comunicação entre cliente e servidor.
- `Webhook`: mecanismo em que um sistema envia dados automaticamente para uma URL quando um evento acontece.
- `Endpoint`: rota acessível da aplicação, como `/whatsapp`.
- `POST`: método HTTP usado para envio de dados.
- `querystring.parse()`: função usada para transformar texto de requisição em objeto.
- `includes()`: método usado para verificar se uma string contém determinado trecho.
- `JSON`: formato de dados usado no projeto para armazenar respostas simples.
- `Palavras-chave`: termos usados para acionar respostas automáticas.
- `Automação de atendimento`: uso de regras para responder mensagens sem intervenção humana imediata.

### 3. Prompts reutilizáveis

- "Explique o funcionamento deste projeto passo a passo com foco em Node.js para iniciantes."
- "A partir deste código, liste pontos fortes, limitações e próximos passos de melhoria."
- "Resuma os conceitos técnicos usados neste chatbot em linguagem simples."
- "Crie um checklist para evoluir este projeto de protótipo para uma versão mais robusta."
- "Monte perguntas e respostas para revisar webhooks, HTTP, parsing de dados e automação de mensagens."

## Relação Entre o Estudo e o Projeto Prático

O estudo no NotebookLM ajudou a enxergar que o projeto atual já tem uma base válida para demonstrar:

- recepção de mensagens via servidor HTTP;
- tratamento simples de entrada de dados;
- respostas automatizadas baseadas em regra;
- potencial de evolução para fluxos mais completos de atendimento.

Com o novo desafio de reconhecimento de voz, essa visão se amplia para incluir:

- transcrição de perguntas faladas para texto;
- geração de respostas mais contextuais com IA generativa;
- retorno em áudio para experiências conversacionais mais imersivas.

Com isso, este repositório deixa de ser apenas um exemplo de código e passa a registrar também o processo de aprendizagem, análise crítica e consolidação de conhecimento construídos ao longo do estudo.

## Projeto Base Desenvolvido

Esta seção preserva a ideia original do repositório, agora integrada ao contexto do estudo.

### Funcionalidades

- **Respostas Automáticas**: O chatbot responde a mensagens que contenham palavras-chave como "vaga" e "aplicar" com respostas predefinidas.
- **Configuração Simples**: As respostas são configuradas em um arquivo JSON (`database.json`) que serve como um banco de dados simples.
- **Fácil de Testar**: Pode ser testado localmente usando ferramentas como `curl` ou Postman para simular mensagens recebidas.

### Como Usar

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/artstar10/chatbot.git
   ```

2. **Navegue até a Pasta do Projeto**

   ```bash
   cd chatbot
   ```

3. **Instale as Dependências**

   Não há dependências externas além do Node.js.

4. **Inicie o Servidor**

   ```bash
   node index.js
   ```

5. **Teste o Chatbot**

   Use ferramentas como `curl` ou Postman para enviar requisições `POST` simuladas para o endpoint `/whatsapp` do servidor local, por exemplo `http://localhost:3000/whatsapp`.

### Estrutura do Projeto

- `index.js`: servidor HTTP e lógica de resposta automática.
- `database.json`: base simples de respostas.
- `README.md`: documentação do projeto técnico e da trilha de estudo criada com apoio do NotebookLM.

## Conclusão

Este projeto representa a união entre prática e estudo orientado por IA. O chatbot simples foi mantido como base real de aplicação, enquanto o NotebookLM foi usado como apoio para compreender melhor os conceitos, organizar fontes, testar perguntas e consolidar um miniguia de estudo reutilizável.

Com a adição do desafio de reconhecimento de voz, o README também passa a documentar uma trilha complementar focada em `Python`, `Whisper`, `ChatGPT` e `gTTS`, ampliando o escopo do portfólio para experiências conversacionais por voz.

## Contribuição

Sinta-se à vontade para enviar pull requests ou abrir issues para melhorias e correções. Este projeto é destinado a fins educacionais e como exemplo de implementação de um chatbot simples em Node.js com documentação de aprendizagem aplicada.

**Tecnologias**

![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript)
![Python](https://img.shields.io/badge/-Python-333333?style=flat&logo=python)
![JSON](https://img.shields.io/badge/-JSON-333333?style=flat&logo=json)

**Testes**

![Insomnia](https://img.shields.io/badge/-Insomnia-333333?style=flat&logo=insomnia)
![Postman](https://img.shields.io/badge/-Postman-333333?style=flat&logo=postman)

**Ferramentas de Desenvolvimento**

![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-333333?style=flat&logo=visual-studio-code&logoColor=007ACC)
<br/>

<!-- <a href="https://github.com/artstar10">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=artstar10&theme=dracula&show_icons=true" alt="GitHub Stats"/>
</a> -->

<br/>
