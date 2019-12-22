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
<<<<<<< HEAD

  get tags () {
    return this.raw_tags.split(', ').join(',').split(',')
  }
=======
>>>>>>> b023c57e028717b0e0a498537f3be49fdded1e03
}
module.exports = ProjectEntity
