const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category = new Schema (
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

const Category = mongoose.model('Categories', category);

module.exports = Category;