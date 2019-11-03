import path from 'path';

export const login = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const logout = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const mainPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../', '../', 'views/index.html'));
};

export const callback = (req, res) => {
    res.redirect('/');
};
