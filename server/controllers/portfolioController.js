class PortfolioController {
  ajaxView (req, res, view) {
    if (req.isAjax) {
      res.renderView(view)
    } else {
      res.render('index', { page: view })
    }
  }

  web (req, res) {
    this.ajaxView(req, res, 'portfolio/web')
  }
  av (req, res) {
    this.ajaxView(req, res, 'portfolio/audiovisuel')
  }
}

module.exports = PortfolioController
