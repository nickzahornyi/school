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
}
