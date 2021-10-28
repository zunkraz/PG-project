//admin function
const Category = require('../../models/Category');

module.exports = (newCategory) => {
  const newCat = new Category(newCategory);
  return newCat.save();
}