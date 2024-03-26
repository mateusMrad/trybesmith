import { Product } from './Product';
import { httpErrorMap } from '../utils/httpMap';

export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
  productIds?: Product[];
};

export type Data = {
  username: string,
  productIds?: number[],
};

export type UserReturn = {
  status: keyof typeof httpErrorMap;
  data: Data[]
};

export type LoginT = {
  username: string,
  password: string,
};

export type TokenT = {
  token: string,
};