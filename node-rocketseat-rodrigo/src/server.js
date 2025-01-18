
import http from 'node:http' // Quando usamos "node:http" significa que estamos usando módulo nativo. Mas, por que usar?
// Clareza: O prefixo node: deixa explícito que você está usando um módulo embutido no Node.js.
import {} from './middlewares/jsonBodyHandler.js'


const server = http.createServer(async (request, response) => {

  const { method, url } = request

  // Metodo GET
  if(method === 'GET' && url === '/products'){



    response.setHeader("Content-Type", "application/json")
    response.end(JSON.stringify(products)) // Envia os dados em formato JSON.
  }

  // Metodo POST
  if(method === 'POST' && url === '/products'){

    return response.writeHead(201).end("Produto cadastrado com sucesso!")
  }

  return response.writeHead(404).end("Not found - Rota não encontrada.")

})

server.listen(3333)