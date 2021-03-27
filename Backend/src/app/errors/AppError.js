class AppError extends Error {
    constructor(message, statusCode = 400) {
        super(message)

        this.name = this.constructor.name

        this.statusCode = statusCode
    }
}

export default AppError
