const express = require('express')
const res = require('express/lib/response')

const route = express.Router()

//Criando uma rota para a home
route.get('/', (req, res) => {
  res.render('index')
})

//Criando uma rota para a room
route.get('/room', (req, res) => {
  res.render('room')
})

//Criando uma rota para a criar sala
route.get('/create-pass', (req, res) => {
  res.render('create-pass')
})

//Exportando as rotas existentes
module.exports = route
