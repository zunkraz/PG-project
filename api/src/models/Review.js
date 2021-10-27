const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const review = new Schema(
    {
        rate: {
            type: Number,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        text: {
            type: String,
        },       
    },
    { timestamp: true }
)

const Review = mongoose.model('Reviews', review);

module.exports = Review;