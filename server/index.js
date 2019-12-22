/* global __root */
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const serverApp = express()
const http = require('http').createServer(serverApp)

const PortfolioController = require(path.join(__root, 'server/controllers/portfolioController'))

module.exports = function () {
  serverApp.set('view engine', 'ejs')

  serverApp.use(bodyParser.json())
  serverApp.use(bodyParser.urlencoded({ extended: true }))
  serverApp.use('/assets', express.static('public/assets'))
  serverApp.use('/user', express.static('public/userContent'))
  serverApp.use(require('./middlewares/isAjax'))
  serverApp.use(require('./middlewares/renderView'))
  serverApp.use(require('./middlewares/notFound'))

  const portfolioController = new PortfolioController()

  serverApp.get('/', (req, res) => {
    res.renderView('index')
  })
  serverApp.get('/web', (req, res) => {
    portfolioController.web(req, res)
  })
  serverApp.get('/video', (req, res) => {
    portfolioController.av(req, res)
  })
  serverApp.use(function (req, res, next) {
    res.notFound()
    next()
  })

  http.listen(process.env.PORT || 3000, () => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`)
  })
}
