import { logs } from '../odm';

export class LogsModel {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const data = await logs.create(this.data);

        return data;
    }
}
