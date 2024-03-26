import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('retorna um erro de status 400 se nao for enviado password', async function () {
    const response = await chai.request(app).post('/login').send({ username: 'usuario' });
    expect(response).to.have.status(400);
    expect(response.body).to.have.property('message').eq('"username" and "password" are required');
  });
  it('retorna um erro de status 400 se nao for enviado username', async function () {
    const response = await chai.request(app).post('/login').send({ password: '555' });
    expect(response).to.have.status(400);
    expect(response.body).to.have.property('message').eq('"username" and "password" are required');
  });
  it('retorna um erro de status 401 se nao for enviado parametro valido', async function () {
    const response = await chai.request(app).post('/login').send({username: 'usuario', password: '555' });
    expect(response).to.have.status(401);
    expect(response.body).to.have.property('message').eq('Username or password invalid');
  })
});
