export abstract class BaseError extends Error {
  constructor(public errorCode: number, message: string) {
    super(message);
  }
}
