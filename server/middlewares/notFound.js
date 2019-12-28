function notFound (request, response, next) {
  response.notFound = function () {
    response.status(404)
    response.ajaxView('404')
  }
  next()
}
module.exports = notFound
