const Category = require ('./../../models/Category');

module.exports = () => {
  return Category.find().sort({name:1})
}