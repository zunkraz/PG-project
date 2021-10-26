const mongoose = require('mongoose');

const user = mongoose.Schema(
    {
        userName: {
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
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        isProfesional: {
            type: Boolean,
            required: true,
            default: false,
        },
        professions: [{type: Schema.Types.ObjectId, ref: 'professions'}],
        disponibilidad: [{type: String}],
        isActive: {
            type: Boolean
        }
    },
    { timestamp: true }
)

const User = mongoose.model('User', user);

module.exports = User;