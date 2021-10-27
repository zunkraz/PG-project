const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tip = new Schema(
    {
        text: {
            type: Number,
            required: true,
        },     
    },
    { timestamp: true }
)

const Tip = mongoose.model('Tips', tip);

module.exports = Tip;
