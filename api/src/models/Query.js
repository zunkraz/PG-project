const mongoose = require('mongoose');

const query = mongoose.Schema(
    {
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

const Query = mongoose.model('Query', query);

module.exports = Query;