import winston from 'winston';

export const log = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({
            level: 'debug',
            colorize: true,
        }),
    ],
    exitOnError: false,
});

export const logger = (req, res, next) => {
    log.debug(
        `method: ${req.method}, date: ${new Date()}, payload: ${JSON.stringify(req.body)}`,
    );
    next();
};
