const ProjectsModel = require('@server/models/ProjectsModel')
const fs = require('fs')
const myAgeModel = require('../models/myAgeModel')

function getNextType (type) {
  const types = ['web', 'video', 'graphics', 'web']
  const index = types.indexOf(type)
  return types[index + 1]
}

class PortfolioController {
  web (req, res) {
    ProjectsModel.getByType('web').then(projects => {
      res.ajaxView('portfolio/web', { projects, pageTitle: 'Web et programmation | Léo Boyer - Portfolio' })
    })
  }

  graphics (req, res) {
    ProjectsModel.getByType('graphics').then(projects => {
      res.ajaxView('portfolio/graphics', { projects, pageTitle: 'Graphisme | Léo Boyer - Portfolio' })
    })
  }

  profile (req, res) {
    res.ajaxView('profile', { pageTitle: 'Profil | Léo Boyer - Portfolio', ...this._agingVars() })
  }

  av (req, res) {
    ProjectsModel.getByType('video').then(projects => {
      res.ajaxView('portfolio/video', { projects, pageTitle: 'Audiovisuel | Léo Boyer - Portfolio' })
    })
  }

  project (req, res) {
    ProjectsModel.getBySlugAndType(req.params.project, req.params.type).then(project => {
      if (project) {
        res.ajaxView('portfolio/components/projectDetails', { project, nextType: getNextType(req.params.type), pageTitle: `${project.title} | Léo Boyer - Portfolio` })
      } else {
        res.notFound()
      }
    })
  }

  index (req, res) {
    res.renderView('index', this._agingVars())
  }

  _agingVars () {
    return {
      myAge: myAgeModel.formatMyAge('2000-05-02'),
      yearsPassion: myAgeModel.myAge('2013-02-15').years
    }
  }
}

module.exports = PortfolioController
