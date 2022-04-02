const express = require('express')
const route = require('./route')
const path = require('path')

const server = express() // inicia o express

server.set('view engine', 'ejs') //Responsavel pela visualização

server.use(express.static('public')) //Pegando os conteudos estaticos da pasta public

server.set('views', path.join(__dirname, 'views')) // Pegando o caminho da pasta views

server.use(route) // Usando o arquivo route das rotas

server.listen(3000, () => console.log('Rodando')) // Inicia em uma porta
