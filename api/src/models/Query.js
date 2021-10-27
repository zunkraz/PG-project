const mongoose = require('mongoose');

const query = new mongoose.Schema(
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
    },
    { timestamp: true }
)

const Query = mongoose.model('Query', query);

module.exports = Query;