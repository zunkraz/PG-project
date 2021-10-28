const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tip = new Schema(
    {
        text: {
            type: String,
            required: true,
        },
        isApproved:{
            type: Boolean,
            default: false,
        }     
    },
    { timestamp: true }
)

const Tip = mongoose.model('Tips', tip);

module.exports = Tip;
