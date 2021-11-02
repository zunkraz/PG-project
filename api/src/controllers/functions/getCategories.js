const Category = require ('./../../models/Category');

module.exports = (feat) => {
  let categories;
  if (feat) return Category.find().sort({searchCount: -1}).limit(4);
  else return Category.find().sort({name: 1});
}