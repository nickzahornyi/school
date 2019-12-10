import mongoose from 'mongoose';

import { classes } from './';
import { user } from './base';

const staff = user.discriminator(
    'staff',
    new mongoose.Schema(
        {
            roles: [
                {
                    type: String,
                    default: 'newbie',
                    enum: ['newbie', 'student', 'teacher'],
                },
            ],
            image: { type: String },
            classes: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: classes,
                validate: [
                    async function(value) {
                        const data = await classes.findOne({ _id: value });

                        return Boolean(data);
                    },
                    'Class with such id - {VALUE} was not found in classes collection',
                ],
            },
            started: { type: Date },
        },
        { discriminatorKey: 'model' }
    )
);
export { staff };
