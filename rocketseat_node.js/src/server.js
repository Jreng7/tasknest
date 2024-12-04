import http from 'node:http'


const users = []

const server = http.createServer((req, res) => {
  
  const { method, url } = req

  if(method === 'POST' && url === '/users') {

    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com'
    })

    return res.end('usuário criado com sucesso!')
  }

  if(method === 'GET' && url === '/users') {
    return res.end(users)
  }

    return res.end('Not Found')

})

server.listen(3333)