import jwt from 'jsonwebtoken';

import { getPassword } from '../../utils/env';

const password = getPassword();

export const login = async (req, res) => {
    try {
        const authorization = req.get('authorization');

        if (authorization) {
            const token = await jwt.sign(req.body, password);

            res.setHeader('X-Token', token);
            res.sendStatus(204);
        } else {
            res.status(400).json({ message: 'incorrect payload' });
        }
    } catch (error) {
        res.status(400).json({ message: 'some server error' });
    }
};

export const logout = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
