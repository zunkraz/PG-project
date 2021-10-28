const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tip = new Schema(
    {
        text: {
            type: String,
            required: true,
        },     
    },
    { timestamp: true }
)

const Tip = mongoose.model('tips', tip);

module.exports = Tip;
