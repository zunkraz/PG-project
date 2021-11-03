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
        isAdmin: {
            type: Boolean,
            default: false
        },
        isProfessional: {
            type: Boolean,
            default: false
        },
        isActive: {
            type: Boolean,
            default: true //activación de correo
        },
        appointments: [{type: Schema.Types.ObjectId, ref: 'appointments'}],
        // professionalData: {
        img: {
            type: String
            },
        professionalRegistration: {
            type: String,
            unique: false,
            required: false
        },
        biography: {
            type: String,
        },
        cost: {
            type: Number
        },
        category: {
            type: Schema.Types.ObjectId, ref: 'categories'
        },
        tittle: {
            type: String
        },
        institue: {
            type: String
        },
        regNumber: {
            type: String
        },
        regUrl: {
            type: String
        },
        isVerified: {
            type: Boolean,
            default: true //verificación de profesioanl
        },
        bankAccount: {
            type: String
        },
        schedule: [{
            date: {
                type: String
            },
            available: {
                type: Boolean,
                default: true
            },
        }], //todavía por modificar para migrar a calendly
        likes: {
            type: Number,
            default: 0
        },
        dislikes: {
            type: Number,
            default: 0
        },

        // },
    },
    { timestamp: true }
)

user.pre('save', function (next) {
    this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase();
    this.lastname = this.lastname.charAt(0).toUpperCase() + this.lastname.slice(1).toLowerCase();
    next();
});

const User = mongoose.model('users', user);

module.exports = User;
