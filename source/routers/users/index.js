import { UsersController } from '../../controllers';

export const get = async (req, res) => {
    try {
        const { page, size } = req.query;
        const model = new UsersController({ page, size });
        const data = await model.getAll();

        res.status(200).json({ ...data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = async (req, res) => {
    try {
        const model = new UsersController(req.body);
        const data = await model.create();

        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
