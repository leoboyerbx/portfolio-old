const sitemap = require('express-sitemap')
const ProjectsModel = require('../models/ProjectsModel')
// const date = new Date().toISOString()

async function generateSitemap () {
  const projects = await ProjectsModel.all()
  const types = ['web', 'video', 'graphics']

  const map = {
    '/': ['get']
  }
  const route = {
    '/': {
      // lastmod: date,
      changefreq: 'weekly',
      priority: 1
    }
  }
  types.forEach(type => {
    map['/' + type] = ['get']
    route['/' + type] = {
      // lastmod: date,
      changefreq: 'daily',
      priority: 0.80
    }
  })
  projects.forEach(project => {
    map[project.path] = ['get']
    route[project.path] = {
      // lastmod: date,
      changefreq: 'daily',
      priority: 0.64
    }
  })
  const options = {
    url: 'www.leoboyer.fr',
    map,
    route
  }
  return sitemap(options)
}

module.exports = async function (serverApp) {
  const generatedSitemap = await generateSitemap()
  serverApp.get('/sitemap.xml', (req, res) => {
    console.log('hey')
    generatedSitemap.XMLtoWeb(res)
  })
  serverApp.get('/robots.txt', (req, res) => {
    generatedSitemap.TXTtoWeb(res)
  })
  return true
}
