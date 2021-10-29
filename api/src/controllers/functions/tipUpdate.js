//admin function
const Tip = require('../../models/Tip');

module.exports = (id,updateInfo) => {
  return Tip.findByIdAndUpdate(id,{
    $set: updateInfo
  }, {new: true});
}