import { BaseError } from "./BaseError";

export class InvalidParameterError extends BaseError {
  constructor(message: string) {
    super(400, message);
  }
}