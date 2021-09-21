export class NotFound extends Error {
  constructor(stack: string) {
    super('Exam not found');
    this.name = 'ServerError';
    this.stack = stack;
  }
}
