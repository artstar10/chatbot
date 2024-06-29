const http = require('http');
const fs = require('fs');
const { parse } = require('querystring');

// Carrega o banco de dados (JSON)
const database = JSON.parse(fs.readFileSync('database.json', 'utf8'));

// Função para lidar com mensagens recebidas
const handleIncomingMessage = (message) => {
  let responseMessage = 'Desculpe, não entendi. Pode reformular?';

  // Verifica se a mensagem contém palavras-chave e retorna a resposta correspondente
  if (message.includes('vaga')) {
    responseMessage = 'Quais vagas você está procurando?';
  } else if (message.includes('aplicar')) {
    responseMessage = 'Por favor, envie seu currículo para nosso e-mail de recrutamento.';
  }

  return responseMessage;
};

// Função para processar requisições POST
const processPostRequest = (req, res) => {
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const data = parse(body);
    const message = data.Body ? data.Body.toLowerCase() : '';

    const responseMessage = handleIncomingMessage(message);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(responseMessage);
  });
};

// Cria servidor HTTP
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/whatsapp') {
    processPostRequest(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
