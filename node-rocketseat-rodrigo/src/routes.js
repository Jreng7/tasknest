import { parseRoutePath } from "./utils/parseRoutePath.js"

export const routes = [


  // Metodo GET
  {
    method: "GET", 
    url: "/products",

    controller: (request, response) => {
      return response
        .setHeader("Content-Type", "application/json")
        .end("") // Envia os dados em formato JSON.
    }
  },

  // Metodo POST
  {
    method: "POST", 
    url: "/products",

    controller: (request, response) => {
      return response.writeHead(201).end("Produto criado com Sucesso")
    }
  },

   // Metodo DELETE
   {
    method: "DELETE", 
    url: "/products/:id",

    controller: (request, response) => {
      return response.writeHead(204).end()
    }
  },

].map((rota) => ({
  ...rota,
  url: parseRoutePath(rota.url)
}))
