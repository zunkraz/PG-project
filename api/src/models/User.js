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
            //unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        },
        country: {
            type: Schema.Types.ObjectId, ref: 'countries'
        },
        state: {
            type: String
        },
        city: {
            type: String
        },
        birthdate: {
            type: Date,
        },
        img: {
            type: String
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        isProfessional: {
            type: Boolean,
            default: false
        },
        professionalRegistration: {
            type: String,
            unique: false,
            required: false
        },
        cost: {
            type: Number
        },
        category: [{type: Schema.Types.ObjectId, ref: 'categories'}],
        degree: {
            type: String
        },
        bankAccount: {
            type: String
        },
        appointments: [{type: Schema.Types.ObjectId, ref: 'appointments'}],
        schedule: [{
            date: {
                type: String
            },
            available: {
                type: Boolean,
                default: true
            },
        }],
        likes: {
            type: Number,
            default: 0
        },
        dislikes: {
            type: Number,
            default: 0
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    { timestamp: true }
)

const User = mongoose.model('users', user);

module.exports = User;
