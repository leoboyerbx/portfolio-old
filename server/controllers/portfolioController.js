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
    this.ajaxView(req, res, 'portfolio/audiovisuel')
  }
}

module.exports = PortfolioController
