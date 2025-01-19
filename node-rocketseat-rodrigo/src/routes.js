
import { parseRoutePath } from "./utils/parseRoutePath.js"

export const routes = [


  // Metodo GET
  {
    method: "GET", 
    path: "/products",

    controller: (request, response) => {
      return response
        .setHeader("Content-Type", "application/json")
        .end("") // Envia os dados em formato JSON.
    }
  },

  // Metodo POST
  {
    method: "POST", 
    path: "/products",

    controller: (request, response) => {
      return response.writeHead(201).end("Produto criado com Sucesso")
    }
  },

   // Metodo DELETE
  {
    method: "DELETE", 
    path: "/products/:id",

    controller: (request, response) => {
      return response.end("Removido")
    },
  },  
  
].map((rota) => ({
  ...rota,
  path: parseRoutePath(rota.path)
}))
