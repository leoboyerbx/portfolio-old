const path = require('path')
global._path = path
global.__root = __dirname
global.__viewsPath = path.join(__root, 'views')
require('./server/index')()

// require('module-alias/register')
// global.__root = __dirname
//
// const http = require('http');
// const hmr = require('node-hmr');
//
// let app;
//
// hmr(() => {
//   app = require('./server/index');
// }, { watchDir: './server/' });
//
// const server = http.createServer((req, res) => app(req, res));
// server.listen(process.env.PORT || 3000,() => {
//   console.log(`App Started on PORT ${process.env.PORT || 80}`)
// })

