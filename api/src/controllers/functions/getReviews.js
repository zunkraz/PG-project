const Review = require ('./../../models/Review');

module.exports = () => {
  return Review.aggregate([
    {$match: {rate:'Good'}},
    {$sample: {size: 3}}
  ])
};