const server = require('./app');
import request from 'supertest';

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(server).get('/');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({ message: 'Hello World' });
  });
});

describe('GET /login', () => {
  it('should return 200 OK', async () => {
    const res = await request(server).get('/login');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({ message: 'Login' });
  });
});

describe('GET /query', () => {
  it('should return 200 OK', async () => {
    const res = await request(server).get('/query');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({ message: 'Query' });
  });
});

afterAll((done) => {
  server.close();
  done();
});
