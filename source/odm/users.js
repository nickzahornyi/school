import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: {
        first: {
            type: String,
            required: true,
        },
        last: {
            type: String,
            required: true,
        },
    },
    phones: [
        {
            phone: {
                type: String,
                required: true,
            },
            primary: Boolean,
        },
    ],
    emails: [
        {
            email: {
                type: String,
                required: true,
            },
            primary: Boolean,
        },
    ],
    password: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        enum: ['m', 'f'],
        required: true,
    },
    roles: [
        {
            type: String,
            default: 'newbie',
            enum: ['newbie', 'student', 'teacher'],
        },
    ],
    socials: {
        facebook: String,
        linkedin: String,
        github: String,
        skype: String,
    },
    notes: String,
    hash: {
        type: String,
    },
    disabled: Boolean,
    created: Date,
    modified: Date,
});

export const users = mongoose.model('users', schema);
