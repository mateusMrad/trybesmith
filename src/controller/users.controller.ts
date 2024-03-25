import { Request, Response } from 'express';
import usersService from '../services/users.service';
import { httpMap } from '../utils/httpMap';

async function listUsers(req: Request, res: Response): Promise<Response> {
  const { data, status } = await usersService.listUsers();
  return res.status(httpMap(status)).json(data);
}

export default {
  listUsers,
};