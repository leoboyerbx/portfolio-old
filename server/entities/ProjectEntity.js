const path = require('path')

class ProjectEntity {
  constructor (data) {
    for (const prop in data) {
      this[prop] = data[prop]
    }
  }

  get viewPath () {
    return path.join(__viewsPath, 'projects', this.type, this.view_name)
  }

  get path () {
    return `/${this.type}/${this.slug}`
  }

  get imgPath () {
    return '/user/projects/img/' + this.img_name
  }

  get tags () {
    return this.raw_tags.split(', ').join(',').split(',')
  }
}
module.exports = ProjectEntity