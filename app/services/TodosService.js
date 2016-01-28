'use strict';

let Todo = autoload('app/models/Todo');

let service = {

  listAll: function() {

    return Todo.findAll();
  },

  create: function(params) {

    return Todo
      .create(params);
  }
};

module.exports = service;
