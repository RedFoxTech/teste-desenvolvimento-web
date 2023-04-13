type HttpStatusCode = 200 | 400 | 404 | 500;

export interface iHttpError extends Error {
  name: string;
  statusCode: HttpStatusCode;
  message: string;
}

export class HttpError extends Error {
  name: string;
  statusCode: HttpStatusCode;
  message: string;

  constructor({ name, statusCode, message }: iHttpError) {
    super();
    this.name = name;
    this.statusCode = statusCode;
    this.message = message;
  }
}
