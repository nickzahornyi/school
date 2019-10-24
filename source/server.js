// Core
import express from 'express';
import bodyParser from 'body-parser';

//Routers
import * as routers from './routers';
import { errorLogger } from './utils/errorLogger';

const app = express();

app.use(bodyParser.json({ limit: '10kb' }));

app.use('/', routers.auth);
app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    errorLogger(error);
    res.status(500).json({ message: error.message });
});

export { app };
