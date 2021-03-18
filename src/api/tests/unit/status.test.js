const request = require('supertest');
const app = require('../../../config/express');

it('should respond with 200', (done) => {
  request(app)
    .post('/v1/status')
    .send()
    .expect({ status: 'OK' })
    .end((err) => {
      if (err) {
        return done(err);
      }
      done();
    });
});

it('should respond with 200', (done) => {
  request(app)
    .get('/v1/status')
    .send()
    .expect({ status: 'OK' })
    .end((err) => {
      if (err) {
        return done(err);
      }
      done();
    });
});

it('should respond with 200', (done) => {
  request(app)
    .post('/v1/fortnitepy/status')
    .send()
    .expect({ status: 'fortnitepy OK' })
    .end((err) => {
      if (err) {
        return done(err);
      }
      done();
    });
});

it('should respond with 200', (done) => {
  request(app)
    .get('/v1/fortnitepy/status')
    .send()
    .expect({ status: 'fortnitepy OK' })
    .end((err) => {
      if (err) {
        return done(err);
      }
      done();
    });
});
