'use strict';

let Todo = autoload('app/models/Todo');

let service = {

  listAll() {

    return Todo.findAll();
  },

  create(params) {

    return Todo
      .create(params);
  }
};

module.exports = service;
