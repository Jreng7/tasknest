import http from 'node:http'

/**
 *  CABEÇALHOS (TANTO DA REQUISIÇÃO QUANTO DA RESPOSTA) => SÃO METADADOS!
 *  OS METADADOS SÃO INFORMAÇÕES PARA QUE CADA UM POSSA SABER LIDAR COM REQUISIÇÃO OU RESPOSTA.
 */

const users = []

const server = http.createServer((req, res) => {
  
  const { method, url } = req

  // Criação de Usuários.
  if(method === 'POST' && url === '/users') {

    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com'
    })

    return res.writeHead('201').end('Usuário Criado com Sucesso!')
  }

  // Listagem de Usuários. 
  if(method === 'GET' && url === '/users') {
    
    return res
    .setHeader('Content-type', 'application/json')  
    .end(JSON.stringify(users))
  }

    return res.writeHead(404).end('Not Found')

})

server.listen(3333)