import { HttpResponse } from '.';

export const success = (content: any): HttpResponse => ({
  statusCode: 200,
  body: content,
});

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});
