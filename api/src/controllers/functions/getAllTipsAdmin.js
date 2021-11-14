//admin function
const Tip = require('../../models/Tip');

module.exports = () => {
  return Tip.find().populate('categoryId','name');
}