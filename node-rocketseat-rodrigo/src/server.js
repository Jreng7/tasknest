
import http from 'node:http' // Quando usamos "node:http" significa que estamos usando módulo nativo. Mas, por que usar?
// Clareza: O prefixo node: deixa explícito que você está usando um módulo embutido no Node.js.

const server = http.createServer((request, response) => {
  return response.end("Servidor online com a flag --watch 2")
})

server.listen(3333)