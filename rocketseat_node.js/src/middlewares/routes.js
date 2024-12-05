export const routes = [

  // Método POST - Cria Usuários.
  {
    method: "POST",
    path: "/users",
    hanlder: (request, response) => {
      const { name, email } = request.body;

      const user = {
        id: randomUUID(),
        name,
        email,
      };

      database.insert("users", user);

      return response.writeHead("201").end("Usuário Criado com Sucesso!");
    },
  },

  // Método GET - Lista Usuários.
  {
    method: "GET",
    path: "/users",
    hanlder: (request, response) => {
      const users = database.select("users");
      return response.end(JSON.stringify(users));
    },
  },

  
];