import { routes } from "../routes.js"

export function routeHandler(request, response){

  const rotas = routes.find((rotaPercorrida) => {
    return rotaPercorrida.method === request.method && rotaPercorrida.url === request.url
  })

  if (rotas) {
    return rotas.controller(request, response)
  }

  return response.writeHead(404).end("Not found - Rota não encontrada.")
} 