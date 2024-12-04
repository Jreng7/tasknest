// Padrão CommonJS => const http = require('http');

// No CommonJS nós usamos uma variável para "capturar" o http dentro do módulo http.
// Logo, const = http está armazenando é um "módulo http" ou seja, um OBJETO!

/*
  O módulo http é um objeto exportado pelo Node.js. Ele não possui um nome especial além de "módulo http".
  Esse objeto contém métodos e propriedades para criar e gerenciar servidores HTTP e realizar requisições HTTP.
  Esse objeto tem funções (como http.createServer()), classes (como http.Server), e outras propriedades e métodos relacionados a requisições e servidores HTTP.
*/

// CommonJS => require
// ESModules => import/export  (para usar o module, é necessário ir no package.json e colocar "type": "module")
// Pois por padrão o node.js não suporta o ESModules.


// ESModules mais atual! (abaixo)
import http from 'node:http';

//  Request = (Requisição/Pedido "Quem está chamando o servidor") &  Response = (Resposta "Para quem está chamando o servidor")
const server = http.createServer((request, response) => {
  return response.end("Servidor Online")
})

server.listen(3333); 