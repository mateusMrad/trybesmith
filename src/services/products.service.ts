import ProductModel, { ProductInputtableTypes, 
  ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';
import { HttpResponse } from '../types/HttpResponse';

async function createProd(prod: ProductInputtableTypes): Promise<HttpResponse<Product>> {
  const newProd = await ProductModel.create(prod);

  return { status: 'CREATED', data: newProd.dataValues };
}

async function listProds(): Promise<HttpResponse<ProductSequelizeModel[]>> {
  const prods = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: prods };
}

export default {
  createProd,
  listProds,
};