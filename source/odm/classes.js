import mongoose from 'mongoose';

import { users, lessons } from './';

const studentSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: users,
    },
    status: String,
    expelled: Boolean,
    notes: String,
});

const schema = new mongoose.Schema({
    title: String,
    description: String,
    hash: {
        type: String,
    },
    students: [studentSchema],
    lessons: [
        {
            lesson: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: lessons,
            },
            scheduled: Date,
        },
    ],
    duration: {
        started: {
            type: Date,
            required: true,
        },
        closed: {
            type: Date,
            required: true,
        },
    },
    order: Number,
    created: Date,
    modified: Date,
});

schema.index(
    {
        title: 'text',
        description: 'text',
    },
    {
        name: 'titleDescription',
    }
);
schema.index(
    {
        order: 1,
    },
    {
        name: 'order',
    }
);

const classes = mongoose.model('classes', schema);

classes.createIndexes();

export { classes };
