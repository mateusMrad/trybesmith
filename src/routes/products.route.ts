import { Router } from 'express';
import productsController from '../controller/products.controller';

const productsRouter = Router();

productsRouter.post('/products', productsController.createProd);
productsRouter.get('/products', productsController.listProds);

export default productsRouter;
