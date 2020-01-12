const MysqlDb = require('./MysqlDb')
const config = require('@server/config/secret')

class App {
  static getInstance () {
    if (App.instance === undefined) {
      App.instance = new App()
    }
    return App.instance
  }

  getAnalyticsId () {
    return config.analyticsID
  }

  getDb () {
    if (this.mysqlDb === undefined) {
      this.mysqlDb = MysqlDb.getConnection()
    }
    return this.mysqlDb
  }

}

module.exports = App
