'use strict';

let Todo = autoload('app/models/Todo');

class TodoController {

  list(req, res) {

    Todo.findAll()
      .then(todos => {
        res.json(todos);
      })
      .catch(err => {
        console.error(err);
      });
  }

  create(req, res) {

    let {
      text
    } = req.body;

    Todo
      .create({
        text
      })
      .then(() => {
        res.send('OK');
      })
      .catch(err => {
        console.error(err);
      });
  }
}

module.exports = new TodoController();
