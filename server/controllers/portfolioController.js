const ProjectsModel = require('@server/models/ProjectsModel')
const fs = require('fs')

function getNextType (type) {
  const types = ['web', 'video', 'graphics', 'web']
  const index = types.indexOf(type)
  return types[index + 1]
}

class PortfolioController {
  web (req, res) {
    ProjectsModel.getByType('web').then(projects => {
      res.ajaxView('portfolio/web', { projects })
    })
  }

  graphics (req, res) {
    ProjectsModel.getByType('graphics').then(projects => {
      res.ajaxView('portfolio/graphics', { projects })
    })
  }

  profile (req, res) {
    res.ajaxView('profile')
  }

  av (req, res) {
    ProjectsModel.getByType('video').then(projects => {
      res.ajaxView('portfolio/video', { projects })
    })
  }

  project (req, res) {
    ProjectsModel.getBySlugAndType(req.params.project, req.params.type).then(project => {
      if (project) {
        fs.access(project.viewPath, fs.constants.F_OK, (err) => {
          if (!err) {
            res.ajaxView('portfolio/components/projectDetails', { project, nextType: getNextType(req.params.type) })
          } else {
            res.notFound()
          }
        })
      } else {
        res.notFound()
      }
    })
  }
}

module.exports = PortfolioController
