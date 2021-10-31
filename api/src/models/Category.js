const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category = new Schema (
    {
        name: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        searchCount: {
            type: Number,
            default: 0,
        },
        professionalId: [{type: Schema.Types.ObjectId, ref: 'users'}],       
    },
    { timestamp: true }
)

const Category = mongoose.model('categories', category);

module.exports = Category;
