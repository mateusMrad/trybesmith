import { Request, Response } from 'express';
import productsService from '../services/products.service';
import { httpMap } from '../utils/httpMap';

async function createProd(req: Request, res: Response) {
  const { id, name, price, userId } = req.body;
  const { data, status } = await productsService.createProd({ id, name, price, userId });
  return res.status(httpMap(status)).json(data);
}

export default {
  createProd,
};