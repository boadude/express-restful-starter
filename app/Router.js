'use strict';

let TodosMiddleware = autoload('/app/middlewares/TodosMiddleware');

module.exports = [{
  path: '/todos',
  middleware: [TodosMiddleware.checkAnything, TodosMiddleware.checkAnythingTwo],
  handler: autoload('./app/routes/TodosRoute')
},{
  path: '/jwt',
  middleware: [],
  handler: autoload('./app/routes/JWTRoute')
}];
