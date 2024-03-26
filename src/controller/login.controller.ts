import { Request, Response } from 'express';
import loginService from '../services/login.service';
import { httpMap } from '../utils/httpMap';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  const { data, status } = await loginService.login({ username, password });
  return res.status(httpMap(status)).json(data);
}

export default {
  login,
};