import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { HttpResponse } from '../types/HttpResponse';

async function createProd(prod: ProductInputtableTypes): Promise<HttpResponse<Product>> {
  const newProd = await ProductModel.create(prod);

  return { status: 'CREATED', data: newProd.dataValues };
}

export default {
  createProd,
};