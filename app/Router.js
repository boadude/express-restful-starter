'use strict';

let TodosMiddleware = autoload('/app/middlewares/TodosMiddleware');

module.exports = [{
  path: '/todos',
  middleware: [TodosMiddleware.checkAnything, TodosMiddleware.checkAnythingTwo],
  handler: autoload('./app/routes/TodosRoute'),
}, ];
