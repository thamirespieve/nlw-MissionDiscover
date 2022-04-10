const express = require('express')
const QuestionController = require('./controllers/QuestionController.js')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

//Criando uma rota para a home
route.get('/', (req, res) => {
  res.render('index', { page: 'enter-room' })
})
//Criando uma rota para a criar sala
route.get('/create-pass', (req, res) =>
  //index, porque a parte está sendo renderizada dentro do arquivo index
  res.render('index', { page: 'creat-pass' })
)

/*route.get('/create-pass', (req, res) => {
  res.render('create-pass')
})*/

//Criando uma rota para a room
route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

//Formato que o formulario dentro da modal precisa passar a informação
route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

//Exportando as rotas existentes
module.exports = route
