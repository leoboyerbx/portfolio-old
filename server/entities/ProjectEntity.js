const path = require('path')
const md = require('markdown-it')()
const mila = require('markdown-it-link-attributes')

md.use(mila, {
  attrs: {
    target: '_blank',
    is: 'cursor-link',
    'cursor-class': 'hover1',
    class: 'underlined'
  }
})

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
    const images = this.parseCommaSeparated(imagesString)
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

  generateYoutubeHtml (url) {
    return `<div class="video">
        <div class="video-embed" is="cursor-hide">
            <iframe class="" src="${url}" allowfullscreen></iframe>
        </div>
    </div>`
  }

  get mediaHtml () {
    let result = ''
    switch (this.media_type) {
      case 'images':
        result = this.generateImagesHtml(this.media_content)
        break
      case 'youtube':
        result = this.generateYoutubeHtml(this.media_content)
    }
    return result
  }

  get descriptionHtml () {
    return md.render(this.description_md)
  }

  get tags () {
    return this.parseCommaSeparated(this.raw_tags)
  }

  get links () {
    if (this.buttons_links) {
      const links = this.parseCommaSeparated(this.buttons_links)
      return links.map(link => {
        const raw = link.split('-> ').join('->').split(' ->').join('->').split('->')
        return {
          title: raw[0],
          url: raw[1]
        }
      })
    }
    return undefined
  }

  get specs () {
    return this.parseCommaSeparated(this.raw_specs)
  }

  parseCommaSeparated (string) {
    return string.split(', ').join(',').split(',')
  }
}
module.exports = ProjectEntity
