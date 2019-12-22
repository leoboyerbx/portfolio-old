function notFound (request, response, next) {
  response.notFound = function () {
    response.status(404).end('Not found !')
  }
  next()
}
module.exports = notFound
