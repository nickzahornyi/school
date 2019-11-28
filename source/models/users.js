import { users } from '../odm';

export class UserModel {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const data = await users.create(this.data);

        return data;
    }

    async getAll() {
        const data = await users.find({}).lean();

        return { data };
    }

    async getByHash() {
        const { hash } = this.data;
        const data = await users.findOne({ hash }).lean();

        return data;
    }

    async updateByHash() {
        const { hash, payload } = this.data;
        const data = await users.findOneAndUpdate({ hash }, payload);

        return data;
    }

    async removeByHash() {
        const { hash } = this.data;
        const data = await users.findOneAndDelete({ hash });

        return data;
    }
}
