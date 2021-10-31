const Country = require('../../models/Country');

module.exports = (name) => {
    return Country.find({name})
    // .populate("users", 'username')
};