'use strict';

let jwt = require('jsonwebtoken');
let config = require('../../config.json');

const secret = config.secret;

let service = {

  createToken: function(){

    var token = jwt.sign({'text': 'A encryption text, hidden in the token.'}, secret, {
      expiresInMinutes: 1440
    });

    return token;
  }
};

module.exports = service;
