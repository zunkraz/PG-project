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
        customerId: {
            type: Schema.Types.ObjectId, 
            ref: 'users',
            required: true,
        },
        professionalId: {
            type: Schema.Types.ObjectId, 
            ref: 'users',
            required: true,
        },       
    },
    { timestamp: true }
)

const Appointment = mongoose.model('appointments', appointment);

module.exports = Appointment;