function isAjax (request, response, next) {
  request.isAjax = request.headers['x-requested-with'] === 'xmlhttprequest'
  next()
}
module.exports = isAjax
