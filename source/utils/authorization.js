import jwt from 'jsonwebtoken';

import { getPassword } from './env';

const password = getPassword();

export const authorization = async (req, res, next) => {
    console.log('www');
    const authorization = req.header('authorization');
    const token = req.header('x-token');

    if (authorization === password && req.session.email) {
        try {
            await jwt.verify(token, password);
            next();
        } catch (error) {
            return res.status(401).json({ message: 'credentials are not valid' });
        }
    }

    res.status(401).json({
        message: 'credentials are not valid',
    });
};
