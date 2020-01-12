/* global __viewsPath */
const path = require('path')
const analyticsID = require('@app').getInstance().getAnalyticsId()

module.exports = function renderView (request, response, next) {
  response.renderView = function (view, locals = undefined, callback = undefined) {
    if (locals === undefined) {
      locals = {}
    }
    locals['analyticsID'] = analyticsID
    response.render(path.join(__viewsPath, view), locals, callback)
  }
  response.ajaxView = function (view, locals = {}) {
    if (request.isAjax) {
      response.header('Page-Title', locals.pageTitle ? locals.pageTitle : 'Léo Boyer - Portfolio')
      response.renderView(view, locals)
    } else {
      locals.page = view
      response.renderView('index', locals)
    }
  }
  next()
}
