# Chatbot Simples de Recrutamento para WhatsApp

Este projeto implementa um chatbot simples para responder automaticamente mensagens no WhatsApp relacionadas a vagas de emprego. Ele utiliza JavaScript puro no ambiente Node.js, sem depender de frameworks adicionais.

## Funcionalidades

- **Respostas Automáticas**: O chatbot responde a mensagens que contenham palavras-chave como "vaga" e "aplicar" com respostas pré-definidas.
- **Configuração Simples**: As respostas são configuradas em um arquivo JSON (`database.json`) que serve como um banco de dados simples.
- **Fácil de Testar**: Pode ser testado localmente usando ferramentas como `curl` ou Postman para simular mensagens recebidas.

## Como Usar

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

   Use ferramentas como `curl` ou Postman para enviar requisições POST simuladas para o endpoint `/whatsapp` do servidor local (por exemplo, `http://localhost:3000/whatsapp`).

## Contribuição

Sinta-se à vontade para enviar pull requests ou abrir issues para melhorias e correções. Este projeto é destinado a fins educacionais e como exemplo de implementação de um chatbot simples em Node.js.

