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
    ProjectsModel.get({ slug: req.params.project }, true).then(project => {
      if (project && project.type === req.params.type) {
        this.ajaxView(req, res, 'portfolio/projects/' + project.view_name, { project })
      } else {
        res.notFound()
      }
    })
  }
}

module.exports = PortfolioController
