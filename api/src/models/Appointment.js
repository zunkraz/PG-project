const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointment = new Schema(
    {
        date:{
            type: String,
            required: true,
            unique: true,
        },
        status: {
            type: String,
            enum: ['attended', 'pending'],
            default: 'pending',
        },
        duration: {
            type: Number,
            default: 30,
        },
        available: {
            type: Boolean,
            default: true,
        },
        cost: {
            type: Number,
            required: true,
        },
        customerId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        professionalId: {
            type: Schema.Types.ObjectId,
            required: true,
        },       
    },
    { timestamp: true }
)

const Appointment = mongoose.model('Appointments', appointment);

module.exports = Appointment;