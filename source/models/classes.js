import { classes } from '../odm';

export class ClassesModel {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const data = await classes.create(this.data);

        return data;
    }

    async getAll() {
        const data = await classes.find({}).lean();

        return { data };
    }

    async getByHash() {
        const { hash } = this.data;
        const data = await classes.findOne({ hash }).lean();

        return data;
    }

    async updateByHash() {
        const { hash, payload } = this.data;
        const data = await classes.findOneAndUpdate({ hash }, payload);

        return data;
    }

    async removeByHash() {
        const { hash } = this.data;
        const data = await classes.findOneAndDelete({ hash });

        return data;
    }
}
