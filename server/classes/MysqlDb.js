const mysql = require('mysql')
class MySqlDb {
  static getConnection () {
    const connection = mysql.createConnection()
    connection.connect()
    return connection
  }
}

module.exports = MySqlDb
