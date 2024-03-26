import { Router } from 'express';
import productsController from '../controller/products.controller';
import validations from '../middlewares/validations.middlewares';

const productsRouter = Router();

productsRouter.post(
  '/products',
  validations.nameCheck,
  validations.priceCheck,
  validations.userIdCheck,
  productsController.createProd,
);
productsRouter.get('/products', productsController.listProds);

export default productsRouter;
