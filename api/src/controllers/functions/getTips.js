const Tip = require ('./../../models/Tip');

module.exports = () => {
  return Tip.aggregate([{$sample: {size: 4}}])
}