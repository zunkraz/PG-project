const mongoose = require('mongoose');

const user = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        professionalRegistration: {
            type: Number,
            required: true,
            unique: true,
        },
        country: {
            type: String,
            required: true,
        },
        likes: {
            type: Number,
        },
        dislikes: {
            type: Number,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        isProfessional: {
            type: Boolean,
            required: true,
            default: false,
        },
        category: [{type: mongoose.Schema.Types.ObjectId, ref: 'professions'}],
        schedule: [{
            date: {
                type: Date,
                require: true,
            },
            available: {
                type: Boolean,
                 default: true
            },
        }],
        isActive: {
            type: Boolean,
            default: true,
        }
    },
    { timestamp: true }
)

const User = mongoose.model('User', user);

module.exports = User;