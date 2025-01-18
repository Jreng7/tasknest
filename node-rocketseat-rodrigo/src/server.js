
import http from 'node:http' // Quando usamos "node:http" significa que estamos usando módulo nativo. Mas, por que usar?
// Clareza: O prefixo node: deixa explícito que você está usando um módulo embutido no Node.js.


const server = http.createServer((request, response) => {
  const { method, url } = request

  if(method === 'GET' && url === '/products'){
    return response.end("Lista de produtos")
  }

  if(method === 'POST' && url === '/products'){
  
    const buffers = [] // Banco de Dados.

    for await (const chunk of request){
      buffers.push(chunk)
    }


    return response.writeHead(201).end("Produto cadastrado com sucesso!")
  }

  return response.writeHead(404).end("Not found - Rota não encontrada.")
})

server.listen(3333)