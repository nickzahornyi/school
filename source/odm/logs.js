import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        method: String,
        path: String,
        duration: {
            start: Date,
            end: Date,
        },
        payload: Object,
        agent: String,
    },
    {
        timestamps: {
            createdAt: 'created',
        },
        capped: {
            size: 50 * 1024 * 1024,
            max: 50000,
        },
    }
);

export const logs = mongoose.model('logs', schema);
