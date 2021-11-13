const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const report = new Schema(
    {
      reason: {
        type: String,
        enum: ['Service','App','Payment','Account','Other'],
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
        orderId: {
            type: String,
        },
        professionalUsername:{
          type: String
        }
    },
    { timestamp: true }
)

const Report = mongoose.model('reports', report);

module.exports = Report;