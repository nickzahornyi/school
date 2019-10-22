export const authorization = (req, res, next) => {
    if (req.header('Authorization') === process.env.PASSWORD) {
        return next();
    }

    res.status(401).json({ message: 'Wrong password' });
};
