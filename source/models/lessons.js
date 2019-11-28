import { lessons } from '../odm';

export class LessonsModel {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const data = await lessons.create(this.data);

        return data;
    }

    async getAll() {
        const data = await lessons.find({}).lean();

        return { data };
    }

    async getByHash() {
        const { hash } = this.data;
        const data = await lessons.findOne({ hash }).lean();

        return data;
    }

    async updateByHash() {
        const { hash, payload } = this.data;
        const data = await lessons.findOneAndUpdate({ hash }, payload);

        return data;
    }

    async removeByHash() {
        const { hash } = this.data;
        const data = await lessons.findOneAndDelete({ hash });

        return data;
    }
}
