const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema(
    {
        name: {
            type: String,
            // required: true,
        },
        lastname: {
            type: String,
            // required: true,
        },
        username: {
            type: String,
            // required: true,
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
            type: String,
            unique: false,
            required: false,
        },
        img: {
            type: String
        },
        country: {
            type: String,
        },
        likes: {
            type: Number,
            default: 0,
        },
        dislikes: {
            type: Number,
            default: 0,
        },
        cost: {
            type: Number,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isProfessional: {
            type: Boolean,
            default: false,
        },
        category: [{type: Schema.Types.ObjectId, ref: 'categories'}],
        appointments: [{type: Schema.Types.ObjectId, ref: 'appointments'}],
        schedule: [{
            date: {
                type: String,
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

const User = mongoose.model('users', user);

module.exports = User;
