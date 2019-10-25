export class ValidationError extends Error {
    constructor(message, statusCode) {
        super(message, statusCode);

        Error.captureStackTrace(this, ValidationError);
        this.name = 'ValidationError';
        this.statusCode = statusCode || 400;
    }
}
