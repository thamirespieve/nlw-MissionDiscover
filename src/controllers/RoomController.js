const Database = require('../db/config')
module.exports = {
  async create(req, res) {
    const db = await Database()

    let roomid
    const pass = req.body.password
    for (var i = 0; i < 6; i++) {
      i == 0
        ? (roomid = Math.floor(Math.random() * 10).toString())
        : (roomid += Math.floor(Math.random() * 10).toString())
    }

    await db.run(`INSERT INTO rooms (
      id,
      pass
    ) VALUES (${parseInt(roomid)},${pass})`)

    await db.close()

    res.redirect(`/room/${roomid}`)
  }
}
