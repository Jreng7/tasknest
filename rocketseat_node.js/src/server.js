import http from 'node:http'
import { json } from './middlewares/json.js'
import { Database } from './middlewares/database.js'

/**
 *  CABEÇALHOS (TANTO DA REQUISIÇÃO QUANTO DA RESPOSTA) => SÃO METADADOS!
 *  OS METADADOS SÃO INFORMAÇÕES PARA QUE CADA UM POSSA SABER LIDAR COM REQUISIÇÃO OU RESPOSTA.
 */

  const database = new Database()

  async function handler (request, response) {

    const { method, url } = request

    await json(request, response)

    // Criação de Usuários.
    if(method === 'POST' && url === '/users') {

      const { name, email } = request.body

      users.push({
        id: 1,
        name,
        email,
      })

      return response.writeHead('201').end('Usuário Criado com Sucesso!')
    }

    // Listagem de Usuários. 
    if(method === 'GET' && url === '/users') {
      
      return response
      .setHeader('Content-type', 'application/json')  
      .end(JSON.stringify(users))
    }

    return response.writeHead(404).end('Not Found')

}

http.createServer(handler)
.listen(3333)