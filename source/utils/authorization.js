import { getPassword } from './env';

const password = getPassword();

export const authorization = (req, res, next) => {
    const authorization = req.header('authorization');

    if (authorization === password && req.session.email) {
        return next();
    }

    res.status(401).json({
        message: 'authentication credentials are not valid',
    });
};
