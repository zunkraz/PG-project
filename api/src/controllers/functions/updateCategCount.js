const Category = require ('./../../models/Category');

module.exports = (data) => {
  return Category.findOneAndUpdate(data,
    {$inc:{searchCount: 1}},
    {new: true});
}