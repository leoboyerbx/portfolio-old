const mysql = require('mysql')
const config = require('../config/secret')

class MySqlDb {
  static getConnection () {
    const connection = mysql.createConnection(config)
    connection.connect()
    return connection
  }
}

module.exports = MySqlDb
