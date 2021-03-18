const request = require('supertest');
const app = require('../../../index');

it('should respond with 200', () => request(app)
  .post('/v1/fortnitepy/hit')
  .send()
  .expect(200)
  .expect({ status: 200 }));
