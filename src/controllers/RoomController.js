module.exports = {
  create(req, res) {
    let roomid = 123456

    res.redirect(`/room/${roomid}`)
  }
}
