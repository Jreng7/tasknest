import http from 'node:http'
import { randomUUID } from 'node:crypto' // => UUID ( Universal Unique Identifier ) Identificador Universalmente Único. 
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

     
    }

    // Listagem de Usuários. 
    if(method === 'GET' && url === '/users') {

      
    }

    return response.writeHead(404).end('Not Found')

}

http.createServer(handler)
.listen(3333)