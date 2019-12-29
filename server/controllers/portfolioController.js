const ProjectsModel = require('@server/models/ProjectsModel')
const path = require('path')
const fs = require('fs')

class PortfolioController {

  web (req, res) {
    ProjectsModel.getByType('web').then(projects => {
      res.ajaxView('portfolio/web', { projects })
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
            res.ajaxView('portfolio/components/projectDetails', { project })
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
