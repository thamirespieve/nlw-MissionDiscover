const Database = require('./config') // Importando o config

const initDb = {
  async init() {
    //Configuração do Banco
    const db = await Database()

    // Criando a tabela
    await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`)

    await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`)

    await db.close()
  }
}

initDb.init()
