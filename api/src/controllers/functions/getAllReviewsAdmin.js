//admin function
const Review = require('../../models/Review');

module.exports = () => {
  return Review.find().populate('userId', 'id username');
}