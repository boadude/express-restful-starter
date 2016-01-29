'use strict';

let config = require('../config.json');
let chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

let expect = chai.expect;

let TodosServices = require('../app/services/TodosService');

const URI = 'http://127.0.0.1:' + config.port;

describe('Todos :', () => {

  let idTodoRecord;
  const url = '/todos';

  before((done) => {
    let params = {
      text: 'OK, go to the shop and buy something, now!'
    };

    TodosServices.create(params)
      .then((results) => {
        idTodoRecord = results.get('id');

        done();
      });
  });

  after((done) => {
    let params = {
      id: idTodoRecord
    };

    TodosServices.destroy(params);

    done();
  });

  it('Should LIST ALL Todos on /todos GET', (done) => {

    chai.request(URI)
      .get(url)
      .end(function(err, res) {

        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body[0]).to.have.all.keys('id', 'text');
        expect(res.body[0].text).to.be.a('string');

        done();
      });
  });

  it('Should FIND a SINGLE Todos on /todos/:id GET', (done) => {

    chai.request(URI)
      .post('/jwt')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.all.keys('token');
        expect(res.body.token).to.be.a('string');

        let token = res.body.token;

        chai.request(URI)
          .get(url + '/' + idTodoRecord)
          .set('authorization', 'Bearer ' + token)
          .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.have.all.keys('id', 'text');
            expect(res.body.text).to.be.a('string');

            done();
          });

      });
  });

  it('Should NOT FIND a SINGLE Todos on /todos/:id GET', (done) => {

    chai.request(URI)
      .post('/jwt')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.all.keys('token');
        expect(res.body.token).to.be.a('string');

        let token = res.body.token;

        chai.request(URI)
          .get(url + '/XXX')
          .set('authorization', 'Bearer ' + token)
          .end(function(err, res) {
            expect(res).to.have.status(404);
            expect(res).to.be.json;
            expect(res.body).to.have.all.keys('text');
            expect(res.body.text).to.be.a('string');
            expect(res.body.text).to.equal('Not found');

            done();
          });

      });
  });

  it('Should ADD a SINGLE Todos on /todos POST', (done) => {

    chai.request(URI)
      .post(url)
      .send({
        'text': 'Hi text!'
      })
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.all.keys('id', 'text');
        expect(res.body.text).to.be.a('string');
        expect(res.body.text).to.equal('ok');

        let id = res.body.id;

        done();
      });
  });

  it('Should DELETE a SINGLE Todos on /todos/:id DELETE', (done) => {

    chai.request(URI)
      .post(url)
      .send({
        'text': 'Hi text!'
      })
      .end(function(err, res) {
        let id = res.body.id;

        chai.request(URI)
          .delete(url + '/' + id)
          .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.have.all.keys('text');
            expect(res.body.text).to.be.a('string');
            expect(res.body.text).to.equal('Deleted!');

            done();
          });
      });

  });

  it('Should NOT FIND FOR DELETE a SINGLE Todos on /todos/:id DELETE', (done) => {

    chai.request(URI)
      .post(url)
      .send({
        'text': 'Hi text!'
      })
      .end(function(err, res) {
        let id = res.body.id;

        chai.request(URI)
          .delete(url + '/XXX')
          .end(function(err, res) {
            expect(res).to.have.status(404);
            expect(res).to.be.json;
            expect(res.body).to.have.all.keys('text');
            expect(res.body.text).to.be.a('string');
            expect(res.body.text).to.equal('Not found!');

            done();
          });
      });

  });

  it('Should UPDATE a SINGLE Todos on /todos/:id PUT', (done) => {

    chai.request(URI)
      .put(url + '/' + idTodoRecord)
      .send({
        'text': 'I forget something in the house, sh*t!'
      })
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.all.keys('text');
        expect(res.body.text).to.be.a('string');
        expect(res.body.text).to.equal('Updated!');

        done();
      });

  });

  it('Should NOT FIND FOR UPDATE a SINGLE Todos on /todos/:id PUT', (done) => {

    chai.request(URI)
      .put(url + '/XXX')
      .send({
        'text': 'I forget something in the house, sh*t!'
      })
      .end(function(err, res) {
        expect(res).to.have.status(404);
        expect(res).to.be.json;
        expect(res.body).to.have.all.keys('text');
        expect(res.body.text).to.be.a('string');
        expect(res.body.text).to.equal('Not found!');

        done();
      });

  });

});
