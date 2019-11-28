import { LessonsController } from '../../../controllers';

export const getByHash = async (req, res) => {
    try {
        const { lessonHash } = req.params;
        const model = new LessonsController({ hash: lessonHash });
        const data = await model.getByHash();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateByHash = async (req, res) => {
    try {
        const { lessonHash } = req.params;
        const model = new LessonsController({ hash: lessonHash, payload: req.body });
        const data = await model.updateByHash();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteByHash = async (req, res) => {
    try {
        const { lessonHash } = req.params;
        const model = new LessonsController({ hash: lessonHash });

        await model.removeByHash();
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
