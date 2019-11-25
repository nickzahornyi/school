import mongoose from 'mongoose';
import dg from 'debug';

import { getDB } from '../utils/env';

const debug = dg('db');
const { DB_URL, DB_PORT, DB_NAME } = getDB();

const mongooseOptions = {
    promiseLibrary: global.Promise,
    poolSize: 50,
    keepAlive: 30000,
    connectTimeoutMS: 5000,
    reconnectTries: Number.MAX_SAFE_INTEGER,
    reconnectInterval: 5000,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
};

const connection = mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DB_NAME}`, mongooseOptions);

connection
    .then(() => {
        debug(`DB ${DB_NAME} connected`);
    })
    .catch(({ message }) => {
        debug(`DB ${DB_NAME} connected error ${message}`);
    });
