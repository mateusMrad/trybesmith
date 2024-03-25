import { httpErrorMap } from '../utils/httpMap';

type Message = {
  message:string;
};

export type HttpResponse<T> = {
  status: keyof typeof httpErrorMap;
  data: T | Message
};