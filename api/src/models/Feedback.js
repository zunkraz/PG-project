const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedback = new Schema(
  {
    score: {
      type: Number,
      min: 1,
      max: 5,
    },
    text: {
      type: String,
    },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    professionalId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    appointmentId: {
      type: Schema.Types.ObjectId,
      ref: 'appointments',
      required: true,
    },
    date: {
      year:{
        type: Number
      },
      month:{
        type: Number
      },
      dayNumber:{
        type: Number
      }
    }
  },
  { timestamp: true }
)

const Feedback = mongoose.model('feedbacks', feedback);

module.exports = Feedback;