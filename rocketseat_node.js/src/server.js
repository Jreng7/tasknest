import http from 'node:http'

/**
 *  CABEÇALHOS (TANTO DA REQUISIÇÃO QUANTO DA RESPOSTA) => SÃO METADADOS!
 *  OS METADADOS SÃO INFORMAÇÕES PARA QUE CADA UM POSSA SABER LIDAR COM REQUISIÇÃO OU RESPOSTA.
 */

const users = []

const server = http.createServer(async(req, res) => {
  
  const { method, url } = req

  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch { 
    req.body = null
  }

  console.log(body.name)

  // Criação de Usuários.
  if(method === 'POST' && url === '/users') {

    const { name, email } = req.body

    users.push({
      id: 1,
      name,
      email,
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