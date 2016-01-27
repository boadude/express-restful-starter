'use strict';

/*
 * Todos Route
 * path: /todos
 */

let express = require('express');
let Controller = autoload('./app/controllers/TodosController');
let router = express.Router();

router.get('/', Controller.list);
router.post('/', Controller.create);
router.get('/test', Controller.index);

module.exports = router;
