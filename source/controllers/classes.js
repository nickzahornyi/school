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
}
