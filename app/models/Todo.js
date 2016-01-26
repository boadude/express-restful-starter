'use strict';

let db = autoload('config/db');

let Todo = db.define('todo', {
  text: {
    type: db.Sequelize.STRING,
  }
}, {
  timestamps: false
});

module.exports = Todo;
