export class ServerError extends Error {
  constructor(stack: string) {
    super('Hi! An unexpected error has ocurred. Try again later.');
    this.name = 'ServerError';
    this.stack = stack;
  }
}
