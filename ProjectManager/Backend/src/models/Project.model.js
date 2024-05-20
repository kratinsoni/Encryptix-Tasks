import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const projectSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a project name'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a project description'],
    },
    projectManager: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    teamMembers: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User',
        },
    ],
    tasks: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        },
    ],
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
}, { timestamps: true });

export const Project = mongoose.model('Project', projectSchema);