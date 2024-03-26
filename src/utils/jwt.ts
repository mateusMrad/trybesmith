import jwt from 'jsonwebtoken';

export type Payload = {
  password: string, 
  username: string,
};

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const newToken = (payload: Payload): string => {
  const tkn = jwt.sign(payload, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '7d',
  });
  return tkn;
};

export default {
  newToken,
};