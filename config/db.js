'use strict';

let Sequelize = require('sequelize');
let config = require('../config.json');

let server = process.env.SERVER || config.database.server;
let database = process.env.DB || config.database.db;
let username = process.env.USERNAME || config.database.username;
let password = process.env.PASSWORD || config.database.password;
let dialect = process.env.DIALECT || config.database.dialect;

let db = new Sequelize(database, username, password, {
  host: server,
  dialect: dialect,
  logging: false
});

db.Sequelize = Sequelize;

module.exports = db;
