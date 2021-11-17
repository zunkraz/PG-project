const Category = require ('./../../models/Category');

module.exports = () => {
    return Category.updateMany({},{$set:{searchCount:0}});
};