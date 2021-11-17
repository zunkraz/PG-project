const Category = require ('./../../models/Category');

module.exports = () => {
    return Category.updateMany(
        {name:{$exist: true}},
        {$set:{searchCount:0}},
        {multi:true})
};