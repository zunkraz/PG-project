const Review = require ('./../../models/Review');

module.exports = () => {
  return Review.aggregate([{$sample: {size: 3}}])
}