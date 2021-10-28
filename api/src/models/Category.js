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
            requerid: true,
        },
        searchCount: {
            type: Number,
            default: 0,
        },
        professionalId: [{type: Schema.Types.ObjectId, ref: 'Users'}],       
    },
    { timestamp: true }
)

const Category = mongoose.model('Categories', category);

module.exports = Category;