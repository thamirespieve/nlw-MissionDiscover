const req = require('express/lib/request')
const Database = require('../db/config')
module.exports = {
  async create(req, res) {
    const db = await Database()

    let roomid
    const pass = req.body.password

    let isRoom = true

    while (isRoom) {
      /*Gera o numero da sala */
      for (var i = 0; i < 6; i++) {
        i == 0
          ? (roomid = Math.floor(Math.random() * 10).toString())
          : (roomid += Math.floor(Math.random() * 10).toString())
      }
      /*Verifica se esse numero ja existe */
      const roomsExistIds = await db.all(`SELECT id FROM rooms`) // db.all retorna alguma coisa

      isRoom = roomsExistIds.some(roomsExistId => roomsExistId === roomid) // Verifica se a condição existe

      if (!roomsExistIds) {
        /*Insere a sala no banco */
        await db.run(`INSERT INTO rooms (
        id,
        pass
      ) VALUES (${parseInt(roomid)},${pass})`)
      }
    }

    await db.close()

    res.redirect(`/room/${roomid}`)
  },
  async open(req, res) {
    const db = await Database()
    const roomId = req.params.room
    let isNoQuestions
    //Buscando questões das salas
    const questions = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} and read = 0`
    )
    const questionsRead = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} and read =1`
    )

    if (questions.length == 0) {
      if (questionsRead.length == 0) {
        isNoQuestions = true
      }
    }

    res.render('room', {
      roomId: roomId,
      questions: questions,
      questionsRead: questionsRead,
      isNoQuestions: isNoQuestions
    })
  },

  async enter(req, res) {
    const db = await Database()
    const roomId = req.body.roomId

    res.redirect(`/room/${roomId}`)
  }
}
