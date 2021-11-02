const Tip = require ('./../../models/Tip');

module.exports = () => {
  return Tip.aggregate([
    {$match:{isApproved:true}},
    {$sample: {size: 5}}
  ])
};