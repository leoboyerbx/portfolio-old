const ProjectsModel = require('@server/models/ProjectsModel')

class PortfolioController {
  ajaxView (req, res, view, locals = {}) {
    if (req.isAjax) {
      res.renderView(view, locals)
    } else {
      locals.page = view
      res.render('index', locals)
    }
  }

  web (req, res) {
    ProjectsModel.getByType('web').then(projects => {
      this.ajaxView(req, res, 'portfolio/web', { projects })
    })
  }

  av (req, res) {
    ProjectsModel.getByType('video').then(projects => {
      this.ajaxView(req, res, 'portfolio/video', { projects })
    })
  }

  project (req, res) {
    ProjectsModel.getBySlugAndType(req.params.project, req.params.type).then(project => {
      if (project) {
        this.ajaxView(req, res, 'portfolio/components/projectDetails', { project })
      } else {
        res.notFound()
      }
    })
  }
}

module.exports = PortfolioController
