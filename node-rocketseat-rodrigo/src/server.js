
import http from 'node:http' // Quando usamos "node:http" significa que estamos usando módulo nativo. Mas, por que usar?
// Clareza: O prefixo node: deixa explícito que você está usando um módulo embutido no Node.js.

const server = http.createServer((request, response) => {
  const { method, url } = request

  if(method === 'GET' && url === '/products'){
    return response.end("Lista de produtos")
  }

  if(method === 'POST' && url === '/products'){
    
  }

  return response.writeHead(200).end("A URL é: " + url)
})

server.listen(3333)