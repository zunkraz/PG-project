const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const service = new Schema (
    {
        name: {
            type: String,
            required: true,
        },
        cost: {
            type: Number,
            required: true,
        },
        professionalId: [{type: Schema.Types.ObjectId, ref: 'users'}],       
    },
    { timestamp: true }
)

const Service = mongoose.model('Services', service);

module.exports = Service;