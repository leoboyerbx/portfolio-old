const connection = require('@app').getInstance().getDb()
const ProjectEntity = require('@server/entities/ProjectEntity')

function rowDataToEntities (source) {
  const result = []
  source.forEach(row => result.push(new ProjectEntity(row)))
  return result
}

class ProjectsModel {
  static all (fields = undefined) {
    return new Promise((resolve) => {
      const fieldsString = fields ? fields.join(', ') : '*'
      connection.query(`SELECT ${fieldsString} FROM projects ORDER BY position`, (err, result) => {
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

  static getBySlugAndType (slug, type) {
    return new Promise(resolve => {
      this.getByType(type).then(projects => {
        if (projects) {
          const index = projects.findIndex(project => project.slug === slug)
          if (index === -1) {
            resolve(false)
          } else {
            const project = projects[index]
            project.prev = projects[index - 1]
            project.next = projects[index + 1]
            resolve(project)
          }
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
