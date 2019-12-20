const MysqlDb = require('./MysqlDb')

class App {
  static getInstance () {
    if (App.instance === undefined) {
      App.instance = new App()
    }
    return App.instance
  }

  getDb () {
    if (this.mysqlDb === undefined) {
      this.mysqlDb = MysqlDb.getConnection()
    }
    return this.mysqlDb
  }
}

module.exports = App
