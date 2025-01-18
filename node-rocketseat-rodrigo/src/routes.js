


export const routes = [


  // Metodo GET
  {
    method: "GET", 
    url: "/products",

    controller: (request, response) => {
      return response
        .setHeader("Content-Type", "application/json")
        .end("Lista de Usuários.") // Envia os dados em formato JSON.
    }
  },

  // Metodo POST
  {
    method: "POST", 
    url: "/products",

    controller: (request, response) => {
      return response.writeHead(201).end("Usuário Criado com Sucesso")
    }
  },

]