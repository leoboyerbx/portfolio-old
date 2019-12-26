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

  static async getBySlug (slug) {
    const projects = await this.all(['id', 'slug', 'title', 'img_name', 'view_name', 'type', 'position', 'raw_tags'])
    if (projects) {
      const index = projects.findIndex(project => project.slug === slug)
      const project = projects[index]
      project.prev = projects[index - 1]
      project.next = projects[index + 1]
      console.log(project)
      return project
    } else {
      return false
    }
  }

  static getByType (type) {
    return this.get({ type: type })
  }

  static async getById (id) {
    return this.get({ id: id }, true)
  }
}

module.exports = ProjectsModel
