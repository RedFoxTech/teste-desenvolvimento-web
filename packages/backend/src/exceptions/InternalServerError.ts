import HttpException from "./HttpException";

class InternalServerError extends HttpException {
    constructor(message: string = "Erro interno no servidor") {
        super(500, message);
    }
}

export default InternalServerError;
