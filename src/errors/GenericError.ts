import { CustomError } from "./base/CustomError";

export class GenericError extends CustomError {
    constructor(
        message:string
    ){
        super(message, 400)
    }
}