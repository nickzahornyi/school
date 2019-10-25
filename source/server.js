// Core
import express from 'express';
import bodyParser from 'body-parser';

import { logger } from './utils';
//Routers
import * as routers from './routers';
import {
    errorLogger,
    notFoundLogger,
    validationLogger,
} from './utils/errorLoggers';
import { NotFoundError } from './utils/errors';

const app = express();

app.use(bodyParser.json({ limit: '10kb' }));

if (process.env.NODE_ENV === 'development') {
    app.use(logger);
}

app.use('/', routers.auth);
app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);

app.use((req, res, next) => {
    next(new NotFoundError(`Not Found - method: ${req.method}, endpoint: ${req.url}`));
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    if (error.name === 'NotFoundError') {
        notFoundLogger(req.method, req.url);
    } else if (error.name === 'ValidationError') {
        validationLogger(error, req);
    } else {
        errorLogger(error);
    }
    res.status(500).json({ message: error.message });
});

export { app };
