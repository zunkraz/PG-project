//admin function
const Category = require('../../models/Category');

module.exports = (id,updateInfo) => {
  return Category.findByIdAndUpdate(id,{
    $set: updateInfo
  }, {new: true});
}