'use strict';

let TodosServices = autoload('./app/services/TodosService');
let Promises = require("bluebird");

let controller = {

  list: function(req, res) {

    let query = Promises.all(TodosServices.listAll());

    query.then(todos => {
      res.send(todos);
    });

    query.catch(err => {
      console.error(err);
    });
  },

  find: function(req, res) {

    let params = {
      id: req.params.id
    };

    let query = TodosServices.find(params);

    query.then((result) => {

      if (result === null) {
        res.status(404).send({
          'text': 'Not found'
        });
      } else {
        res.send(result);
      }
    });

    query.catch((err) => {
      console.error(err);
    });
  },

  create: function(req, res) {

    let params = {
      text: req.body.text
    };

    let query = TodosServices.create(params);

    query.then((result) => {
      res.send({
        'id': result.get('id'),
        'text': 'ok'
      });
    });

    query.catch((err) => {
      console.error(err);
    });
  },

  update: function(req, res) {

    let sets = {
      text: req.body.text
    };

    let params = {
      id: req.params.id
    };

    let query = TodosServices.update(params, sets);

    query.then((result) => {

      if (result[0] === 0) {
        res.status(404).send({
          'text': 'Not found!'
        });
      } else {
        res.send({
          'text': 'Updated!'
        });
      }
    });

    query.catch((err) => {
      console.error(err);
    });
  },

  destroy: function(req, res) {

    let params = {
      id: req.params.id
    };

    let query = TodosServices.destroy(params);

    query.then((result) => {

      if (result === 0) {
        res.status(404).send({
          'text': 'Not found!'
        });
      } else {
        res.send({
          'text': 'Deleted!'
        });
      }
    });

    query.catch((err) => {
      console.error(err);
    });
  },
};

module.exports = controller;
