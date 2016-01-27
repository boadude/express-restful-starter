'use strict';

let middleware = {

  checkAnything(req, res, next) {

    if ("Hola" === "Hola") {
      next();
    } else {
      res.json({
        error: "Don't pass, middleware is here."
      });
    }
  },

  checkAnythingTwo(req, res, next) {

    if ("Miguel" === "Miguel") {
      next();
    } else {
      res.json({
        error: "Don't pass, middleware two is here."
      });
    }
  }
};

module.exports = middleware;
