import { classes, users } from '../odm';
import { NotFoundError } from '../utils';

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

    async enroll() {
        const { hash, payload } = this.data;
        const { user, status, notes } = payload;

        const student = await users.findOne({ hash: user });

        if (!student) {
            throw new NotFoundError(`can not find student with hash ${hash}`);
        }

        const { _id } = student;
        const isExists = await classes.findOne({ hash, 'students.user': _id });

        if (isExists) {
            throw new Error(
                `student with hash ${user} already enrolled to the class with hash ${hash}`
            );
        }

        const enrolledUser = {
            user: _id,
            status,
            notes,
        };

        const data = await classes.findOneAndUpdate(
            { hash },
            { $push: { students: enrolledUser } }
        );

        return data;
    }

    async expel() {
        const { hash, payload } = this.data;
        const { user } = payload;

        const student = await users.findOne({ hash: user });

        if (!student) {
            throw new NotFoundError(`can not find student with hash ${hash}`);
        }

        const { _id } = student;
        const isExists = await classes.findOne({ hash, 'students.user': _id });

        if (!isExists) {
            throw new Error(
                `student with hash ${user} not enrolled to the class with hash ${hash}`
            );
        }

        const data = await classes.findOneAndUpdate(
            { hash, students: { $elemMatch: { user: _id } } },
            { 'students.$.expelled': true }
        );

        return data;
    }
}
