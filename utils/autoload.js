'use strict';

let path = require('path');

module.exports = function() {

  global.autoload = function(name) {

    return require(path.normalize(__dirname + '/../' + name));
  };
};
