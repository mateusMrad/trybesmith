import express from 'express';
import productsRouter from './routes/products.route';
import usersRouter from './routes/users.route';
import loginRouter from './routes/login.route';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(usersRouter);
app.use(loginRouter);

export default app;
