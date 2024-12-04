// Padrão CommonJS => const http = require('http');

// No CommonJS nós usamos uma variável para "capturar" o http dentro do módulo http.
// Logo, const = http está armazenando é um "módulo http" ou seja, um OBJETO!

/*
  O módulo http é um objeto exportado pelo Node.js. Ele não possui um nome especial além de "módulo http".
  Esse objeto contém métodos e propriedades para criar e gerenciar servidores HTTP e realizar requisições HTTP.
  Esse objeto tem funções (como http.createServer()), classes (como http.Server), e outras propriedades e métodos relacionados a requisições e servidores HTTP.
*/

// ES Module (abaixo)
import http from 'node:http';

