const mysql = require('mysql')
class MySqlDb {
  static getConnection () {
    const connection = mysql.createConnection({
      host: 'sql.dev-leoboyer.cf',
      user: 'portfolio',
      password: 'yg10u1Xtnsf2b8Ke',
      database: 'portfolio'
    })
    connection.connect()
    return connection
  }
}

module.exports = MySqlDb
