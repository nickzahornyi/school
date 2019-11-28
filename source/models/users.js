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
}
