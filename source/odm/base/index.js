import mongoose from 'mongoose';
import v4 from 'uuid/v4';

const schema = new mongoose.Schema(
    {
        hash: {
            type: String,
            required: true,
            unique: true,
            default: () => v4(),
        },
        name: {
            first: {
                type: String,
                required: true,
                minlength: 2,
                maxlength: 15,
            },
            last: {
                type: String,
                required: true,
                minlength: 2,
                maxlength: 15,
            },
        },
        image: String,
        dateOfBirth: Date,
        emails: [
            {
                email: {
                    type: String,
                    required: true,
                    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                },
                primary: Boolean,
            },
        ],
        phones: [
            {
                phone: {
                    type: String,
                    required: true,
                },
                primary: Boolean,
            },
        ],
        password: {
            type: String,
            select: false,
            required: true,
        },
        sex: {
            type: String,
            enum: ['m', 'f'],
            required: true,
        },
        description: String,
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    }
);

schema.index({ 'name.first': 1, 'name.last': 1 });

// Collection
export const base = mongoose.model('users', schema);
