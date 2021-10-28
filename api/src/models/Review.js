const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const review = new Schema(
    {
        rate: {
            type: String,
            enum: ['Good', 'Bad'],
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId, 
            ref: 'users',
            required: true,
        },
        text: {
            type: String,
        },       
    },
    { timestamp: true }
)

const Review = mongoose.model('reviews', review);

module.exports = Review;