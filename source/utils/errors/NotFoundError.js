export class NotFoundError extends Error {
    constructor(message, statusCode) {
        super(message, statusCode);

        Error.captureStackTrace(this, NotFoundError);
        this.name = 'NotFoundError';
        this.statusCode = statusCode || 404;
    }
}
