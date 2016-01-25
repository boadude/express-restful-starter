'use strict';

let config     = require('../config.json');
let request    = require('superagent');
let chai       = require('chai');
let expect     = chai.expect;
let assert     = chai.assert;

const URI      = `http://127.0.0.1:${config.port}`;

describe('Todos :', () => {

  describe('List :', () => {

    let response;

    before((done) => {
      request
       .get(`${URI}/todos`)
       .end(function(err, res){
         response = res;
         done();
       });
    });

    it('Should return 200 status code', () => {
      expect(response.status).to.equal(200);
    });

    it('Should be a Collection', () => {
      assert.isArray(response.body, 'Empty arrays');
    });
  });

});
