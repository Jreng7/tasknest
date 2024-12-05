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

      const user = {
        id: 1,
        name,
        email,
      }

      database.insert('users', user)

      return response.writeHead('201').end('Usuário Criado com Sucesso!')
    }

    // Listagem de Usuários. 
    if(method === 'GET' && url === '/users') {

      const users = database.select('users')
      
      return response.end(JSON.stringify(users))
    }

    return response.writeHead(404).end('Not Found')

}

http.createServer(handler)
.listen(3333)