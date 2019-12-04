import mongoose from 'mongoose';
import v4 from 'uuid/v4';

import { users, lessons } from './';

const studentSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: users,
        validate: [
            async function(value) {
                const data = await users.findOne({ _id: value });

                return !!data;
            },
            'User with such id - {VALUE} was not found in users collection',
        ],
    },
    status: String,
    expelled: Boolean,
    notes: {
        type: String,
        maxlength: 250,
    },
});

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            maxlength: 30,
        },
        description: {
            type: String,
            maxlength: 250,
        },
        hash: {
            type: String,
            required: true,
            default: () => v4(),
        },
        students: [studentSchema],
        lessons: [
            {
                lesson: {
                    type: mongoose.SchemaTypes.ObjectId,
                    ref: lessons,
                    validate: [
                        async function(value) {
                            const data = await lessons.findOne({ _id: value });

                            return !!data;
                        },
                        'Lesson with such id - {VALUE} was not found in lessons collection',
                    ],
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
                validate: [
                    function(value) {
                        return this.duration.started < value;
                    },
                    'Started date must be less than closed date',
                ],
            },
        },
        order: {
            type: Number,
            min: 0,
        },
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    }
);

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
