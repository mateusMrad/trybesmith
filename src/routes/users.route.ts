import { Router } from 'express';
import usersController from '../controller/users.controller';

const usersRouter = Router();

usersRouter.get('/users', usersController.listUsers);

export default usersRouter;