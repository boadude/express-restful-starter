'use strict';

require('./utils/autoload')();
let config = require('./config.json');

let express = require('express');
let http = require('http');

let PORT = process.env.PORT || config.port || 3000;

let Router = autoload('app/Router');
let app = express();
let server = http.createServer(app);

/* MIDDLEWARE */
require('./config/middleware')(app, express);

/* ROUTES */
Router.forEach(route => {
  app.use(route.path, route.middleware, route.handler);
});

/* ERRORS */
app.use(function(req, res, next) {
  res.status(404);

  res.json({
    error: 'Not found'
  });
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);

  res.json({
    error: err.message
  });
});

/* START SERVER */
server.listen(PORT);
console.log('Server ' + config.name + ' started on 127.0.0.1:' + PORT + '\n');
