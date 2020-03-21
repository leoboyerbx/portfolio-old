const path = require('path')

class ProjectEntity {
  constructor (data) {
    for (const prop in data) {
      this[prop] = data[prop]
    }
  }

  get viewPath () {
    return path.join(__viewsPath, 'projects', this.type, this.view_name) + '.ejs'
  }

  get path () {
    return `/${this.type}/${this.slug}`
  }

  get imgPath () {
    return '/user/projects/img/thumbnails/' + this.img_name
  }

  generateImagesHtml (imagesString) {
    const images = imagesString.split(', ').join(',').split(',')
    let markup = `<div class="images">`
    images.map(imagePath => {
      if (imagePath === 'break') {
        markup += `</div><div class="images">`
      } else {
        markup += `<a is="cursor-link" cursor-class="zoom" class="img-wrapper"><img is="lightbox-img" src="${imagePath}" alt="" class="img-project"></a>`
      }
    })
    markup += '</div>'
    return markup
  }

  get mediaHtml () {
    if (this.media_type === 'images') {
      return this.generateImagesHtml(this.media_content)
    }
    return ''
  }

  get tags () {
    return this.raw_tags.split(', ').join(',').split(',')
  }

  get specs () {
    return this.raw_specs.split(', ').join(',').split(',')
  }
}
module.exports = ProjectEntity
