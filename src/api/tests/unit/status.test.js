const request = require('supertest');
const app = require('../../../index');

it('should respond with 200', () => request(app)
  .post('/v1/status')
  .send()
  .expect(200)
  .expect({ status: 'OK' }));

it('should respond with 200', () => request(app)
  .get('/v1/status')
  .send()
  .expect(200)
  .expect({ status: 'OK' }));

it('should respond with 200', () => request(app)
  .post('/v1/fortnitepy/status')
  .send()
  .expect(200)
  .expect({ status: 'fortnitepy OK' }));

it('should respond with 200', () => request(app)
  .get('/v1/fortnitepy/status')
  .send()
  .expect(200)
  .expect({ status: 'fortnitepy OK' }));
