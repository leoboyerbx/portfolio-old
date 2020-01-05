const sitemap = require('express-sitemap')
const ProjectsModel = require('../models/ProjectsModel')

async function generateSitemap () {
  const projects = await ProjectsModel.all()
  const options = {
    url: 'www.leoboyer.fr',
  }
}

module.exports = function (serverApp) {
  const generatedSitemap = sitemap({
    url: 'www.leoboyer.fr',
    sitemap: 'sitemap.xml',
    map: {
      '/foo': ['get'],
      '/foo2': ['get','post'],
      '/admin': ['get'],
      '/backdoor': [],
    },
    route: {
      '/foo': {
        lastmod: '2014-06-20',
        changefreq: 'always',
        priority: 1.0,
      },
      '/admin': {
        disallow: true,
      },
      '/backdoor': {
        hide: true,
      }
    }
  })
  serverApp.get('/sitemap.xml', (req, res) => {
    generatedSitemap.XMLtoWeb(res)
  })
  serverApp.get('/robots.txt', (req, res) => {
    generatedSitemap.TXTtoWeb(res)
  })
}
