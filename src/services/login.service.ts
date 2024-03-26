import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { HttpResponse } from '../types/HttpResponse';
import { LoginT, TokenT } from '../types/User';
import jwt from '../utils/jwt';

async function login({ username, password }: LoginT): Promise<HttpResponse<TokenT>> {
  if (!username || !password) {
    return { status: 'BAD_REQUEST', data: { message: '"username" and "password" are required' } };
  }

  const user = await UserModel.findOne({ where: { username } });

  if (user === null || !bcrypt.compareSync(password, user.getDataValue('password'))) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  
  const token = jwt.newToken({ username, password });

  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  login,
};