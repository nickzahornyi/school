import jwt from 'jsonwebtoken';

import { getPassword } from './env';

const password = getPassword();

export const authentication = async (req, res, next) => {
    const authorization = req.header('authorization');

    if (!authorization) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = await jwt.sign(req.body, password);

    res.setHeader('X-Token', token);

    return next();
};
