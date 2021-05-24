/* global __viewsPath */
const path = require('path')
const myAgeModel = require('../models/myAgeModel')
const analyticsID = require('@app').getInstance().getAnalyticsId()

function _agingVars () {
  return {
    myAge: myAgeModel.formatMyAge('2000-05-02'),
    yearsPassion: myAgeModel.myAge('2013-02-15').years
  }
}

module.exports = function renderView (request, response, next) {
  response.renderView = function (view, locals = undefined, callback = undefined) {
    if (locals === undefined) {
      locals = {}
    }
    locals['analyticsID'] = analyticsID
    response.render(path.join(__viewsPath, view), { ...locals, ..._agingVars() }, callback)
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
