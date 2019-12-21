const connection = require('@app').getInstance().getDb()
const ProjectEntity = require('@server/entities/ProjectEntity')

function rowDataToEntities (source) {
  const result = []
  source.forEach(row => result.push(new ProjectEntity(row)))
  return result
}

class ProjectsModel {
  static all () {
    return new Promise((resolve) => {
      connection.query('SELECT * FROM projects ORDER BY position', (err, result) => {
        if (err) throw err
        if (result) {
          result = rowDataToEntities(result)
          resolve(result)
        } else {
          resolve(false)
        }
      })
    })
  }

  static get (query, unique = false) {
    return new Promise((resolve) => {
      connection.query('SELECT * FROM projects WHERE ? ORDER BY position', query, (err, result) => {
        if (err) throw err
        if (result) {
          result = rowDataToEntities(result)
          resolve(unique ? result[0] : result)
        } else {
          resolve(false)
        }
      })
    })
  }

  static getByType (type) {
    return this.get({ type: type })
  }

  static async getById (id) {
    return this.get({ id: id }, true)
  }
}

module.exports = ProjectsModel
