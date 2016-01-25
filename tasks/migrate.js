'use strict';
require('../utils/rootRequire')();

let Todo = autoload('app/models/Todo');

Todo.sync().then(() => {
  console.log('Table "Todo" created');
});
