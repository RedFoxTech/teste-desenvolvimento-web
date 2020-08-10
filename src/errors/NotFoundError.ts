import { CustomError } from "./base/CustomError";

export class NotFoundError extends CustomError {
    constructor(
        message:string
    ){
        super(message, 404)
    }
}