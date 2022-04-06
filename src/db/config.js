const sqlite3 = require('sqlite3')
const { open } = require('sqlite') // Pegando só a função open do sqlite

module.exports = () => {
  //Abrindo conexão com o banco
  open({
    filename: './src/db/rocketq.sqlite', //Caminho do banco de dados
    driver: sqlite3.Database // Comanda o arquivo
  })
}
