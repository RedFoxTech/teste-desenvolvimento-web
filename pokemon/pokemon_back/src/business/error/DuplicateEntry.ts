import { BaseError } from "./BaseError";

export class DuplicateEntryError extends BaseError {
  constructor(message: string) {
    super(401, message);
  }
}