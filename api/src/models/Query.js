const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const query = new Schema(

    {
        cost: {
            type: Number,
            required: true,
        },
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        professionalId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        paid: {
            typeof: Boolean,
            default: false,
        }   
    },
    { timestamp: true }
)

const Query = mongoose.model('Querys', query);

module.exports = Query;