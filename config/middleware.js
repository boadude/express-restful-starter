'use strict';

let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let path = require('path');
let compression = require('compression');
let errorHandler = require('errorhandler');
let morgan = require('morgan');
let config = require('../config.json');

module.exports = function(app, express) {

  let environment = process.env.NODE_ENV || config.environment || 'development';

  if (environment == 'production') {
    app.use(compression());
  } else if (environment == 'development') {
    app.use(errorHandler());
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(methodOverride());
  app.use(morgan('combined'));
};
