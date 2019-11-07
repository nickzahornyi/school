// Core
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

import { debugLogger } from './utils';
import { getPassword } from './utils/env';
//Routers
import * as routers from './routers';
import { errorLogger, notFoundLogger, validationLogger } from './utils/errorLoggers';
import { NotFoundError } from './utils/errors';

const app = express();

const PASSWORD = getPassword();

const sessionOptions = {
    key: 'user',
    secret: PASSWORD,
    resave: false,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
    },
};

const passportJwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PASSWORD,
};

app.use(bodyParser.json({ limit: '10kb' }));
app.use(session(sessionOptions));
passport.use(
    new Strategy(passportJwtOptions, function(jwt_payload, done) {
        return done(null, true);
    })
);
app.use(passport.initialize());

if (process.env.NODE_ENV === 'development') {
    app.use(debugLogger);
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
    switch (error.name) {
        case 'NotFoundError':
            notFoundLogger(req.method, req.url);
            break;
        case 'ValidationError':
            validationLogger(req.method, req.url);
            break;
        default:
            errorLogger(error);
    }

    res.status(500).json({ message: error.message });
});

export { app };
