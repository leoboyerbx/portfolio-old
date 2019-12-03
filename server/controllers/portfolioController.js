class PortfolioController {
  web (req, res) {
    if (req.isAjax) {
      res.renderView('portfolio/web')
    } else {
      res.render('index', { page: 'portfolio/web' })
    }
  }
}

module.exports = PortfolioController
