
import http from 'node:http' // Quando usamos "node:http" significa que estamos usando módulo nativo. Mas, por que usar?
// Clareza: O prefixo node: deixa explícito que você está usando um módulo embutido no Node.js.

const server = http.createServer((request, response) => {
  const { method, url } = request
  return response.writeHead(404).end("O método da requisição é: " + method)
})

server.listen(3333)