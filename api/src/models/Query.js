const mongoose = require('mongoose');

const query = mongoose.Schema(
    {
        cost: {
            type: Number,
            required: true,
        },
        costumerId: {
            type: Schema.Types.ObjectId
        },
        profesionalId: {
            type: Schema.Types.ObjectId
        },       
    },
    { timestamp: true }
)

const Query = mongoose.model('Query', query);

module.exports = Query;