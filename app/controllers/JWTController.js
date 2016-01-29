'use strict';

let JWTServices = autoload('./app/services/JWTService');
let Promises = require("bluebird");

let controller = {

  createToken: function(req, res) {

    let token = JWTServices.createToken();

    res.send({'token': token});
  }
};

module.exports = controller;
