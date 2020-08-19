import { CustomError } from "./base/CustomError";

export class InvalidInputError extends CustomError {
    constructor(
        message:string
    ){
        super(message, 421)
    }
}