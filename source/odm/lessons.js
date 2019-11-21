import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    title: String,
    order: Number,
    uri: String,
});

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        required: true,
    },
    hash: {
        type: String,
    },
    availability: [
        {
            type: String,
            enum: ['select', 'premium'],
        },
    ],
    content: {
        videos: [contentSchema],
        keynotes: [contentSchema],
    },
    created: Date,
    modified: Date,
});

export const lessons = mongoose.model('lessons', schema);
