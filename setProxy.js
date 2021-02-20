cosnt porxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.ues (
    proxy('/api', {
      target : 'https://localhost:3001/'
    })
  )
}