import { BaseError } from "./BaseError";

export class InvalidParameterError extends BaseError {
  constructor(message: string) {
    super(401, message);
  }
}
