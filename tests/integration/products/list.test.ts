import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('retorna status 200, e a lista de produtos', async function () {
    const list = [
      productModel.build(productsMock.listOfProducts[0]),
      productModel.build(productsMock.listOfProducts[1]),
    ]

    sinon.stub(productModel, 'findAll').resolves(list);

    const response = await chai.request(app).get('/products');

    expect(response).to.have.status(200);
    expect(response.body).to.be.deep.eq(productsMock.listOfProducts)
  })
});
