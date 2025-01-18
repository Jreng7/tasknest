
import http from 'node:http' // Quando usamos "node:http" significa que estamos usando módulo nativo. Mas, por que usar?
// Clareza: O prefixo node: deixa explícito que você está usando um módulo embutido no Node.js.
import { jsonBodyHandler } from './middlewares/jsonBodyHandler.js'
import { routeHandler } from './middlewares/routeHandler.js'


const server = http.createServer(async (request, response) => {

  await jsonBodyHandler(request)
  routeHandler(request, response)

  return response.writeHead(404).end("Not found - Rota não encontrada.")

})

server.listen(3333)