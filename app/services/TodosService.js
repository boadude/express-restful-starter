'use strict';

let Todo = autoload('app/models/Todo');

class TodoServices {

  listAll() {

    return Todo.findAll();
  }

  create(params) {

    return Todo
      .create(params);
  }
}

module.exports = new TodoServices();
