export const login = (req, res) => {
    try {
        const authorization = req.get('authorization');
        const { email } = req.body;

        req.session.email = email;

        if (authorization) {
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
