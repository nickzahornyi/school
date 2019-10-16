export const addVideo = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const addKeynote = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getVideoByHash = (req, res) => {
    try {
        res.sendStatus(200);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteVideoByHash = (req, res) => {
    try {
        res.status(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getKeynoteByHash = (req, res) => {
    try {
        res.sendStatus(200);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteKeynoteByHash = (req, res) => {
    try {
        return res.sendStatus(200);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
