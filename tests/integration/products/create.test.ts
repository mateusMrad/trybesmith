import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock'
import app from '../../../src/app'

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('retornando status 201, quando cria um produto', async function () {
    const product = productModel.build(productsMock.martelo);
    sinon.stub(productModel, 'create').resolves(product);

    const response = await chai.request(app).post('/products').send(productsMock.martelo);

    expect(response).to.have.status(201);
    expect (response.body).to.be.deep.equal(product.dataValues);
  })
});
