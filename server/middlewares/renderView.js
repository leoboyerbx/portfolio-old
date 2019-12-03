/* global __viewsPath */
const path = require('path')
module.exports = function renderView (request, response, next) {
  response.renderView = function (view, locals = undefined, callback = undefined) {
    response.render(path.join(__viewsPath, view), locals, callback)
  }
  next()
}
