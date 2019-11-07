import jwt from 'jsonwebtoken';

import { getPassword } from './env';

const password = getPassword();

export const authorization = async (req, res, next) => {
    const token = req.header('authorization').split(' ')[ 1 ];
    try {
        await jwt.verify(token, password);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'credentials are not valid' });
    }
};
