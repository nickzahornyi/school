import { ClassesModel } from '../models';

export class ClassesController {
    constructor(data) {
        this.models = {
            classes: new ClassesModel(data),
        };
    }

    async create() {
        const data = await this.models.classes.create();

        return data;
    }

    async getAll() {
        const data = await this.models.classes.getAll();

        return data;
    }

    async getByHash() {
        const data = await this.models.classes.getByHash();

        return data;
    }

    async updateByHash() {
        const data = await this.models.classes.updateByHash();

        return data;
    }

    async removeByHash() {
        const data = await this.models.classes.removeByHash();

        return data;
    }
}
