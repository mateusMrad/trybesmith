import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import userModel from '../../../src/database/models/user.model'

chai.use(chaiHttp);

describe('GET /users', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Retorna o status 200', async function () {
    const users = [
      userModel.build({
      id: 1,
      username: "German Cano",
      vocation: "Striker",
      level: 1,
      password: "bolanarede",
      productIds: [
        {
          id: 1,
          name: "chuteira",
          price: "20",
          userId: 1,
        },
        {
          id: 2,
          name: "bola",
          price: "10",
          userId: 1,
        }
      ]
    }),
    userModel.build({
      id: 2,
      username: "FM",
      vocation: "Defender",
      level: 2,
      password: "carrinho",
      productIds: [
        {
          id: 3,
          name: "Faixa de Capitao",
          price: "50",
          userId: 1,
        },
        {
          id: 4,
          name: "Meiao",
          price: "12",
          userId: 1,
        }
      ]
    }),
    ];

    sinon.stub(userModel, 'findAll').resolves(users);
    const response = await chai.request(app).get('/users');

    expect(response).to.have.status(200);
  })
});
