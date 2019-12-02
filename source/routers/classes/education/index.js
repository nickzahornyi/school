import { Classes } from '../../../controllers';

export const enroll = async (req, res) => {
    try {
        const { classHash } = req.params;
        const model = new Classes({ hash: classHash, payload: req.body });

        await model.enroll();

        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const expel = async (req, res) => {
    try {
        const { classHash } = req.params;
        const model = new Classes({ hash: classHash, payload: req.body });

        await model.expel();

        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
