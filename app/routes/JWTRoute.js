'use strict';

/*
 * JWT Route
 * path: /jwt
 */

let express = require('express');
let Controller = autoload('./app/controllers/JWTController');
let router = express.Router();

router.post('/', Controller.createToken); // POST /todos

module.exports = router;
