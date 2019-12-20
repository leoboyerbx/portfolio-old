const connection = require('@app').getInstance().getDb()
const ProjectEntity = require('@server/entities/ProjectEntity')

function rowDataToEntities (source) {
  const result = []
  source.forEach(row => result.push(new ProjectEntity(row)))
  console.log(result)
  return result
}

class ProjectsModel {
  static all () {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM projects', (err, result) => {
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
      connection.query('SELECT * FROM questions_qcm WHERE ?', query, (err, result) => {
        if (err) throw err
        resolve(unique ? result[0] : result)
      })
    })
  }

  static async getById (id) {
    return this.get({ id: id }, true)
  }
}

module.exports = ProjectsModel
