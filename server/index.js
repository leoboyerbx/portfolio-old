/* global __viewsPath */
module.exports = function () {
  const path = require('path')
  const express = require('express')
  const bodyParser = require('body-parser')

  const serverApp = express()
  const http = require('http').createServer(serverApp)

  serverApp.set('view engine', 'ejs')

  serverApp.use(bodyParser.json())
  serverApp.use(bodyParser.urlencoded({ extended: true }))
  serverApp.use('/assets', express.static('public/assets'))

  serverApp.get('/', (req, res) => {
    res.render(path.join(__viewsPath, 'index'), {path})
  })
  serverApp.get('/web', (req, res) => {

  })

  http.listen(process.env.PORT || 3000, () => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`)
  })
}
