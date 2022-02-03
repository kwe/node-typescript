const server = require('./app');
import request from 'supertest';

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(server).get('/');
    expect(res.status).toEqual(200);
  });
});

afterAll((done) => {
  server.close();
  done();
});
